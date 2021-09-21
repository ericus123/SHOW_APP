import { Row } from "antd";
import { useHistory } from "react-router";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import AuthLayout from "../../layouts/AuthLayout";
import { assets } from "../../utils/assets";

const ResetPassword = () => {

    const history = useHistory();

    return ( 
        <AuthLayout>
               <div className="login-comp">
         <Row className="logo-wrapper">
             <img className="login-logo" src={assets.red_logo} />
         </Row>
         <Row className="login-texts-row">
             <h1 className="login-title">Set new password</h1>
             <p className="login-text">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p>
         </Row>
         <Row className="form-row">
         <ResetPasswordForm/>
         </Row>
             <p className="login_text_bottom">Recall password?<span onClick={() => history.push("/")} className="txt_color_red cursor_pointer">&nbsp;Login</span></p>
     </div>
        </AuthLayout>
    );
};

export default ResetPassword;