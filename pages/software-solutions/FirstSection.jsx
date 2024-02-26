import React from 'react';
import Interface from '../../public/Group 125.png';
import Button from "/components/button";
import Image from "next/image";

function FirstSection() {
    return (<div className={"bg-blue-150 first-section-web flex items-center"}>
        <div className={"container flex lg:flex-row flex-col lg:text-left text-center md:py-[100px] px-[20px]"}>
            <div className={"md:pt-10 pt-32 lg:w-[60%] w-full"}>
                <h3 data-aos={"fade-up"} data-aos-duration={"800"} className={"text-40-56-700 capitalize mb-4 lg:w-full md:w-[90%] mx-auto"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className={"text-blue-550"}>COMSTON
                </span> <br/>SOFTWARE SOLUTIONS
                </h3>
                <p data-aos={"fade-up"} data-aos-duration={"1000"} className={"text-16-24-400 mb-10 lg:w-full md:w-2/3 mx-auto"}>
                Elevate Your Business with AI-Enhanced Operations
                </p>
                <Button link={"/#contacts"} duration={"1200"} text={"Get started"} classes={"bg-blue-950 hover:bg-blue-1000"}/>
            </div>
            <div data-aos={"fade-up"} data-aos-duration={"1000"} className={"lg:w-[40%] lg:pt-0 pt-10 w-full"}>
                <Image quality={100} className={"w-full"} src={Interface} alt={"interface"}/>
            </div>
        </div>
    </div>);
}

export default FirstSection;
