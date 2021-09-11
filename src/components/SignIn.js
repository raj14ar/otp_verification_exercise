import React, { useState } from "react";
import AdmitKardLogo from "../assets/admitkard_logo.svg";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "react-phone-input-2/lib/style.css";
import history from "./history";
import "../index.css";

function SignIn() {
  let loginMsge = "";
  const [mobNumber, setMobNumber] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    const msge = document.getElementById("success-failure-msge");
    if (value.length < 10 || value.length > 10 || isNaN(value)) {
      msge.innerHTML = "Invalid Phone Number";
      msge.style.color = "Red";
    } else if (value.length === 10 && !isNaN(value)) {
      msge.innerHTML = "";
      setMobNumber(value);
    }
  };
  const generateOtp = () => {
    if (mobNumber.length && !isNaN(mobNumber)) {
      localStorage.setItem("otp", "1234");
      history.push("/otp");
    }
  };
  return (
    <div className="Main">
      <div className="logoContainer">
        <img className="logo" src={AdmitKardLogo} alt="AdmitKard Logo" />
      </div>
      <div id="welcomeMsgeContainer">
        <h1>Welcome Back</h1>
        <p>Please sign in to your account</p>
      </div>
      <div id="phone-input-box">
        <TextField
          id="phone-input"
          label="Enter Contact Number"
          variant="outlined"
          maxLength="10"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div id="sms-charge-msg">
        <p>
          We will send you a one time SMS message.
          <br /> Charges may apply.
        </p>
      </div>
      <div>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className="button"
          onClick={(e) => generateOtp(e)}
        >
          Sign In with OTP
        </Button>

        <div id="success-failure-msge-container">
          <p id="success-failure-msge">{loginMsge}</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
