import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "70vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

type Props = {};

const Carousal = ({}: Props) => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default Carousal;
