import { from } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Auth, signOut, signInWithCustomToken } from 'firebase/auth';
import detectEthereumProvider from "@metamask/detect-provider";

export class AuthService {

  signOut() {
    return signOut(this.auth);
  }
  signInWithMetaMask() {
    let ethereum;
    return from(detectEthereumProvider()).pipe(
      // Step 1: Request (limited) access to users ethereum account
      switchMap(async (provider) => {
        if (!provider) {
          throw new Error("Please install MetaMask");
        }
        ethereum = provider;
        return await ethereum.request({ method: "eth_requestAccounts" });
      }),
      // Step 2: Retrieve the current nonce for the requested address
      switchMap(() => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ address: ethereum.selectedAddress }),
        };
        fetch(
          "https://us-central1-ionic-angular-web3.cloudfunctions.net/getNonceToSign",
          requestOptions
        );
      }),
      // Step 3: Get the user to sign the nonce with their private key
      switchMap(
        async (response) =>
          await ethereum.request({
            method: "personal_sign",
            params: [
              `0x${this.toHex(response.nonce)}`,
              ethereum.selectedAddress,
            ],
          })
        //
      ),
      // Step 4: If the signature is valid, retrieve a custom auth token for Firebase
      switchMap((sig) => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            address: ethereum.selectedAddress,
            signature: sig,
          }),
        };
        fetch(
          "https://us-central1-ionic-angular-web3.cloudfunctions.net/verifySignedMessage",
          requestOptions
        );
      }),
      // Step 5: Use the auth token to auth with Firebase
      switchMap(
        async (response) =>
          await signInWithCustomToken(this.auth, response.token)
      )
    );
  }
  toHex(stringToConvert) {
    return stringToConvert
      .split("")
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");
  }
}
