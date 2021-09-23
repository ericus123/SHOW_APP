import { Col, Row } from "antd";
import { Content} from "antd/lib/layout/layout";
import DashboardLayout from "../../layouts/DashboardLayout";
import { assets } from "../../utils/assets";
import { Typography } from "antd";
const { Title } = Typography;
import "./index.scss";
import "../../styles/scss/project_theme.scss";
import EventCard from "../../components/cards/EventCard";
import { SquareCard } from "../../components/cards";
import StatsCard from "../../components/cards/StatsCard";
import "../../styles/scss/project_theme.scss";



const DashboardHome = () => {

return (
    <DashboardLayout>
            <Row className="dash-home-row">
<Col span={18} className="dash-homepage-left">
  <Content className="homepage-content">
    <img className="new-event-img" src={assets.homepage_img}/>
    <Content className="homepage-content-right">
      <h1 className="homepage-content-right-txt">
        Have an event in mind?
      </h1>
      <br/>
      <br/>
      <button className="event-btn bg_red border_none outline_none color_white text_color_white cursor_pointer button_hover_shadow">Create event</button>
    </Content>
  
  </Content>
    <Content className="recent-events">
     <Title className="events-title">
       My recent events
     </Title>
     <Row gutter={[20,20]}>
      { [1,2,3,4].map((key) =>    <Col key={key}><EventCard/></Col>)}

     </Row>
    </Content>
</Col>
<Col span={6} className="dash-homepage-right">
  <h1 className="txt_subtitle stat-title">Stats</h1>
  <Row className="stats-data-cards" justify="start">  <Col span={12}><SquareCard num="4400" text="New users"/></Col>
      <Col span={12}><SquareCard num="2100" text="New users"/></Col>
    </Row>
    <br/>
    <Row className="stats-data-cards" justify="start">  <Col span={12}><SquareCard num="4500" text="New users"/></Col>
      <Col span={12}><SquareCard num="2400" text="New users"/></Col>
    </Row>
    <h2 className="txt_subtitle pad32">Followers<br/>interests</h2>
    <StatsCard/>
    </Col>
    </Row> 
    </DashboardLayout>
);
};
export default DashboardHome;