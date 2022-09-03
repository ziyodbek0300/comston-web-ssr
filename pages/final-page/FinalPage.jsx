import React from "react";
import Image from "next/image";
import Tick from "../../public/final-page images/Vector 41.png";
import Button from "/components/button";

export default function FinalPage() {
  return (
    <div
      style={{ height: "80vh" }}
      className="container flex flex-col items-center justify-center"
    >
      <div className="bg-blue-550 rounded-full h-36 mb-6 w-36 flex items-center justify-center">
        <Image className="tick-img" src={Tick} alt={"tick"} />
      </div>
      <h1 className="text-40-56-700">
        Thank you for{" "}
        <span className="text-blue-550 text-40-56-700">contacting us!</span>
      </h1>
      <p className="text-16-24-400 text-gray-450 text-center pt-4">
        Your information is securely delivered to Comston Sales Team members. We will contact you very soon.
      </p>
      <Button
            text={"Go to homepage"}
            classes={"bg-blue-550 hover:bg-blue-700 mt-10"}
          />
    </div>
  );
}
