import React from 'react';
import CountUp from "react-countup";

function SecondSection() {
    return (
        <div className={"bg-blue-150 pb-14 pt-12"}>
            <div className={"container"}>
                <h2 className={"text-40-56-700 text-center capitalize"}>Tailored <span className={"text-blue-550 block"}>Logistics & Supply Chain Solutions</span> for Businesses at Every Stage
                </h2>
                <div className={"second-home-stats pt-10"}>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={60} duration={5}/>+</p>
                        <p className={"text-18-26-500"}>successful projects</p>
                    </div>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={95} duration={5}/>%</p>
                        <p className={"text-18-26-500"}>satisfied customers</p>
                    </div>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={7} duration={5}/>+</p>
                        <p className={"text-18-26-500"}>years of industry experience</p>
                    </div>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={65} duration={5}/>%</p>
                        <p className={"text-18-26-500"}>of clients collaborated further</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
