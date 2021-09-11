import React from "react";
import Artboard from "../assets/Artboard.svg";
import { Button } from "@material-ui/core";
import history from "./history";
function Success() {
  const handleClick = () => {
    localStorage.removeItem("otp");
    history.push("/");
  };
  return (
    <div className="Main">
      <div id="successLogoContainer">
        <img className="logo" src={Artboard} alt="Artboard Logo" />
      </div>
      <div id="welcomeMsgeContainer">
        <h1>Welcome to AdmitKard</h1>
        <p>
          In order to provide you with a custom experience, <br />
          <strong>we need to ask you a few questions.</strong>
        </p>
      </div>

      <div>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={(e) => handleClick()}
        >
          Get Started
        </Button>
      </div>
      <div id="sms-charge-msg">
        <p>*This will only take 5 min.</p>
      </div>
    </div>
  );
}

export default Success;
