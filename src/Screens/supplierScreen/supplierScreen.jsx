import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Web3 from "web3";
import "./supplierScreen.css";
import { ABI, ADDR } from "../../config";
import addresses from "../../addresses.json";
import { useNavigate } from "react-router-dom";

function SupplierScreen() {
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
      if (!addresses.supplier.includes(account)) {
        navigate("/");
      }
    }
  }, [account]);

  const publicID = account;
  const [SupplierDetails, setSupplierDetails] = useState(null);
  // {
  //   lotNumber: 20,
  //   grade: 3,
  //   MRP: 23,
  //   testDate: "02 / 02 / 2021",
  //   expiryDate: "03 / 02 / 2021",
  // };
  function supplierSubmit(e) {
    e.preventDefault();
    const lotNumber = e.target.lotNumber.value;
    contract.methods
      .getquality(lotNumber)
      .call({ from: account })
      .then(function (result) {
        setSupplierDetails({
          lotNumber: result[0],
          grade: result[1],
          MRP: result[2],
          testDate: result[3],
          expiryDate: result[4],
        });
        console.log(result);
      });
    console.log(lotNumber);
  }
  function supplierBuy() {}
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="title">
          <h1>AgroChain - Supplier Screen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ullam consequuntur distinctio quis velit!
          </p>
        </div>
        <div className="main-content">
          <form className="main-form" onSubmit={supplierSubmit}>
            <h2>Supplier</h2>
            <TextField
              variant="outlined"
              label="Lot Number"
              name="lotNumber"
              required
            ></TextField>
            <span>
              <Button variant="contained" type="submit" className="btn">
                Get Details
              </Button>
              <Button
                variant="contained"
                type="button"
                className="btn"
                onClick="supplierBuy()"
              >
                Buy
              </Button>
            </span>
            {SupplierDetails ? (
              <div className="details">
                <div>
                  Lot Number :{" "}
                  <span className="text-detail">
                    {SupplierDetails.lotNumber}
                  </span>
                </div>
                <div>
                  Grade :{" "}
                  <span className="text-detail">{SupplierDetails.grade}</span>
                </div>
                <div>
                  MRP :{" "}
                  <span className="text-detail">{SupplierDetails.MRP}</span>
                </div>
                <div>
                  Test Date :{" "}
                  <span className="text-detail">
                    {SupplierDetails.testDate}
                  </span>
                </div>
                <div>
                  Expiry Date :{" "}
                  <span className="text-detail">
                    {SupplierDetails.expiryDate}
                  </span>
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
export default SupplierScreen;
