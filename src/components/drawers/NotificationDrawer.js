import { Col, Drawer, Row } from "antd";
import { Typography } from "antd";
const { Paragraph } = Typography;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faUserCircle, faCaretRight, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import "../../styles/scss/project_theme.scss";

import "./index.scss";

const NotificationDrawer = ({visible, handleClose}) => {
 return (
 <Drawer
          title={<>
              <div className="notification-panel-header">
                  <br/>
                 <h1 className="notifications-title">My activities</h1>
              </div>
               <div className="notification-panel-lower-header">
                 <h1 className="notifications-filter-txt">Filter activities by 
                 <span className="filter-drop-down">Today <FontAwesomeIcon icon={faCaretDown}/></span>
</h1>
              </div></>
          }
          placement="right"
          closable={true}
          onClose={handleClose}
          visible={visible}
          width="500px"
          className="notification-drawer"
        >{
           [1,2,3,4,5].map((key) =>
         <Row key={key} className="notification-row">
                 <Col span={4}><FontAwesomeIcon className="notification-user-avatar" icon={faUserCircle}/> </Col>
                 <Col span={18}><Paragraph className="notification-desc">
                     Yves Honore <span className="txt_color_gray"> and</span> 245 <span className="txt_color_gray">others registered on your event</span> Africa Young Techies Summit 2020.
                 </Paragraph>
                 <Paragraph className="notification-date">
                     14 Feb 2020
                 </Paragraph>
                 </Col>
                <Col className="notification-caret-right-col" span={2}><FontAwesomeIcon className="notification-caret-right" icon={faCaretRight}/> </Col>
             </Row>
           )
        }
        </Drawer>
 
 );
};

export default NotificationDrawer;
