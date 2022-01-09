import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./qualityScreen.css";
import Web3 from "web3";
import { ABI, ADDR } from "../../config";
import QRCode from "qrcode.react";
import addresses from "../../addresses.json";
import { useNavigate } from "react-router-dom";

function QualityScreen() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [msg, setMsg] = useState(null);
  const [recipt, setRecipt] = useState(null);
  const [product, setProduct] = useState(false);
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
      if (!addresses.quality.includes(account)) {
        navigate("/");
      }
    }
  }, [account]);
  const publicID = account;
  const [FarmerDetails, setFarmerDetails] = useState(null);
  // {
  //   farmerId: null,
  //   farmerName: null,
  //   location: null,
  //   cropName: null,
  //   phone: null,
  //   quantity: 50,
  //   expectedPrice: 12.5,
  // }
  function productSubmit(e) {
    e.preventDefault();
    contract.methods
      .quality(
        e.target.lotNumber.value,
        e.target.grade.value,
        e.target.MRP.value,
        e.target.testDate.value.toLocaleString("en-GB"),
        e.target.expiryDate.value.toLocaleString("en-GB")
      )
      .send({ from: account })
      .then(function (receipt) {
        console.log(receipt);
        setRecipt(receipt);
        setMsg("Added Successfully Check your Transaction Receipt");
      });
  }
  function qualitySubmit(e) {
    e.preventDefault();
    const farmerId = e.target.farmerId.value;
    try {
      contract.methods
        .getproduce(farmerId)
        .call({ from: account })
        .then(function (result) {
          console.log(result);
          setFarmerDetails({
            farmerId: result[0],
            farmerName: result[1],
            location: result[2],
            cropName: result[3],
            phone: result[4],
            quantity: result[5],
            expectedPrice: result[6],
          });
        });
    } catch (error) {
      alert("Famer ID Should Be an Integer");
    }
  }
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="title">
          <h1>AgroChain - Quality Testing Screen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ullam consequuntur distinctio quis velit!
          </p>
        </div>
        <div className="main-content">
          {product ? (
            <form className="main-form" onSubmit={productSubmit}>
              {msg ? (
                <React.Fragment>
                  <h2>{msg}</h2>
                  <QRCode value={JSON.stringify(recipt)}></QRCode>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <h2>Product Details</h2>
                  <TextField
                    variant="outlined"
                    label="Lot Number"
                    name="lotNumber"
                  ></TextField>
                  <TextField
                    variant="outlined"
                    label="Grade"
                    name="grade"
                  ></TextField>
                  <TextField
                    variant="outlined"
                    label="MRP"
                    name="MRP"
                    type="number"
                  ></TextField>
                  <TextField
                    variant="outlined"
                    label="Test Date"
                    name="testDate"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                  <TextField
                    variant="outlined"
                    label="Expiry Date"
                    name="expiryDate"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                  <Button variant="contained" type="submit" className="btn">
                    Submit
                  </Button>{" "}
                </React.Fragment>
              )}
            </form>
          ) : (
            <form className="main-form" onSubmit={qualitySubmit}>
              <h2>Quality Testing</h2>
              <TextField
                variant="outlined"
                label="Farmer ID"
                name="farmerId"
              ></TextField>
              <Button variant="contained" type="submit" className="btn">
                Get Details
              </Button>
              {FarmerDetails ? (
                <React.Fragment>
                  <div className="details">
                    <div>
                      Farmer ID :{" "}
                      <span className="text-detail">
                        {FarmerDetails.farmerId}
                      </span>
                    </div>
                    <div>
                      Farmer Name :{" "}
                      <span className="text-detail">
                        {FarmerDetails.farmerName}
                      </span>
                    </div>
                    <div>
                      Location :{" "}
                      <span className="text-detail">
                        {FarmerDetails.location}
                      </span>
                    </div>
                    <div>
                      Crop Name :{" "}
                      <span className="text-detail">
                        {FarmerDetails.cropName}
                      </span>
                    </div>
                    <div>
                      Phone :{" "}
                      <span className="text-detail">{FarmerDetails.phone}</span>
                    </div>
                    <div>
                      Quantity :{" "}
                      <span className="text-detail">
                        {FarmerDetails.quantity}
                      </span>
                    </div>
                    <div>
                      Expected Price :{" "}
                      <span className="text-detail">
                        {FarmerDetails.expectedPrice}
                      </span>
                    </div>
                    <Button
                      className="btn"
                      onClick={() => {
                        setProduct(!product);
                      }}
                    >
                      Approve Details
                    </Button>
                  </div>
                  <div className="print-block">
                    <Button variant="contained" onClick={() => {}}>
                      Print Block
                    </Button>
                    <Button variant="contained" onClick={() => {}}>
                      Print Transaction
                    </Button>
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </form>
          )}
        </div>
        <div className="footer">Public id : {publicID}</div>
      </div>
    </React.Fragment>
  );
}
export default QualityScreen;
