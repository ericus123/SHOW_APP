import {  Col, Row, TimePicker } from "antd";
import { Formik } from "formik";
import moment from "moment";
import "./index.scss";



const EventForm2 = () => {



    return (
         <Formik
      
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setSubmitting(false);
         }, 400);
       }}
     >
       {({

         handleChange,
         handleBlur,
         handleSubmit,
       }) => (
         <form onSubmit={handleSubmit}>
           <span className="input-label">Description</span>
           <input
        className="form-input-description"
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="Description"
           />
           <br/>
           <Row span={[50,50]}>
               <Col span={7}>
         <span className="input-label">Date</span>
           <input
        className="form-input"
             type="text"
             name="venue"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder=" Enter the event venue or pick from the map"
           />
               </Col>&nbsp;&nbsp;&nbsp;
                        <Col span={7}>
         <span className="input-label">Date</span>
       <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} size="large" className="date-input" />
               </Col>&nbsp;&nbsp;&nbsp;
                         <Col span={7}>
         <span className="input-label">Start time</span>
          <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} size="large" className="date-input" />
               </Col>
           </Row>
           <br/>
           <span className="input-label">Venue</span>
         <input
        className="form-input-description"
             type="text"
             name="venue"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder=" Enter the event venue or pick from the map"
           />
           {/* <AutoComplete
  apiKey={process.env.GOOGLE_MAPS_API_KEY}
  onPlaceSelected={(place) => console.log(place)}
           />*/}
           <br/>
         </form>
       )}
     </Formik>
    );
};

export default EventForm2;