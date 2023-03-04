import { Button, Carousel } from "antd";
import Image from "next/image";
import React, { useRef } from "react";

const crData = [
  "https://s3.ap-south-1.amazonaws.com/assets.fabpik.in/sliders/desktop/eWb48SBGka37gedrm8OttgBND8eLgpbJ5qCp2hX1.jpg",
  "https://s3.ap-south-1.amazonaws.com/assets.fabpik.in/sliders/desktop/ehF8Rsfov46QYIBFSzatQQXAbPpQWzfZMzNbdlLr.png",
  "https://s3.ap-south-1.amazonaws.com/assets.fabpik.in/sliders/desktop/I2r0rXlyGL5znhamI49OyYRNL1aCYkiqMCaTQ7Lf.jpg",
  "https://s3.ap-south-1.amazonaws.com/assets.fabpik.in/sliders/desktop/eWb48SBGka37gedrm8OttgBND8eLgpbJ5qCp2hX1.jpg",
  "https://s3.ap-south-1.amazonaws.com/assets.fabpik.in/sliders/desktop/ehF8Rsfov46QYIBFSzatQQXAbPpQWzfZMzNbdlLr.png",
  "https://s3.ap-south-1.amazonaws.com/assets.fabpik.in/sliders/desktop/I2r0rXlyGL5znhamI49OyYRNL1aCYkiqMCaTQ7Lf.jpg",
];

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
    <div className="relative">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        draggable
        dotPosition="right"
        vertical
      >
        {crData.map((cr, key) => (
          <div key={key}>
            <div className="h-[70vh] flex items-center justify-center relative">
              <Image fill src={cr} alt="heroImage" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousal;
