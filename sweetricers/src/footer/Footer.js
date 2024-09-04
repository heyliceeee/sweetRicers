import React from "react";
import { Row, Col, Image } from "antd";
import {
  XOutlined,
  LinkedinFilled,
  FacebookFilled,
  GithubFilled,
  BehanceOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";

import pewpew from "../images/pewpewlogo.png";
import waac from "../images/waacLogo.png";

function Footer() {
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col xs={2} sm={2} md={4} lg={4} style={{ border: "2px solid #ffff" }}>
        <XOutlined
          style={{ color: "#ffff", fontSize: "25px", marginRight: "15px" }}
        />
        <LinkedinFilled
          style={{ color: "#ffff", fontSize: "25px", marginRight: "15px" }}
        />
        <FacebookFilled
          style={{ color: "#ffff", fontSize: "25px", marginRight: "15px" }}
        />
        <GithubFilled
          style={{ color: "#ffff", fontSize: "25px", marginRight: "15px" }}
        />
        <BehanceOutlined
          style={{ color: "#ffff", fontSize: "25px", marginRight: "15px" }}
        />
        <DribbbleOutlined style={{ color: "#ffff", fontSize: "25px" }} />
      </Col>

      <Col xs={14} sm={11} md={8} lg={6} style={{ border: "2px solid #ffff" }}>
        <div
          style={{
            border: "2px solid #1D4C3B",
            borderRadius: "10px",
            backgroundColor: "#1D3E34",
            height: "25px",
            width: "185px",
            alignItems: "center",
            alignContent: "center",
            display: "flex",
            padding: "0 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "15px",
              height: "15px",
              backgroundColor: "#22D66B",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          />
          <div style={{ color: "#ffff" }}>20 JOGADORES ONLINE</div>
        </div>
      </Col>

      <Col
        xs={8}
        sm={11}
        md={12}
        lg={14}
        style={{
          border: "2px solid #ffff",
          justifyContent: "flex-end",
          display: "flex",
          gap: "40px",
        }}
      >
        <Image
          src={pewpew}
          height="60%"
          preview={false}
        />
        <Image
          src={waac}
          height="60%"
          preview={false}
        />

        <div
          style={{
            color: "#ffff",
            textAlign: "flex-end",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            height: "29px",
          }}
        >
          © 2024 Alice Dias. Todos os direitos reservados
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
