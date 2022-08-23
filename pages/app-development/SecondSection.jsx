import React from "react";
import Button from "/components/button";
import Image from "next/image";
import Interface from "../../public/app-development-images/app-dev-second-section-group-photo.png";
import appDevEllipse from "../../public/app-development-images/app-dev-ellipse.svg";

function SecondSection() {
    return (
        <div className={"container flex lg:flex-row flex-col-reverse"} style={{padding: "50px 20px"}}>
            <div className={"pt-10 w-full text-center"}>
                <Image className={"w-full mx-auto"} src={Interface} alt={"interface"}/>
            </div>
            <div className={" pt-14 lg:text-left text-center"}>
                <h2 className={"capitalize text-32-44-700 sm:w-2/3 mx-auto text-left"}>
                    Comston <span className={"text-blue-550"}>App Development</span> services</h2>
                <p className={"text-16-24-400 text-gray-450 pt-6 pb-9 sm:w-2/3 mx-auto text-left"}>
                    Our software development center provides you with the best resources,
                    expertise.
                </p>
                <ul className={"sm:w-2/3 mx-auto text-left"}>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Mobile app development</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Web app development</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Software development</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>MVP development</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Design services</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>GIS application development</span>
                    </li>
                    <Button text={"Get started"} classes={"bg-blue-550 hover:bg-blue-1000 mt-8"}/>
                </ul>
            </div>
        </div>
    );
}

export default SecondSection;
