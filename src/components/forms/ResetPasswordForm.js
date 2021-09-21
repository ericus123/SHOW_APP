import { Formik } from "formik";
import "./index.scss";

const ResetPasswordForm = () => {
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
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder="Enter password"
             disabled={isSubmitting}
           />
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