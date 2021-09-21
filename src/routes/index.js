import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { RouteNames } from "../config/RouteNames";
import NotFound from "../pages/404";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";


const Routes = () => {
return (
    <Router>
        <Switch>
        <Route exact path={RouteNames.login} component={Login} />
        <Route  exact path={RouteNames.forgot_password} component={ForgotPassword}/>
        <Route  exact component={NotFound} />
        </Switch>
    </Router>
);
};
export default Routes;