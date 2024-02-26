import React, { useState } from "react";
import Image from "next/image";
import Right from "../../public/right.svg";
import Right1 from "../../public/right1.svg";

// import Button from "../../components/button";

function FifthSection() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={"container text-center overflow-hidden"}
      style={{ padding: "100px 20px" }}
    >
      <h2 className={"capitalize text-40-56-700"}>
        We can guarantee <span className={"text-blue-550"}>success</span>{" "}
        because we spent 7+ years finding a repeatable{" "}
        <span className={"text-blue-550"}>Logistics formula</span>
      </h2>
      {/* paste complete diagram in diagram.jsx here    */}
    </div>
  );
}

export default FifthSection;
