import React, { useState } from "react";
import { Menu, Input, Row, Col, Image, Divider, Button, Dropdown } from "antd";
import { TagOutlined, LoginOutlined } from "@ant-design/icons";

import logo from "../images/logooo.png";
import "./Header.css";

const itemsMenu1 = [
  {
    key: "inicio",
    label: "Início",
  },
  {
    key: "servidores",
    label: "Servidores",
  },
  {
    key: "missoes",
    label: "Missões",
  },
  {
    key: "contactos",
    label: "Contactos",
  },
];

const itemsMenu2 = [
  {
    key: "skinchanger",
    label: "Skin Changer",
    style: {
      border: "2px solid #1D4C3B",
      marginRight: "10px",
      backgroundColor: "#1D3E34",
    }, // Example of valid inline style
  },
  {
    key: "vip",
    label: "Vip",
    style: { marginRight: "10px", border: "2px solid #5664ff" }, // Empty object if no style is needed
  },
  {
    key: "loja",
    icon: <TagOutlined />,
    label: "Loja",
    style: { border: "2px solid #5664ff" },
  },
];

const itemsMenu3 = [
  {
    key: "loginviasteam",
    icon: <LoginOutlined />,

    label: (
      <a
        href="https://steamcommunity.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Login via Steam
      </a>
    ),

    style: {
      border: "2px solid #5664ff",
      borderRadius: "10px",
      backgroundColor: "#2f2b6a",
    },
  },
];

function Header({ setCurrentPage }) {
  const [current, setCurrent] = useState("inicio");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setCurrentPage(e.key);
  };

  return (
    <Row>
      <Col
        className="gutter-row logo-column"
        xs={24}
        sm={4}
        md={4}
        lg={2}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: "60px",
          border: "2px solid #ffff",
        }}
      >
        <Image src={logo} height="85%" preview={false} />
      </Col>

      <Col
        className="gutter-row"
        xs={24}
        sm={20}
        md={20}
        lg={9}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: "60px",
          border: "2px solid #ffff",
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemsMenu1}
          className="custom-menu"
          selectable={false}
          style={{
            borderBottom: "none",
            backgroundColor: "transparent",
          }}
        />
      </Col>

      <Col
        className="gutter-row"
        xs={24}
        sm={17}
        md={12}
        lg={8}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: "60px",
          border: "2px solid #ffff",
        }}
      >
        <Menu
          mode="horizontal"
          items={itemsMenu2}
          className="custom-menu2"
          selectable={false}
          style={{
            borderBottom: "none",
            backgroundColor: "transparent",
          }}
        />
      </Col>

      <Col
        className="gutter-row"
        xs={24}
        sm={7}
        md={12}
        lg={5}
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          height: "60px",
          border: "2px solid #ffff",
        }}
      >
        <Menu
          mode="horizontal"
          items={itemsMenu3}
          className="custom-menu3"
          selectable={false}
          style={{
            borderBottom: "none",
            backgroundColor: "transparent",
          }}
        />
      </Col>
    </Row>
  );
}

export default Header;
