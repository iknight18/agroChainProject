import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./qualityScreen.css";
function QualityScreen() {
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
  function qualitySubmit(e) {
    e.preventDefault();
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
        </div>
        <div className="footer">Public id : {publicID}</div>
      </div>
    </React.Fragment>
  );
}
export default QualityScreen;
