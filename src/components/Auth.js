import { Redirect, Route } from "react-router";
import Otp from "./Otp";
import Success from "./Success";
const AuthRoute = () => {
  if (localStorage.getItem("otp")) {
    return <Route path="/otp" exact component={Otp} />;
  } else return <Redirect to="/" />;
};
const SuccessRoute = () => {
  if (localStorage.getItem("otp") && localStorage.getItem("otp") === "1234") {
    return <Route path="/success" exact component={Success} />;
  } else return <Redirect to="/" />;
};

export { AuthRoute, SuccessRoute };
