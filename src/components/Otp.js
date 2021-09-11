import React, { useState } from "react";
import Confirm from "../assets/undraw_confirmed.svg";
import { Button } from "@material-ui/core";
import history from "./history";
function Otp() {
  let loginMsge = "";
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (item, position) => {
    if (isNaN(item.value)) return false;
    setOtp([...otp.map((val, pos) => (pos === position ? item.value : val))]);
    if (item.nextSibling) {
      item.nextSibling.focus();
    }
  };
  const handleVarify = (otp) => {
    const msge = document.getElementById("success-failure-msge");
    if (otp === localStorage.getItem("otp")) {
      msge.innerHTML = "Sign In Sucessfull";
      msge.style.color = "green";
      setTimeout(() => history.push("/success"), 500);
    } else {
      msge.innerHTML = "Invalid OTP";
      msge.style.color = "red";
      setTimeout(() => (msge.innerHTML = ""), 3000);
    }
  };
  const handleResend = () => {
    localStorage.setItem("otp", "1234");
    const msge = document.getElementById("success-failure-msge");
    msge.innerHTML = "Message sent Sucessfully";
    msge.style.color = "green";
    setTimeout(() => (msge.innerHTML = ""), 3000);
  };
  return (
    <div className="Main">
      <div className="logoContainer">
        <img className="logo" src={Confirm} alt="Confirm Logo" />
      </div>
      <div id="mobile-number-details">
        <h3>Please verify Mobile number</h3>
        <p>An OTP is sent to you</p>
      </div>
      <div id="change-phone-number">
        <p>Change Phone Number</p>
      </div>
      <div id="otp-input-box-container">
        {otp.map((num, position) => {
          return (
            <input
              className="otp-input-box"
              type="text"
              name="otp"
              maxLength="1"
              value={num}
              key={position}
              onChange={(e) => handleChange(e.target, position)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <div id="otp-resend">
        <p>Didn’t receive the code?</p>
        <p onClick={(e) => handleResend()}>Resend</p>
      </div>
      <div>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={(e) => handleVarify(otp.join(""))}
        >
          Verify
        </Button>
      </div>
      <div id="success-failure-msge-container">
        <p id="success-failure-msge">{loginMsge}</p>
      </div>
    </div>
  );
}

export default Otp;
