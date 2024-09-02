import React from "react";
import { Row, Col } from "antd";
import { TwitterOutlined } from "@ant-design/icons";


function Footer() {
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col xs={8} sm={8} md={8} lg={8} style={{ border: "2px solid #ffff" }}>
      <TwitterOutlined />
      </Col>

      <Col xs={8} sm={8} md={8} lg={8} style={{ border: "2px solid #ffff" }}>
        jogadores online
      </Col>

      <Col xs={8} sm={8} md={8} lg={8} style={{ border: "2px solid #ffff" }}>
        parterns
      </Col>
    </Row>
  );
}

export default Footer;
