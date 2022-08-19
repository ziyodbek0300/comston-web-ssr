import React from "react";
import Button from "/components/button";

export default function absolutePart() {
  return (
    <div
      className={
        "py-3 px-10 mt-2 mx-auto rounded-xl shadow-xl bg-white-700 absolute-part"
      }
    >
      <div className="container flex justify-between items-center">
        <div>
          <h3 className={"absolutePage-title text-30-44-600"}>
            Got a Project or Idea?
          </h3>
          <p className={"text-16-24-400 text-gray-450 py-3"}>
            Leave your details and we’ll be in touch within 1 hour.
          </p>
        </div>
        <Button  text={"Get started"} classes={"absolutePage-btn ml-auto"}/>
      </div>
    </div>
  );
}
