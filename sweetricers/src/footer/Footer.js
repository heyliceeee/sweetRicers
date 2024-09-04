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
    <Row
      style={{ marginTop: "20px", padding: "10px" }}
      justify="space-between"
      align="middle"
    >
      <Col
        xs={24}
        sm={13}
        md={5}
        lg={5}
        style={{
          padding: "10px",
          textAlign: "center",
        }}
      >
        <XOutlined
          style={{ color: "#ffff", fontSize: "20px", margin: "0 10px" }}
        />
        <LinkedinFilled
          style={{ color: "#ffff", fontSize: "20px", margin: "0 10px" }}
        />
        <FacebookFilled
          style={{ color: "#ffff", fontSize: "20px", margin: "0 10px" }}
        />
        <GithubFilled
          style={{ color: "#ffff", fontSize: "20px", margin: "0 10px" }}
        />
        <BehanceOutlined
          style={{ color: "#ffff", fontSize: "20px", margin: "0 10px" }}
        />
        <DribbbleOutlined
          style={{ color: "#ffff", fontSize: "20px", margin: "0 10px" }}
        />
      </Col>

      <Col
        xs={24}
        sm={11}
        md={8}
        lg={7}
        style={{
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            border: "2px solid #1D4C3B",
            borderRadius: "10px",
            backgroundColor: "#1D3E34",
            height: "35px",
            width: "100%",
            maxWidth: "180px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            justifyContent: "center",
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
          <div style={{ color: "#ffff", fontSize: "13px" }}>
            20 JOGADORES ONLINE
          </div>
        </div>
      </Col>

      <Col
        xs={24}
        sm={24}
        md={11}
        lg={12}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "10px",
          flexDirection: "row",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            width: "200px",
          }}
        >
          <Image src={pewpew} preview={false} style={{ marginTop: "5px" }} />
          <Image src={waac} preview={false} />
        </div>
        <div
          style={{
            color: "#ffff",
            fontSize: "14px",
            marginLeft: "20px",
          }}
        >
          © 2024 Alice Dias. Todos os direitos reservados
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
