import React from "react";
import { Col, Row } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <>
      <Row
        style={{
          borderBottom: "1px solid grey",
          height: "64px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Col span={8} style={{ paddingRight: "150px" }}>
          <MenuOutlined />
        </Col>
        <Col span={8} style={{ fontWeight: "bold" }}>
          MOVIE{" "}
          <span
            style={{
              background: "#456BD9",
              clippath: "circle(50%)",
              height: "5px",
              width: "5px",
            }}
          >
            UI
          </span>
        </Col>
        <Col span={8} style={{ paddingLeft: "150px" }}>
          <SearchOutlined />
        </Col>
      </Row>
    </>
  );
};

export default HeaderComponent;
