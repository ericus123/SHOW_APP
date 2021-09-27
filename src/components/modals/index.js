import { Modal, Button, Row, Col} from "antd";
import Text from "antd/lib/typography/Text";
import "./index.scss";
import "../../styles/scss/project_theme.scss";
import EventForm1 from "../forms/EventForm1";
import {BiImageAdd} from "react-icons/bi";
import { Content } from "antd/lib/layout/layout";
import EventForm2 from "../forms/EventForm2";

const AddEventModal = ({visible,handleClose, handleOpen, loading}) => {


    return (
      <>
        <Modal
          visible={visible}
          width="800px"
          heigh="1200px"
          title={<Text className="create-event-title">Create new event</Text>}
          onCancel={handleClose}
          onOk={handleOpen}
          footer={[
            <Button key="back" className="save-event-btn button_hover_shadow hover_color_white">
             SAVE EVENT
            </Button>,
            <Button key="submit" type="primary" loading={loading } className="publish-event-btn button_hover_shadow">
             SAVE AND PUBLISH
            </Button>
          ]}
        >
        <Row gutter={[]}>
         <Col span={12} className="event-image-col">
           <Content className="upload-image-center-content">
             <Row className="content-row"><Col><BiImageAdd size={25} /></Col><Col> Upload image</Col></Row>
</Content>
         </Col>
         <Col span={10} className="event-form-col">
        <EventForm1/>
         </Col>
        </Row>
        <Row>
          <Col className="event-form-col2">
          <EventForm2/>
          </Col>
        </Row>
        </Modal>
      </>
    );
  };

  export default AddEventModal;
