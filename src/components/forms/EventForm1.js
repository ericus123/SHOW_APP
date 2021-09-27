import { Formik } from "formik";
import "./index.scss";



const EventForm1 = () => {

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
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
       }) => (
         <form onSubmit={handleSubmit}>
           <span className="input-label">Event name</span>
           <input
        className="form-input"
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="Name"
           />
           <br/>
          <span className="txt_color_red"> {errors.email && touched.email && errors.email}</span>
            <br/>
            <span className="input-label">Event category</span><br/>
      <select className="form-input form-input-select">
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
      </select>
      <br/>
            <span className="txt_color_red"> {errors.email && touched.email && errors.email}</span>
            <br/>
            <span className="input-label">Event category</span><br/>
      <select className="form-input form-input-select">
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
      </select>

        
 <br/>
           <span className="txt_color_red">{errors.password && touched.password && errors.password}</span>
         </form>
       )}
     </Formik>
    );
};

export default EventForm1;