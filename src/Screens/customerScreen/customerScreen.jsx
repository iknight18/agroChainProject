import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./customerScreen.css";
function CustomerScreen() {
  const publicID = "F45SX5S26A9ZE9EE13C21X23X";
  const CustomerDetails = {
    farmerId: "001",
    farmerName: "Feres",
    location: "Tunis",
    cropName: "Gam7",
    phone: "5558425",
    quantity: 50,
    expectedPrice: 12.5,
    lotNumber: 20,
    grade: 3,
    MRP: 23,
    testDate: "02 / 02 / 2021",
    expiryDate: "03 / 02 / 2021",
  };
  function customerSubmit(e) {
    e.preventDefault();
    const farmerId = e.target.farmerId.value;
    const lotNumber = e.target.lotNumber.value;
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
            ></TextField>
            <TextField
              variant="outlined"
              label="Lot Number"
              name="lot Number"
            ></TextField>
            <Button variant="contained" type="submit" className="btn">
              Get Details
            </Button>
            <div className="details">
              <div>
                Farmer Id :{" "}
                <span className="text-detail" className="text-detail">
                  {CustomerDetails.farmerId}
                </span>
              </div>
              <div>
                Farmer Name :{" "}
                <span className="text-detail" className="text-detail">
                  {CustomerDetails.farmerName}
                </span>
              </div>
              <div>
                Location :{" "}
                <span className="text-detail" className="text-detail">
                  {CustomerDetails.location}
                </span>
              </div>
              <div>
                Crop Name :{" "}
                <span className="text-detail" className="text-detail">
                  {CustomerDetails.cropName}
                </span>
              </div>
              <div>
                Phone :{" "}
                <span className="text-detail">{CustomerDetails.phone}</span>
              </div>
              <div>
                Quantity :{" "}
                <span className="text-detail">{CustomerDetails.quantity}</span>
              </div>
              <div>
                Expected Price :{" "}
                <span className="text-detail">
                  {CustomerDetails.expectedPrice}
                </span>
              </div>
              <div>
                Lot Number :{" "}
                <span className="text-detail">{CustomerDetails.lotNumber}</span>
              </div>
              <div>
                Grade :{" "}
                <span className="text-detail">{CustomerDetails.grade}</span>
              </div>
              <div>
                MRP : <span className="text-detail">{CustomerDetails.MRP}</span>
              </div>
              <div>
                Test Date :{" "}
                <span className="text-detail">{CustomerDetails.testDate}</span>
              </div>
              <div>
                Expiry Date :{" "}
                <span className="text-detail">
                  {CustomerDetails.expiryDate}
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="footer">Public id : {publicID}</div>
      </div>
    </React.Fragment>
  );
}
export default CustomerScreen;
