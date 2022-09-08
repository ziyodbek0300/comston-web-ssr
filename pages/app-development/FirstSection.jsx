import React from 'react';
import Button from "/components/button";

function FirstSection() {
    return (<div className={"bg-blue-150 first-section-app flex lg:items-center lg:text-left text-center pb-16"}>
        <div className={"container flex lg:flex-row flex-col"}>
            <div className={"md:pt-10 lg:w-[45%] w-full pb-10"}>
                <h3 data-aos={"fade-up"} data-aos-duration={"800"} className={"text-40-56-700 uppercase lg:w-full md:w-[90%] mx-auto mb-6 md:mt-14 mt-10"}>
                Full-cycle <span className={"text-blue-550"}>mobile app
                    development</span> company
                    in {""}
                    <span className={"text-green-550"}>Florida</span>
                </h3>
                <p data-aos={"fade-up"} data-aos-duration={"1000"} className={"text-16-24-400 mb-10 lg:w-full md:w-2/3 m-0 mx-auto"}>
                    Fulfill your business objectives with creative solutions
                    through robust and cost-effective
                    app development methods
                </p>
                <Button duration={"1200"} link={"/#contacts"} text={"Get started"} classes={"bg-blue-950 hover:bg-blue-1000"}/>
            </div>
        </div>
    </div>);
}

export default FirstSection;
