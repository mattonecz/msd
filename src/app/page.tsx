import { Button, Card, Col, ConfigProvider, Layout, Row } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ChartComp } from "./chart";
import Title from "antd/es/typography/Title";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1DA57A",
          colorLink: "#1DA57A",
          colorSuccess: "#52c41a",
        },
      }}
    >
      <Layout>
        <Header
          style={{
            background: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <Title level={2} style={{ marginTop: 15, color: "#1DA57A" }}>
            MSD Covid Charts
          </Title>
        </Header>

        <Content
          style={{
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <Row
            gutter={[20, 20]}
            justify="center"
            style={{
              marginBottom: "20px",
              alignItems: "middle",
            }}
          >
            <Col xs={24} lg={13}>
              <h3 style={{ margin: 0 }}>Your Text Here</h3>
            </Col>
            <Col>
              <Button type="primary">Button 1</Button>
              <Button type="default" style={{ marginLeft: "10px" }}>
                Button 2
              </Button>
              <Button type="dashed" style={{ marginLeft: "10px" }}>
                Button 3
              </Button>
            </Col>
          </Row>
          <Row gutter={[20, 20]} justify="center">
            <Col xs={24} lg={8}>
              <Card title="Card 1" bordered={true}>
                <ChartComp />
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card title="Card 2" bordered={true}>
                This is the content of Card 2.
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
