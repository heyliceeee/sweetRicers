import React from "react";
import { Row, Col, Carousel } from "antd";
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
  { id: 1, label: "6/12", url: "", disable: false },
  { id: 2, label: "4/12", url: "", disable: false },
  { id: 3, label: "2/12", url: "", disable: false },
  { id: 4, label: "0/12", url: "", disable: false },
  { id: 5, label: "0/20", url: "", disable: false },
  { id: 6, label: "0/12", url: "", disable: false },
  { id: 7, label: "0/47", url: "", disable: false },
  { id: 8, label: "soon", url: "", disable: true },
  { id: 9, label: "off", url: "", disable: true },
];

const caroussel = [
  {
    id: 1,
    title: "UPDATE 7.16",
    subtitle: "Update Servidores - 16 de julho",
    photo: "https://th.bing.com/th/id/OIG3.tKNZOuD9a56dHIBYinOL?pid=ImgGn",
  },
  {
    id: 2,
    title: "UPDATE 7.16",
    subtitle: "Update Servidores - 16 de julho",
    photo: "https://th.bing.com/th/id/OIG3.tKNZOuD9a56dHIBYinOL?pid=ImgGn",
  },
  {
    id: 3,
    title: "UPDATE 7.16",
    subtitle: "Update Servidores - 16 de julho",
    photo: "https://th.bing.com/th/id/OIG3.tKNZOuD9a56dHIBYinOL?pid=ImgGn",
  },
  {
    id: 4,
    title: "UPDATE 7.16",
    subtitle: "Update Servidores - 16 de julho",
    photo: "https://th.bing.com/th/id/OIG3.tKNZOuD9a56dHIBYinOL?pid=ImgGn",
  },
];

function Inicio() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [URLItem, setURLItem] = useState(null);

  const handleMouseOver = (id, disable) => {
    if (disable == false) {
      setHoveredItem(id);
    }
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  const handleClick = (id, disable, url) => {
    if (!disable) {
      setClickedItem(id);
      setURLItem(url);

      window.location.href = url;
    }
  };

  return (
    <Row
      style={{ marginTop: "40px", marginBottom: "20px" }}
      justify="start"
      align="middle"
      gutter={[{ xs: 16, sm: 16, md: 16, lg: 16 }, 16]} // Adiciona espaçamento entre colunas responsivo
    >
      <Col xs={17} sm={19} md={20} lg={9}>
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
            onClick={() => handleClick(item.id, item.disable, item.url)}
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

      <Col xs={7} sm={5} md={4} lg={3}>
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
              marginRight: "20px",
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
            onClick={() => handleClick(item.id, item.disable, item.url)}
          >
            {item.label.toUpperCase()}
          </div>
        ))}
      </Col>

      <Col xs={24} sm={24} md={24} lg={12}>
        <Carousel autoplay style={{ marginBottom: "10px", marginTop: "-10px" }}>
          {caroussel.map((item) => (
            <div key={item.title}>
              <div
                style={{
                  border: "2px solid #5664ff",
                  color: "#fff",
                  borderRadius: "10px",
                  textAlign: "start",
                  backgroundImage:
                    "url(https://th.bing.com/th/id/OIG3.tKNZOuD9a56dHIBYinOL?pid=ImgGn)",
                  height: "245px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  position: "relative", // Para permitir a sobreposição do overlay
                  overflow: "hidden", // Para garantir que o conteúdo fique dentro dos limites
                }}
              >
                {/* Camada preta fina para realçar o texto */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // Fundo preto com opacidade
                    zIndex: 1,
                  }}
                />

                {/* Conteúdo do texto com camada preta atrás */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h1 style={{ marginLeft: "20px" }}>{item.title}</h1>
                  <h3 style={{ marginLeft: "20px", marginTop: "-20px" }}>
                    {item.subtitle}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div style={{ marginTop: "0px" }}>
          <div
            style={{
              border: "2px solid #5664ff",
              color: "#fff",
              borderRadius: "10px",
              textAlign: "start",
              backgroundImage:
                "url(https://tse2.mm.bing.net/th?id=OIG3.fh5p5vcO9V77RfvOJOPx&pid=ImgGn)",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              position: "relative", // Para permitir a sobreposição do overlay
              overflow: "hidden", // Para garantir que o conteúdo fique dentro dos limites
            }}
          >
            {/* Camada preta fina para realçar o texto */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Fundo preto com opacidade
                zIndex: 1,
              }}
            />

            {/* Conteúdo do texto com camada preta atrás */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <h1 style={{ marginLeft: "20px" }}>MISSÕES GUERRILLA ALPHA!</h1>

              <div
              className="btn-green"
                style={{
                  border: "2px solid #1D4C3B",
                  borderRadius: "10px",
                  backgroundColor: "#1D3E34",
                  height: "35px",
                  width: "100%",
                  maxWidth: "104px",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                  justifyContent: "center",

                  marginLeft: "20px",
                  marginBottom: "10px",
                  marginTop: "-10px",
                }}
              >
                <div style={{ color: "#ffff", fontSize: "13px" }}>
                  NOVAS MISSÕES
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Inicio;
