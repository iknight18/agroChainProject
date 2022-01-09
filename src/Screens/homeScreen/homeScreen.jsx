import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./homeScreen.css";
import { useNavigate } from "react-router-dom";
import addresses from "../../addresses.json";
const HomeScreen = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      console.log(addresses);
      console.log(account);
      // const MyContract = new web3.eth.Contract(
      //   "0xb440ab1700cE5BeBDcD197c7D1799C92d0A93A7F"
      // );
    }
    load();
  }, []);
  useEffect(() => {
    if (account) {
      if (addresses.farmers.includes(account)) {
        navigate("/farmer");
      } else if (addresses.quality.includes(account)) {
        navigate("/quality");
      } else if (addresses.finance.includes(account)) {
        navigate("/finance");
      } else if (addresses.supplier.includes(account)) {
        navigate("/supplier");
      } else {
        navigate("/customer");
      }
    }
  }, [account]);
  return (
    <div className="main-container">
      <div className="title">
        <h1>
          {account
            ? "Connected With the Public Id : " + account
            : "Connecting .."}
        </h1>
        {account ? (
          <div className="buttons">
            <Button variant="outlined" onClick={() => navigate("/farmer")}>
              Farmer
            </Button>
            <Button variant="outlined" onClick={() => navigate("/quality")}>
              Quality
            </Button>
            <Button variant="outlined" onClick={() => navigate("/finance")}>
              Finance
            </Button>
            <Button variant="outlined" onClick={() => navigate("/customer")}>
              Customer
            </Button>
            <Button variant="outlined" onClick={() => navigate("/supplier")}>
              Supplier
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
