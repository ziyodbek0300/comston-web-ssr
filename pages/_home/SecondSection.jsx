import React from 'react';
import CountUp from "react-countup";

function SecondSection() {
    return (
        <div className={"bg-blue-150 pb-14 pt-12"}>
            <div className={"container"}>
                <h2 className={"text-40-56-700 text-center capitalize"}>We create digital solutions that are <span
                    className={"text-blue-550 block"}>seen & heard</span></h2>
                <div className={"second-home-stats pt-10"}>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={258} duration={3}/>+</p>
                        <p className={"text-18-26-500"}>successful projects</p>
                    </div>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={58} duration={3}/></p>
                        <p className={"text-18-26-500"}>successful projects</p>
                    </div>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={7} duration={3}/>+</p>
                        <p className={"text-18-26-500"}>successful projects</p>
                    </div>
                    <div className={""}>
                        <p className={"text-50-60-800 mb-3 text-blue-950"}><CountUp end={75} duration={3}/>%</p>
                        <p className={"text-18-26-500"}>successful projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
