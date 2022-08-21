import React from "react";
import Button from "/components/button";

export default function AbsolutePart() {
  return (
    <div
      className={
        "py-5 px-20 mx-auto bg-white rounded-xl shadow-ab bg-white-700 w-2/3 absolute"
      }
      style={{ left: "15%", top: "85%" }}
    >
      <div className="container flex justify-between items-center">
        <div>
          <h3 className={"text-blue-gr text-30-44-600 mb-4"}>
            Got a Project or Idea?
          </h3>
          <p className={"text-16-24-400 text-gray-450"}>
            Leave your details and we’ll be in touch within 1 hour.
          </p>
        </div>
        <Button text={"Get started"} classes={"bg-gradient-btn text-18-26-500 ml-auto"}/>
      </div>
    </div>
  );
}