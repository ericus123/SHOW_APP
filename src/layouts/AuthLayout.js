// import { Content } from "antd/lib/layout/layout";
import "./index.scss";

const AuthLayout = ({children}) => {

   return (
<>
<div className="auth-layout">

</div>

    <div className="auth-layout-content">
       <div className="auth-layout-div"></div>
     {children}
    </div>
</>
   );
};
export default AuthLayout;