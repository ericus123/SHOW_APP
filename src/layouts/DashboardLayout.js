import { Col, Layout, Row } from "antd";
import {useState } from "react";
import { assets } from "../utils/assets";
import "../styles/scss/project_theme.scss";
const { Header, Sider, Content } = Layout;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faCog, faUser, faQuestionCircle, faUserCircle, faBell} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import NotificationDrawer from "../components/drawers/NotificationDrawer";

const DashboardLayout = ({children}) => {
  const [tab, setTab] = useState("home");
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  const history = useHistory();
    return (
      <Layout>
        <NotificationDrawer visible={visible} handleClose={handleClose}/>
        <Sider width="110" className="side-bar" trigger={null} collapsible collapsed={false}>
          <div className="logo">
          <img src={assets.red_logo}/>
          </div>
         <div className="dashboard-side-bar">
          <div className="side-bar-tab"  onClick={() => setTab("home")}>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={`${tab === "home" ?  "home-icon-active" : "home-icon"}`} viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
          <h3 className={`${tab === "home" ?  "txt_red" : ""}`}>Home</h3>
          </div>
          <br/>
            <div className="side-bar-tab"  onClick={() => setTab("profile")}>
           <FontAwesomeIcon icon={faUser} className={`${tab === "profile" ?  "home-icon-active" : "home-icon"}`} />
          <h3 className={`${tab === "profile" ?  "txt_red" : ""}`} >Profile</h3>
          </div>
            <br/>
            <div className="side-bar-tab"  onClick={() => setTab("settings")}>
           <FontAwesomeIcon icon={faCog} className={`${tab === "settings" ?  "home-icon-active" : "home-icon"}`} />
          <h3 className={`${tab === "settings" ?  "txt_red" : ""}`} >Settings</h3>
          </div>
          <br/>
          <br/>
          <br/>
           <div className="sidebar-logout-tab" onClick={() => history.push("/")}>
                    <div className="side-bar-tab"  onClick={() => setTab("home")}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="logout-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z"/></svg>
                      <h3>Logout</h3>
          </div>
          </div>
         </div> 
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background top-nav" style={{ padding: 0 }}>
          <Row>
            <Col span={8}>
            <p className="dashboard-home-title txt_bold txt_subtitle">Organizer Portal</p>
            </Col>
            <Col span={4} className="menu-data-wrapper">
              <Row gutter={[]}>
                <Col span={3} className="menu-help-col"><FontAwesomeIcon className="menu-help-icon smooth_transform cursor_pointer hover_color_red " icon={faQuestionCircle}/></Col>
                <Col span={18} className="menu-user-col"><Row className="menu-user-row"><Col><FontAwesomeIcon className="menu-user-icon" icon={faUserCircle}/> </Col> <Col><p className="profile-menu-name">Yves Honore</p></Col></Row></Col>
                <Col span={3} className="menu-notification-col"> <FontAwesomeIcon onClick={handleShow} className="menu-notification-icon smooth_transform cursor_pointer  hover_color_red" icon={faBell} /></Col>
              </Row>
            </Col>
          </Row>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
};

export default DashboardLayout;
