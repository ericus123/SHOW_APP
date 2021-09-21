import {Row } from "antd";
// import { Content } from "antd/lib/layout/layout";
import LoginForm from "../../components/forms/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";
import { assets } from "../../utils/assets";
import "./index.scss";

const Login = () => {
    return (
        <AuthLayout>
     <div className="login-comp">
         <Row className="logo-wrapper">
             <img className="login-logo" src={assets.red_logo} />
         </Row>
         <Row className="login-texts-row">
             <h1 className="login-title">Organizer Login</h1>
             <p className="login-text">User your company email to login</p>
         </Row>
         <Row className="form-row">
         <LoginForm/>
         </Row>
             <p className="login_text_bottom">Frgot password?<span className="txt_color_red">reset</span></p>
     </div>
        </AuthLayout>
    );
};


export default Login;