import { Content } from "antd/lib/layout/layout";
import DashboardLayout from "../../layouts/DashboardLayout";

const DashboardHome = () => {
return (
    <DashboardLayout>
        <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
         Home
          </Content> 
    </DashboardLayout>
);
};
export default DashboardHome;