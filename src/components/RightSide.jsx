import React from "react";
import { Image } from "react-bootstrap";

const RightSide = () => {
  return (
    <div>
      <Image
        src="./img/programming.png"
        thumbnail
        style={{ border: "none", width: "600px" }}
      />
    </div>
  );
};

export default RightSide;
