import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./farmerScreen.css";
function FarmerScreen() {
  const publicID = "F45SX5S26A9ZE9EE13C21X23X";
  function farmerSubmit(e) {
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
          </form>
        </div>
        <div className="footer">Public id : {publicID}</div>
      </div>
    </React.Fragment>
  );
}
export default FarmerScreen;
