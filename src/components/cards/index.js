import { Content } from "antd/lib/layout/layout";
import "./index.scss";

export const SquareCard = ({num,text}) => {
  return (
      <Content className="home-stats-card">
       <h4 className="home-stats-card-num">{num}</h4>
       <h4 className="home-stats-card-txt">{text}</h4>
      </Content>
  );
};
