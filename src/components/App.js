import { Router, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import history from "./history";
import Success from "./Success";
import Otp from "./Otp";
import { AuthRoute, SuccessRoute } from "./Auth";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <AuthRoute path="/otp" exact component={Otp} />
        <SuccessRoute path="/success" exact component={Success} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
