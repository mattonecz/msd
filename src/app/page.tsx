import { Card, ConfigProvider, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

export default function Home() {
  return (
    <ConfigProvider theme={{}}>
      <Layout>
        <Header>App title</Header>
        <Content></Content>
      </Layout>
    </ConfigProvider>
  );
}
