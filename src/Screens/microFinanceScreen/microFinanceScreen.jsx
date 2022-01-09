import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { ABI, ADDR } from "../../config";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./microFinanceScreen.css";
import addresses from "../../addresses.json";
import { useNavigate } from "react-router-dom";

function MicroFinanceScreen() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [msg, setMsg] = useState(null);
  const [recipt, setRecipt] = useState(null);
  const [balance, setBalance] = useState(null);
  const [farmerAdress, setFarmerAdress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (account) {
      if (!addresses.finance.includes(account)) {
        navigate("/");
      }
    }
    if (contract) {
      contract.methods
        .getBalance(account)
        .call({ from: account })
        .then(function (result) {
          if (result < 2000) {
            contract.methods
              .fundaddr(account)
              .send({ from: account })
              .then(function (receipt) {
                setBalance(2000);
              });
          } else {
            setBalance(result);
          }
          console.log(result);
        });
    }
  }, [account, contract]);
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      setContract(new web3.eth.Contract(ABI, ADDR));
    }
    load();
  }, []);

  const publicID = account;

  function microFinanceSubmit(e) {
    e.preventDefault();
    const farmerId = e.target.farmerId.value;
    const lotNumber = e.target.lotNumber.value;
    const fundAmount = e.target.fundAmount.value;
    contract.methods
      .getFarmerAddress(farmerId)
      .call({ from: account })
      .then(function (result) {
        console.log(result);
        setFarmerAdress(result);
      });
    contract.methods
      .sendCoin(farmerAdress, fundAmount, account)
      .send({ from: account })
      .then(function (result) {
        console.log(result);
        contract.methods
          .getBalance(account)
          .call({ from: account })
          .then(function (result) {
            setBalance(result);
            contract.methods
              .getBalance(farmerAdress)
              .call({ from: account })
              .then(function (result) {
                console.log(result);
              });
          });
      });

    console.log(farmerId, lotNumber, fundAmount);
  }
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="title">
          <h1>AgroChain - MicroFinance Screen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ullam consequuntur distinctio quis velit!
          </p>
        </div>
        <div className="main-content">
          <form className="main-form" onSubmit={microFinanceSubmit}>
            <h2>Enter Details</h2>
            <TextField
              variant="outlined"
              label="Farmer ID"
              name="farmerId"
            ></TextField>
            <TextField
              variant="outlined"
              label="Lot Number"
              name="lotNumber"
            ></TextField>
            <TextField
              variant="outlined"
              label="Fund Amount"
              name="fundAmount"
            ></TextField>
            <div className="details">
              <div>
                Balance : <span className="text-detail">{balance}$</span>
              </div>
            </div>
            <Button variant="contained" type="submit" className="btn">
              {" "}
              Fund Farmer{" "}
            </Button>
          </form>
        </div>
        <div className="footer">Public id : {publicID}</div>
      </div>
    </React.Fragment>
  );
}
export default MicroFinanceScreen;
