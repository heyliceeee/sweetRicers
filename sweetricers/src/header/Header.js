import React, { useState } from "react";
import { Menu, Drawer, Row, Col, Image, Button } from "antd";
import { TagOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";

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
  const [visible, setVisible] = useState(false);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setCurrentPage(e.key);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Row>
      <Col xs={12} sm={12} md={2} lg={2}>
        <Image src={logo} height="85%" preview={false} />
      </Col>

      <Col xs={12} sm={12} md={0} lg={0} style={{ textAlign: "right" }}>
        <Button
          type="primary"
          onClick={showDrawer}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuOutlined />
        </Button>
      </Col>

      <Col xs={0} sm={0} md={22} lg={22}>
        <Row>
          <Col md={10} lg={9}>
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
              theme="dark"
            />
          </Col>
          <Col md={7} lg={8}>
            <Menu
              mode="horizontal"
              items={itemsMenu2}
              className="custom-menu2"
              selectable={false}
              style={{
                borderBottom: "none",
                backgroundColor: "transparent",
              }}
              theme="dark"
            />
          </Col>
          <Col md={5} lg={5}>
            <Menu
              mode="horizontal"
              items={itemsMenu3}
              className="custom-menu3"
              selectable={false}
              style={{
                borderBottom: "none",
                backgroundColor: "transparent",
              }}
              theme="dark"
            />
          </Col>
        </Row>
      </Col>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        style={{
          background: "linear-gradient(to right, #22213F, #1C1B2B, #171718)",
        }}
        bodyStyle={{
          background: "linear-gradient(to right, #22213F, #1C1B2B, #171718)",
        }}
        headerStyle={{
          color: "white",
        }}
      >
        <Menu
          items={[...itemsMenu1, ...itemsMenu2, ...itemsMenu3]}
          mode="vertical"
          style={{
            background: "linear-gradient(to right, #22213F, #1C1B2B, #171718)",
          }}
          theme="dark"
        />
      </Drawer>
    </Row>
  );
}

export default Header;
