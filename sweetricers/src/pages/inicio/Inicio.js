import React from "react";
import { Row, Col, Image } from "antd";
import { LinkOutlined } from "@ant-design/icons";

import "./Inicio.css";
import { useState } from "react";

const itemsCol1 = [
  { id: 1, label: "1v1 multi-arenas", url: "", disable: false },
  { id: 2, label: "retake #1", url: "", disable: false },
  { id: 3, label: "retake #2", url: "", disable: false },
  { id: 4, label: "retake #3", url: "", disable: false },
  { id: 5, label: "death match ffa mirage", url: "", disable: false },
  { id: 6, label: "death match ffa dust 2", url: "", disable: false },
  { id: 7, label: "death match ffa saw rifles", url: "", disable: false },
  { id: 8, label: "jailbreak", url: "", disable: true },
  { id: 9, label: "casual fun rounds", url: "", disable: true },
];

const itemsCol2 = [
  { id: 1, label: "6/12", disable: false },
  { id: 2, label: "4/12", disable: false },
  { id: 3, label: "2/12", disable: false },
  { id: 4, label: "0/12", disable: false },
  { id: 5, label: "0/20", disable: false },
  { id: 6, label: "0/12", disable: false },
  { id: 7, label: "0/47", disable: false },
  { id: 8, label: "soon", disable: true },
  { id: 9, label: "off", disable: true },
];

function Inicio() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  const handleMouseOver = (id, disable) => {
    if (disable == false) {
      setHoveredItem(id);
    }
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  const handleClick = (id, disable) => {
    if (disable == false) {
      setClickedItem(id);
    }
  };

  return (
    <Row
      style={{ marginTop: "20px", marginBottom: "20px" }}
      justify="start"
      align="middle"
    >
      <Col xs={19} sm={20} md={21} lg={10}>
        {itemsCol1.map((item) => (
          <div
            key={item.id}
            className={`custom-div ${item.disable ? "disabled" : ""} ${
              hoveredItem === item.id ? "hovered" : ""
            }
              ${clickedItem === item.id ? "clicked" : ""}`}
            style={{
              border: "2px solid #5664ff",
              borderRadius: "10px",
              marginBottom: "10px",
              marginRight: "10px",
              fontSize: "20px",
              textAlign: "center",
              height: "50px",
              alignItems: "center",
              alignContent: "center",
              color: item.disable ? "#5664ff" : "#fff",
              backgroundColor: item.disable ? "transparent" : "#2f2b6a",
              position: "relative",
            }}
            onMouseOver={() => handleMouseOver(item.id, item.disable)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(item.id, item.disable)}
          >
            {item.label.toUpperCase()}
            {!item.disable && (
              <LinkOutlined
                className={`link-icon ${
                  hoveredItem === item.id ? "link-icon-visible" : ""
                }`}
              />
            )}
          </div>
        ))}
      </Col>

      <Col xs={5} sm={4} md={3} lg={2}>
        {itemsCol2.map((item) => (
          <div
            key={item.id}
            className={`custom-div ${item.disable ? "disabled" : ""} ${
              hoveredItem === item.id ? "hovered" : ""
            } ${clickedItem === item.id ? "clicked" : ""}`}
            style={{
              border: "2px solid #5664ff",
              borderRadius: "10px",
              marginBottom: "10px",
              marginRight: "10px",
              fontSize: "20px",
              textAlign: "center",
              height: "50px",
              alignItems: "center",
              alignContent: "center",
              color: item.disable ? "#5664ff" : "#fff",
              backgroundColor: item.disable ? "transparent" : "#2f2b6a",
            }}
            onMouseOver={() => handleMouseOver(item.id, item.disable)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(item.id, item.disable)}
          >
            {item.label.toUpperCase()}
          </div>
        ))}
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <div
          style={{
            border: "2px solid #5664ff",
            borderRadius: "10px",
            height: "100px",
          }}
        ></div>
        <div></div>
      </Col>
    </Row>
  );
}

export default Inicio;
