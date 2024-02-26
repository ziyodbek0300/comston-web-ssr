import React from 'react';
import Button from "../../components/button";

function ThirdSection() {
    return (
        <div data-aos={"fade-up"} data-aos-duration={"1000"} className={"py-14 bg-blue-950 text-center nineSection"}>
            <h2 className={"text-white text-40-56-700 uppercase mb-5"}>Upgrade your digital <br/> strategy with us</h2>
            <Button link={"/#contacts"} duration={"1200"} classes={"bg-gradient text-white rounded-full  border-none"} text={"Get started"} />
        </div>
    );
}

export default ThirdSection;
