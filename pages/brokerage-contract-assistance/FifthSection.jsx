import React from 'react';
import Button from "../../components/button";

function FifthSection() {
    return (
        <div className={"py-14 bg-blue-950 text-center nineSection"} data-aos={"fade-up"} data-aos-duration={"1000"}>
            <h2 className={"text-white text-40-56-700 mb-5"}>UPGRADE YOUR <br /> STRATEGY WITH US</h2>
            <Button duration={"1000"} classes={"bg-gradient text-white border-none"} text={"Get started"} />
        </div>
    );
}

export default FifthSection;
