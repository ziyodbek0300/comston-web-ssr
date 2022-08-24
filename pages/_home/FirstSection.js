import React, {useEffect} from 'react';
import Button from "../../components/button";

import AOS from "aos";
import "aos/dist/aos.css";

function FirstSection() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.log("a")
    }, []);


    return (<div className={"container first-section flex items-center"}>
        <div className={"w-3/4 mx-auto text-center"}>
            <h1 className={"text-48-70-700 mb-4"} data-aos="fade-up" data-aos-duration={"1000"}>Mobile <span
                className={"text-blue-550"}>Web/App</span> Development For Technical & Non-technical Founders</h1>
            <p className={"text-20-30-500 md:w-3/4 md:px-10 mx-auto mb-14"} data-aos="fade-up" data-aos-duration={"1200"}>We help non-technical founders to <span
                className={"text-blue-550 border-b border-blue-550 pb-1"}>bring idea to execution</span> or help
                them scale</p>
            <Button text={"Get started"} classes={"bg-blue-950 hover:bg-blue-1000"}/>
        </div>
    </div>);
}

export default FirstSection;
