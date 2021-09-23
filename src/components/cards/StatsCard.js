import { Card } from "antd";
import { Content } from "antd/lib/layout/layout";
import "../../styles/scss/project_theme.scss";
import "./index.scss";
import Text from "antd/lib/typography/Text";
import ProgressBar from "@ramonak/react-progress-bar";
import "../../styles/scss/project_theme.scss";

const StatsCard = () => {

    return (
        <Content className="stats-card-wrapper">
 <Card
 className="status-card"
    hoverable
    style={{ width: 250 }}   
  >
    <Text className="stat-category-txt">Marketing</Text><Text className="txt_red stats-num"> - 140</Text> <br/>
    <br/>
    <ProgressBar height="8px" borderRadius="0px" isLabelVisible={false} bgColor="#C12B3D" baseBgColor="#F5F8FA" completed={40} />
<br/>
<Text className="stat-category-txt" >Marketing</Text><Text className="txt_red stats-num" > - 140</Text> <br/>
    <br/>
    <ProgressBar height="8px" borderRadius="0px" isLabelVisible={false} bgColor="#C12B3D" baseBgColor="#F5F8FA" completed={20} />
<br/>
<Text className="stat-category-txt">Marketing</Text><Text className="txt_red stats-num"> - 140</Text> <br/>
    <br/>
    <ProgressBar height="8px" borderRadius="0px" isLabelVisible={false} bgColor="#C12B3D" baseBgColor="#F5F8FA" completed={90} />
    <br/>
<Text className="stat-category-txt">Marketing</Text><Text className="txt_red stats-num"> - 140</Text> <br/>
    <br/>
    <ProgressBar height="8px" borderRadius="0px" isLabelVisible={false} bgColor="#C12B3D" baseBgColor="#F5F8FA" completed={20} />
    <br/>
<Text className="stat-category-txt">Marketing</Text><Text className="txt_red stats-num"> - 140</Text> <br/>
    <br/>
    <ProgressBar height="8px" borderRadius="0px" isLabelVisible={false} bgColor="#C12B3D" baseBgColor="#F5F8FA" completed={10} />
</Card>
<Card
 className="premeum-card"
    style={{ width: 250,height: 100 }}   
  >
   <h4 className=" premium-txt txt_center  cursor_pointer txt_color_red">UPDATE TO PREMIUM</h4>
</Card>
  </Content>
);
};

export default StatsCard;
