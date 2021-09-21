import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { RouteNames } from "../config/RouteNames";
import Login from "../pages/auth/Login";


const Routes = () => {
return (
    <Router>
        <Switch>
        <Route exact path={RouteNames.login} component={Login} />
        </Switch>
    </Router>
);
};
export default Routes;