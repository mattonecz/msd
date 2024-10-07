"use client";

import { Avatar, Card, Col, Row, Space } from "antd";
import { ChartComp } from "../chart";
import { MessageOutlined, UserOutlined } from "@ant-design/icons";

export const Charts = () => {
  return (
    <Row gutter={[20, 20]} justify="center">
      <Col xs={24} lg={12}>
        <Card
          title="PCR Tests per day"
          bordered={true}
          actions={getCardActions()}
        >
          <ChartComp
            containerName="chart1"
            type="pie"
            url="https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay"
          />
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card
          title="Covid cases per day"
          bordered={true}
          actions={getCardActions()}
        >
          <ChartComp
            containerName="chart2"
            type="graph"
            url="https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay"
          />
        </Card>
      </Col>
    </Row>
  );
};

const getCardActions = () => {
  return [
    <Space
      key={0}
      style={{
        width: "100%",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <Avatar icon={<UserOutlined />} />
      <div style={{ fontSize: 20 }}>
        3 <MessageOutlined />
      </div>
    </Space>,
  ];
};
