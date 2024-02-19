import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2563eb",
            colorText: "var(--gray-700)",
            borderRadius: 6,
            fontFamily: "'Inter', sans-serif",
          },
          components: {
            Layout: {
              bodyBg: "url('/without-icon-bg.png')",
              headerBg: "white",
            },
          },
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <Layout.Header>Apex Beat</Layout.Header>
            <Layout.Content>
              <Outlet />
            </Layout.Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default App;
