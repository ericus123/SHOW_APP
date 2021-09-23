import { CloseOutlined, PauseOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { assets } from "../../utils/assets";
const {Paragraph, Text} = Typography;
import "../../styles/scss/project_theme.scss";
import "./index.scss";
const EventCard = () => {

    return (
        <Content className="event-card-wrapper">
 <Card
 className="event-card"
    hoverable
    style={{ width: 180 }}
    cover={<img alt="event image" className="event-image" src={assets.event_image} />}
  >
<Paragraph className="txt_bold">
East frica young techies 2020
</Paragraph>
  </Card>
  <Card className="event-card-bottom">
  <Row gutter={[20,20]}>
      <Col><Text className="event-status-text">ONGOING</Text></Col>
      <Col><PauseOutlined className="pause_icon cursor_pointer" />&nbsp;&nbsp;<CloseOutlined  className="cursor_pointer"/>&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-arrow-right arrow-right-icon cursor_pointer" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></Col>
  </Row>
  </Card>
  </Content>
);
};

export default EventCard;
