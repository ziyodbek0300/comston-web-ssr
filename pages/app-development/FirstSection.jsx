import React from 'react';
import Button from "/components/button";

function FirstSection() {
    return (<div className={"bg-blue-150 first-section-app flex lg:items-center lg:text-left text-center pb-16"}>
        <div className={"container flex lg:flex-row flex-col"}>
            <div className={"pt-10 lg:w-[45%] w-full pb-10"}>
                <h3 data-aos={"fade-up"} data-aos-duration={"800"} className={"text-40-56-700 uppercase lg:w-full w-[90%] mx-auto mb-6 mt-14"}>
                    Full-cycle mobile <span className={"text-blue-550"}>app
                    development</span> company
                    in
                    Florida
                </h3>
                <p data-aos={"fade-up"} data-aos-duration={"1000"} className={"text-16-24-400 mb-10 lg:w-full w-2/3 mx-auto"}>
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
