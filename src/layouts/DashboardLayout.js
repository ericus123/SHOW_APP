import { Col, Layout, Row } from "antd";
import { children, useState } from "react";
import { assets } from "../utils/assets";

const { Header, Sider, Content } = Layout;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faCog, faUser} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const DashboardLayout = () => {
  const [tab, setTab] = useState("home");

  const history = useHistory();
    return (
      <Layout>
        <Sider width="110" className="side-bar" trigger={null} collapsible collapsed={false}>
          <div className="logo">
          <img src={assets.red_logo}/>
          </div>
         <div className="dashboard-side-bar">
          <div className="side-bar-tab"  onClick={() => setTab("home")}>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={`${tab === "home" ?  "home-icon-active" : "home-icon"}`} viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
          <h3>Home</h3>
          </div>
          <br/>
            <div className="side-bar-tab"  onClick={() => setTab("profile")}>
           <FontAwesomeIcon icon={faUser} className={`${tab === "profile" ?  "home-icon-active" : "home-icon"}`} />
          <h3>Profile</h3>
          </div>
            <br/>
            <div className="side-bar-tab"  onClick={() => setTab("settings")}>
           <FontAwesomeIcon icon={faCog} className={`${tab === "settings" ?  "home-icon-active" : "home-icon"}`} />
          <h3>Settings</h3>
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
            <Col span={16}>
            </Col>
          </Row>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
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
