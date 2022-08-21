import React from "react";
import Button from "/components/button";
import Image from "next/image";
import Interface from "../../public/app-development-images/app-dev-second-section-group-photo.png";
import appDevEllipse from "../../public/app-development-images/app-dev-ellipse.svg";

function SecondSection() {
  return (
    <div className={"container flex "} style={{ padding: "100px 20px" }}>
      <div className={"pt-7"} style={{ width: "80%" }}>
        <Image className={"w-full"} src={Interface} alt={"interface"} />
      </div>
      <div className={" pt-14 "}>
        <h2 className={"capitalize text-32-44-700"}>
          Comston <span className={"text-blue-550"}>App Development</span> services</h2>
        <p className={"text-16-24-400 text-gray-450 pt-6 pb-9"}>
          Our software development center provides you with the best resources,
          expertise.
        </p>
        <ul>
          <li className={"text-16-24-400 pb-3"}>
            <Image src={appDevEllipse} alt={"app dev ellipse"} />
            <span className={"inline-block ml-3"}>Mobile app development</span>
          </li>
          <li className={"text-16-24-400 pb-3"}>
            <Image src={appDevEllipse} alt={"app dev ellipse"} />
            <span className={"inline-block ml-3"}>Web app development</span>
          </li>
          <li className={"text-16-24-400 pb-3"}>
            <Image src={appDevEllipse} alt={"app dev ellipse"} />
            <span className={"inline-block ml-3"}>Software development</span>
          </li>
          <li className={"text-16-24-400 pb-3"}>
            <Image src={appDevEllipse} alt={"app dev ellipse"} />
            <span className={"inline-block ml-3"}>MVP development</span>
          </li>
          <li className={"text-16-24-400 pb-3"}>
            <Image src={appDevEllipse} alt={"app dev ellipse"} />
            <span className={"inline-block ml-3"}>Design services</span>
          </li>
          <li className={"text-16-24-400 pb-3"}>
            <Image src={appDevEllipse} alt={"app dev ellipse"} />
            <span className={"inline-block ml-3"}>GIS application development</span>
          </li>
          <Button text={"Get started"} classes={"bg-blue-550 hover:bg-blue-1000 mt-12"}/>
        </ul>
      </div>
    </div>
  );
}

export default SecondSection;