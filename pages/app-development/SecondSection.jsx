import React from "react";
import Button from "/components/button";
import Image from "next/image";
import Interface from "../../public/app-development-images/app-dev-second-section-group-photo.png";
import appDevEllipse from "../../public/app-development-images/app-dev-ellipse.svg";

function SecondSection() {
    return (
        <div className={"container flex lg:flex-row flex-col-reverse py-[20px]"}>
            <div className={"py-10 w-full text-center"} data-aos={"fade-up"} data-aos-duration={"800"}>
                <Image className={"w-full mx-auto"} src={Interface} alt={"interface"}/>
            </div>
            <div className={" pt-14 lg:text-left text-center"} data-aos={"fade-up"} data-aos-duration={"1200"}>
                <h2 className={"capitalize text-32-44-700 sm:w-2/3 lg:w-full mx-auto text-left"}>
                    Comston <span className={"text-blue-550"}>App Development</span> services</h2>
                <p className={"text-16-24-400 text-gray-450 pt-6 pb-5 sm:w-2/3 lg:w-full mx-auto text-left"}>
                    Our software development center provides you with the best resources and
                    expertise.
                </p>
                <ul className={"sm:w-2/3 lg:w-full mx-auto text-left"}>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Telemedicine Apps</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>E-commerce Apps</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Dating Apps</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Social Media Apps</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Decentralized Apps (DApps)</span>
                    </li>
                    <li className={"text-16-24-400 pb-3"}>
                        <Image src={appDevEllipse} alt={"app dev ellipse"}/>
                        <span className={"inline-block ml-3"}>Various apps for non-profit organizations</span>
                    </li>
                    <Button link={"/#contacts"} duration={"1200"} text={"Contact Us"} classes={"bg-blue-550 hover:bg-blue-1000 mt-8"}/>
                </ul>
            </div>
        </div>
    );
}

export default SecondSection;
