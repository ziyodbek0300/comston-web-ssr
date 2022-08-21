import React from "react";
import Button from "/components/button";
import Image from "next/image";
import Mockup from '../../public/Mockup.png';

function FirstSection() {
    return (
        <div className={"bg-blue-50 first-section-web app-dev-section items-center flex"}>
            <div className={"container flex"}>
                <div className={"pt-20"} style={{width: "43%"}}>
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
                <div style={{width: "57%"}} className={"bg-red-500 flex"}><Image className={"w-full"} src={Mockup} alt={"Hello"} /></div>
            </div>
        </div>
    );
}

export default FirstSection;
