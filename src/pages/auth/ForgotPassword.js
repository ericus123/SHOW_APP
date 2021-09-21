import { Row } from "antd";
import { useHistory } from "react-router";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import AuthLayout from "../../layouts/AuthLayout";
import { assets } from "../../utils/assets";

const ForgotPassword = () => {

    const history = useHistory();

    return ( 
        <AuthLayout>
               <div className="login-comp">
         <Row className="logo-wrapper">
             <img className="login-logo" src={assets.red_logo} />
         </Row>
         <Row className="login-texts-row">
             <h1 className="login-title">Forgot Password</h1>
             <p className="login-text">User your ShowApp email to login to reset your<br/>password.</p>
         </Row>
         <Row className="form-row">
         <ResetPasswordForm/>
         </Row>
             <p className="login_text_bottom">Back to?<span onClick={() => history.push("/")} className="txt_color_red cursor_pointer">&nbsp;Login</span></p>
     </div>
        </AuthLayout>
    );
};

export default ForgotPassword;