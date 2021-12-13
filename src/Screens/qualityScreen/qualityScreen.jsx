import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./qualityScreen.css";
function QualityScreen() {
  const [product, setProduct] = useState(false);
  const publicID = "F45SX5S26A9ZE9EE13C21X23X";
  const FarmerDetails = {
    farmerId: "001",
    farmerName: "Feres",
    location: "Tunis",
    cropName: "Gam7",
    phone: "5558425",
    quantity: 50,
    expectedPrice: 12.5,
  };
  function productSubmit(e) {
    e.preventDefault();
    setProduct(!product);
  }
  function qualitySubmit(e) {
    e.preventDefault();
    setProduct(!product);
    const farmerId = e.target.farmerId.value;
    console.log(farmerId);
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
              <TextField variant="outlined" label="MRP" name="MRP"></TextField>
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
              </Button>
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
              <div className="details">
                <div>
                  Farmer Name :{" "}
                  <span className="text-detail" className="text-detail">
                    {FarmerDetails.farmerName}
                  </span>
                </div>
                <div>
                  Location :{" "}
                  <span className="text-detail" className="text-detail">
                    {FarmerDetails.location}
                  </span>
                </div>
                <div>
                  Crop Name :{" "}
                  <span className="text-detail" className="text-detail">
                    {FarmerDetails.cropName}
                  </span>
                </div>
                <div>
                  Phone :{" "}
                  <span className="text-detail">{FarmerDetails.phone}</span>
                </div>
                <div>
                  Quantity :{" "}
                  <span className="text-detail">{FarmerDetails.quantity}</span>
                </div>
                <div>
                  Expected Price :{" "}
                  <span className="text-detail">
                    {FarmerDetails.expectedPrice}
                  </span>
                </div>
                <Button className="btn">Approve Details</Button>
              </div>
              <div className="print-block">
                <Button variant="contained">Print Block</Button>
                <Button variant="contained">Print Transaction</Button>
              </div>
            </form>
          )}
        </div>
        <div className="footer">Public id : {publicID}</div>
      </div>
    </React.Fragment>
  );
}
export default QualityScreen;
