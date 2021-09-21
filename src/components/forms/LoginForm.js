import { Formik } from "formik";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;

  const tooglePasswordVisibilty = () => {
    setPasswordVisible(!passwordVisible);
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
           />
            <i onClick={tooglePasswordVisibilty} className="eye-icon">{passwordVisible ? eye_slash : eye }</i>
 <br/>
           <span className="txt_color_red">{errors.password && touched.password && errors.password}</span>

           <button className="form-btn" type="submit" disabled={isSubmitting}>
             Login
           </button>
         </form>
       )}
     </Formik>
    );
};

export default LoginForm;