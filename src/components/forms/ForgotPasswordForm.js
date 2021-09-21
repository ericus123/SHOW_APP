import { Formik } from "formik";
import { useHistory } from "react-router";
import "./index.scss";

const ForgortPasswordForm = () => {

  const history = useHistory();
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
           history.push("reset-password");
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
             disabled={isSubmitting}
             placeholder="Email"
           />
           <br/>
           <span className="txt_color_red"> {errors.email && touched.email && errors.email}</span>
            <br/>
           <button className="form-btn" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    );
};

export default ForgortPasswordForm;