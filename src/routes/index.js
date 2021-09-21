import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { RouteNames } from "../config/RouteNames";
import AuthLayout from "../layouts/AuthLayout";


const Routes = () => {
return (
    <Router>
        <Switch>
        <Route exact path={RouteNames.auth} component={AuthLayout} />
        </Switch>
    </Router>
);
};
export default Routes;