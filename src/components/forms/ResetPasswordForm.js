import { Formik } from "formik";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ResetPasswordForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;
  const tooglePasswordVisibilty = () => {
    setPasswordVisible(!passwordVisible);
  };
    return (
         <Formik
       initialValues={{  password: "" }}
      
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <span className="input-label">Password</span>
           <input
        className="form-input"
            type={passwordVisible ? "text" : "password"}
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder="Enter password"
             disabled={isSubmitting}
           />
            <i onClick={tooglePasswordVisibilty} className="eye-icon-reset-pass">{passwordVisible ? eye_slash : eye }</i>
            <br/>
           <button className="form-btn" type="submit" disabled={isSubmitting}>
             Change password
           </button>
         </form>
       )}
     </Formik>
    );
};

export default ResetPasswordForm;