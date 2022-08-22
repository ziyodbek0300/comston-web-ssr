import React from 'react';
import Interface from '../../public/Group 125.png';
import Button from "/components/button";
import Image from "next/image";

function FirstSection() {
    return (<div className={"bg-blue-150 first-section-app flex items-center"}>
        <div className={"container flex"} style={{padding: "100px 20px"}}>
            <div className={"pt-10"} style={{width: "45%"}}>
                <h3 className={"text-40-56-700 uppercase mb-6"}>
                    Full-cycle mobile <span className={"text-blue-550"}>app
                    development</span> company
                    in
                    Florida
                </h3>
                <p className={"text-16-24-400 mb-10"}>
                    Fulfill your business objectives with creative solutions
                    through robust and cost-effective
                    app development methods
                </p>
                <Button text={"Get started"} classes={"bg-blue-950 hover:bg-blue-1000"}/>
            </div>
        </div>
    </div>);
}

export default FirstSection;
