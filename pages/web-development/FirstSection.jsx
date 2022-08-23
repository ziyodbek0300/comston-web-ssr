import React from 'react';
import Interface from '../../public/Group 125.png';
import Button from "/components/button";
import Image from "next/image";

function FirstSection() {
    return (<div className={"bg-blue-150 first-section-web flex items-center"}>
        <div className={"container flex lg:flex-row flex-col lg:text-left text-center py-[100px] px-[20px]"}>
            <div className={"pt-10 lg:w-[45%] w-full"}>
                <h3 className={"text-40-56-700 capitalize mb-4 lg:w-full w-[90%] mx-auto"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    RESPONSIVE & <span className={"text-blue-550"}>PROFESSIONAL
                WEBSITE</span> DEVELOPMENT
                </h3>
                <p className={"text-16-24-400 mb-10 lg:w-full w-2/3 mx-auto"}>
                    Our vetted website developers will create a customized website to
                    achieve all of your business goals
                </p>
                <Button text={"Get started"} classes={"bg-blue-950 hover:bg-blue-1000"}/>
            </div>
            <div className={"lg:w-[55%] lg:pt-0 pt-10 w-full"}>
                <Image className={"w-full"} src={Interface} alt={"interface"}/>
            </div>
        </div>
    </div>);
}

export default FirstSection;
