import "./App.css";
import Inicio from "./pages/inicio/Inicio";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import { useState } from "react";
import { Row, Col, ConfigProvider } from "antd";

function App() {
  const [currentPage, setCurrentPage] = useState("Inicio");

  const renderContent = () => {
    switch (currentPage) {
      case "inicio":
        return <Inicio />;

      case "servidores":
        return <Inicio />;

      case "missoes":
        return <Inicio />;

      case "contactos":
        return <Inicio />;

      case "skinChanger":
        return <Inicio />;

      case "vip":
        return <Inicio />;

      case "loja":
        return <Inicio />;

      default:
        return <Inicio />;
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: { fontFamily: "'Fredoka One', cursive" },
        components: {
          Menu: {
            horizontalItemColor: "transparent",
            horizontalItemHoverColor: "transparent",
            horizontalItemSelectedColor: "transparent",
            itemColor: "#ffffff",
            itemHoverColor: "#ffff",
            itemSelectedColor: "transparent",
          },
        },
      }}
    >
      <Row
        gutter={{ xs: 10, sm: 18, md: 26, lg: 34 }}
        style={{
          borderBottom: "1px solid #34317D",
          paddingBottom: "10px",
          background: "linear-gradient(to right, #22213F, #1C1B2B, #171718)",
        }}
      >
        <Col className="gutter-row" span={2} />

        <Col className="gutter-row" span={20}>
          <Header setCurrentPage={setCurrentPage} />
        </Col>

        <Col className="gutter-row" span={2} />
      </Row>

      <Row
        gutter={{ xs: 10, sm: 18, md: 26, lg: 34 }}
        style={{
          borderBottom: "1px solid #34317D",
          paddingBottom: "10px",
          background: "linear-gradient(to right, #161C18, #161D19, #161617)",
        }}
      >
        <Col className="gutter-row" span={2} />

        <Col className="gutter-row" span={20}>
          {renderContent()}
        </Col>

        <Col className="gutter-row" span={2} />
      </Row>

      <Row
        gutter={{ xs: 10, sm: 18, md: 26, lg: 34 }}
        style={{
          background: "linear-gradient(to right, #22213F, #1C1B2B, #171718)",
        }}
      >
        <Col className="gutter-row" span={2} />

        <Col className="gutter-row" span={20}>
          <Footer />
        </Col>

        <Col className="gutter-row" span={2} />
      </Row>
    </ConfigProvider>
  );
}

export default App;
