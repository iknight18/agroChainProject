import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { ABI, ADDR } from "../../config";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./customerScreen.css";
function CustomerScreen() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [msg, setMsg] = useState(null);
  const [recipt, setRecipt] = useState(null);
  const [product, setProduct] = useState(false);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      setContract(new web3.eth.Contract(ABI, ADDR));
    }
    load();
  }, []);

  const publicID = "F45SX5S26A9ZE9EE13C21X23X";
  const [farmerDetails, setFarmerDetails] = useState(null);
  const [lotDetails, setLotDetails] = useState(null);
  //  {
  //   farmerId: "001",
  //   farmerName: "Feres",
  //   location: "Tunis",
  //   cropName: "Gam7",
  //   phone: "5558425",
  //   quantity: 50,
  //   expectedPrice: 12.5,
  //   lotNumber: 20,
  //   grade: 3,
  //   MRP: 23,
  //   testDate: "02 / 02 / 2021",
  //   expiryDate: "03 / 02 / 2021",
  // };
  function customerSubmit(e) {
    e.preventDefault();
    const farmerId = e.target.farmerId.value;
    const lotNumber = e.target.lotNumber.value;
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
    contract.methods
      .getquality(lotNumber)
      .call({ from: account })
      .then(function (result) {
        console.log(result);
        setLotDetails({
          lotNumber: result[0],
          grade: result[1],
          MRP: result[2],
          testDate: result[3],
          expiryDate: result[4],
        });
      });
    console.log(farmerId, lotNumber);
  }
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="title">
          <h1>AgroChain - Customer Screen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ullam consequuntur distinctio quis velit!
          </p>
        </div>
        <div className="main-content">
          <form className="main-form" onSubmit={customerSubmit}>
            <h2>Customer</h2>
            <TextField
              variant="outlined"
              label="Farmer ID"
              name="farmerId"
              required
            ></TextField>
            <TextField
              variant="outlined"
              label="Lot Number"
              name="lotNumber"
              required
            ></TextField>
            <Button variant="contained" type="submit" className="btn">
              Get Details
            </Button>
            {farmerDetails && lotDetails ? (
              <div className="details">
                <div>
                  Farmer Id :{" "}
                  <span className="text-detail">{farmerDetails.farmerId}</span>
                </div>
                <div>
                  Farmer Name :{" "}
                  <span className="text-detail">
                    {farmerDetails.farmerName}
                  </span>
                </div>
                <div>
                  Location :{" "}
                  <span className="text-detail">{farmerDetails.location}</span>
                </div>
                <div>
                  Crop Name :{" "}
                  <span className="text-detail">{farmerDetails.cropName}</span>
                </div>
                <div>
                  Phone :{" "}
                  <span className="text-detail">{farmerDetails.phone}</span>
                </div>
                <div>
                  Quantity :{" "}
                  <span className="text-detail">{farmerDetails.quantity}</span>
                </div>
                <div>
                  Expected Price :{" "}
                  <span className="text-detail">
                    {farmerDetails.expectedPrice}
                  </span>
                </div>
                <div>
                  Lot Number :{" "}
                  <span className="text-detail">{lotDetails.lotNumber}</span>
                </div>
                <div>
                  Grade :{" "}
                  <span className="text-detail">{lotDetails.grade}</span>
                </div>
                <div>
                  MRP : <span className="text-detail">{lotDetails.MRP}</span>
                </div>
                <div>
                  Test Date :{" "}
                  <span className="text-detail">{lotDetails.testDate}</span>
                </div>
                <div>
                  Expiry Date :{" "}
                  <span className="text-detail">{lotDetails.expiryDate}</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
        <div className="footer">Public id : {publicID}</div>
      </div>
    </React.Fragment>
  );
}
export default CustomerScreen;
