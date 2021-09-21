import { Formik } from "formik";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";



const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading,setLoading] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;
  
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const history = useHistory();

  const tooglePasswordVisibilty = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/dashboard");
    }, 3000);
    
  };
    return (
         <Formik
       initialValues={{ email: "", password: "" }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = "Required";
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = "Invalid email address";
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <span className="input-label">Email</span>
           <input
        className="form-input"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder="Email"
             disabled={loading}
           />
           <br/>
          <span className="txt_color_red"> {errors.email && touched.email && errors.email}</span>
            <br/>
            <span className="input-label">Password</span>
           <input
         className="form-input"
             type={passwordVisible ? "text" : "password"}
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder="Enter password"
             disabled={loading}
           />
            <i onClick={tooglePasswordVisibilty} className="eye-icon">{passwordVisible ? eye_slash : eye }</i>
 <br/>
           <span className="txt_color_red">{errors.password && touched.password && errors.password}</span>

           <button className="form-btn" type="submit" disabled={isSubmitting} onClick={() => {
             handleLogin();
           }}>
            {loading ? <> <Spin style={{color:"white"}} indicator={antIcon} /> Loading </>: "Login"}
           </button>
         </form>
       )}
     </Formik>
    );
};

export default LoginForm;