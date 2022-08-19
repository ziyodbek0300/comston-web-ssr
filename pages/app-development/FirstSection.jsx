import React from "react";
import Button from "/components/button";

function FirstSection() {
  return (
    <div style={{backgroundColor: "#F2FAFC"}} className={" first-section-web flex items-center app-dev-section"}>
      <div className={"container flex"} style={{ padding: "100px 20px" }}>
        <div className={"pt-10"} style={{ width: "43%" }}>
          <h3 className={"text-40-56-700 capitalize mb-6"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Full-cycle mobile &{" "}
            <span className={"text-blue-550"}>
              app development WEBSITE
            </span>{" "}
            company in Florida
          </h3>
          <p className={"text-16-24-400 mb-10"}>
            Fulfill your business objectives with creative solutions through
            robust and cost-effective app development methods
          </p>
          <Button
            text={"Get started"}
            classes={"bg-blue-950 hover:bg-blue-1000"}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
