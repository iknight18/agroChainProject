import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./farmerScreen.css";
import Web3 from "web3";
import { ABI, ADDR } from "../../config";
import QRCode from "qrcode.react";
import addresses from "../../addresses.json";
import { useNavigate } from "react-router-dom";

function FarmerScreen() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [msg, setMsg] = useState(null);
  const [recipt, setRecipt] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      setContract(new web3.eth.Contract(ABI, ADDR));
    }
    load();
  }, []);
  useEffect(() => {
    if (account) {
      if (!addresses.farmers.includes(account)) {
        navigate("/");
      }
    }
  }, [account]);
  async function farmerSubmit(e) {
    e.preventDefault();
    const farmerId = e.target.farmerId.value;
    const farmerName = e.target.farmerName.value;
    const location = e.target.location.value;
    const cropName = e.target.cropName.value;
    const phone = e.target.phone.value;
    const quantity = e.target.quantity.value;
    const expectedPrice = e.target.expectedPrice.value;
    console.log(
      farmerId,
      farmerName,
      location,
      cropName,
      phone,
      quantity,
      expectedPrice
    );
    console.log(contract);
    contract.methods
      .produce(
        account,
        farmerId,
        farmerName,
        location,
        cropName,
        phone,
        quantity,
        expectedPrice
      )
      .send({ from: account })
      .then(function (receipt) {
        console.log(receipt);
        setRecipt(receipt);
        setMsg("Added Successfully Check your Transaction Receipt");
      });
  }
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="title">
          <h1>AgroChain - Farmer Screen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ullam consequuntur distinctio quis velit!
          </p>
        </div>
        <div className="main-content">
          <form className="main-form" onSubmit={farmerSubmit}>
            <h2>Enter Details</h2>
            {msg ? (
              <React.Fragment>
                <h3>{msg}</h3>
                <QRCode value={JSON.stringify(recipt)}></QRCode>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <TextField
                  variant="outlined"
                  label="Farmer ID"
                  name="farmerId"
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Farmers Name"
                  name="farmerName"
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Location"
                  name="location"
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Crop Name"
                  name="cropName"
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Phone"
                  name="phone"
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Quantity"
                  name="quantity"
                  type="number"
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Expected Price"
                  name="expectedPrice"
                  type="number"
                  inputProps={{ step: 0.01 }}
                ></TextField>
                <Button variant="contained" type="submit" className="btn">
                  {" "}
                  Submit Details{" "}
                </Button>
              </React.Fragment>
            )}
          </form>
        </div>
        <div className="footer">Public id : {account}</div>
      </div>
    </React.Fragment>
  );
}
export default FarmerScreen;
