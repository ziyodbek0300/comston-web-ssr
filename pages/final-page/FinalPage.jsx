import React from "react";
import Image from "next/image";
import tick from "../../public/final-page images/Vector 41.png";
import Button from "/components/button";

export default function FinalPage() {
  return (
    <div
      style={{ height: "100vh" }}
      className="container flex flex-col items-center justify-center"
    >
      <div className="finalPage__img ">
        <Image className="tick-img" src={tick} alt={"tick"} />
      </div>
      <h1 className="text-40-56-700">
        Thank you for{" "}
        <span className="text-blue-550 text-40-56-700">contacting us!</span>
      </h1>
      <p className="text-16-24-400 text-gray-450 text-center pt-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ultrices quam
        facilisi praesent ipsum, urna, <br /> faucibus sed id dictumst. Cursus laoreet{" "}
      </p>
      <Button
            text={"Go to homepage"}
            classes={"bg-blue-550 hover:bg-blue-700 mt-10"}
          />
    </div>
  );
}
