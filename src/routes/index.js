import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { RouteNames } from "../config/RouteNames";
import NotFound from "../pages/404";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import DashboardHome from "../pages/dashboard";


const Routes = () => {
return (
    <Router>
        <Switch>
        <Route exact path={RouteNames.login} component={Login} />
        <Route  exact path={RouteNames.forgot_password} component={ForgotPassword}/>
        <Route  exact path={RouteNames.reset_password} component={ResetPassword}/>
        <Route exact path={RouteNames.dashboard.home} component={DashboardHome} />
        <Route  exact component={NotFound} />
        </Switch>
    </Router>
);
};
export default Routes;