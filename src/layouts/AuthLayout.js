// import { Content } from "antd/lib/layout/layout";
import "./index.scss";

const AuthLayout = ({children}) => {

   return (

<div className="auth-layout">

    <div className="auth-layout-content">
     {children}
    </div>
</div>

   );
};
export default AuthLayout;