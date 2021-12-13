import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./microFinanceScreen.css";
function MicroFinanceScreen() {
  const publicID = "F45SX5S26A9ZE9EE13C21X23X";
  const MicroFinanceDetails = {
    balance: "0$",
  };
  function microFinanceSubmit(e) {
    e.preventDefault();
    const farmerId = e.target.farmerId.value;
    const lotNumber = e.target.lotNumber.value;
    const fundAmount = e.target.fundAmount.value;
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
                Balance :{" "}
                <span className="text-detail" className="text-detail">
                  {MicroFinanceDetails.balance}
                </span>
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
