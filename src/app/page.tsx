import {
  Badge,
  Button,
  Col,
  ConfigProvider,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Charts } from "./components/charts";
import { AlignCenterOutlined, DownloadOutlined } from "@ant-design/icons";
import "./styles.css";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "black",
        },
      }}
    >
      <Layout>
        <Header
          style={{
            background: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            justifyContent: "center",
            padding: "0 10vw",
          }}
        >
          <Title level={2} style={{ marginTop: 15, color: "#1DA57A" }}>
            MSD Covid Charts
          </Title>
        </Header>

        <Content
          style={{
            marginTop: "20px",
          }}
        >
          <Row
            justify="center"
            style={{
              marginBottom: "20px",
            }}
          >
            <Col
              className="titleCol"
              xs={24}
              lg={16}
              style={{
                alignItems: "center",
              }}
            >
              <Title
                className="titleCharts"
                level={3}
                style={{ margin: 0, padding: 8 }}
              >
                Example charts
              </Title>
              <Space style={{ gap: "1vw" }}>
                <Button
                  icon={<DownloadOutlined style={{ color: "#1DA57A" }} />}
                  iconPosition="end"
                  variant="filled"
                  color="default"
                  style={{ background: "white" }}
                >
                  Export to PDF
                </Button>
                <Button
                  variant="filled"
                  color="default"
                  style={{ background: "white" }}
                  icon={<AlignCenterOutlined style={{ color: "#1DA57A" }} />}
                  iconPosition="end"
                >
                  <Typography style={{ color: "grey" }}>(3)</Typography> Notes
                </Button>
                <Button
                  variant="filled"
                  color="default"
                  style={{ background: "white" }}
                  icon={<AlignCenterOutlined style={{ color: "#1DA57A" }} />}
                  iconPosition="end"
                >
                  <Badge
                    count={10}
                    overflowCount={9}
                    style={{
                      background: "#1DA57A",
                      maxWidth: 20,
                      fontSize: 11,
                      padding: 0,
                    }}
                  />
                  Filter
                </Button>
              </Space>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={24} lg={16}>
              <Charts />
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
