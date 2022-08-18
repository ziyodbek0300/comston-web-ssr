import React from 'react';
import Image from "next/image";
// import Right from "../../public/right.svg";
import P1 from '../../public/hubspot.png';
import P2 from '../../public/PngItem_1928987 1.png';
import P3 from '../../public/image 45.png';
import P4 from '../../public/image 46.png';
import P5 from '../../public/image 47.png';
import P6 from '../../public/image 48.png';

// import Button from "../../components/button";

function SixthSection() {
    return (<div className={"bg-blue-50 py-12"}>
        <div className={"flex justify-between container gap-10 pb-14"}>
            <div className={"w-full"}>
                <h2 className={"text-32-44-700 capitalize"}>We are a trusted technology partner for recognized <span
                    className={"text-blue-550"}>brands</span></h2>
            </div>
            <div className={"w-full"}>
                <p className={"text-16-24-400 text-gray-450 mt-2"}>
                    We have worked for the top brands and government institutions in the USA from Dept of Defense to
                    Discover channel host Peter Nielsen in our 7 years in business. You are in a good company!
                </p>
            </div>
        </div>
        <div className={"mt-8 p-0 m-0"}>
            <div className={"flex items-center container p-0 justify-between"}>
                <div><Image src={P1} className={"opacity-60 hover:opacity-100 hover:grayscale-0 transition-all grayscale"} alt={"hubspot"}/></div>
                <div><Image src={P2} className={"opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"} alt={"hubspot"}/></div>
                <div><Image src={P3} className={"opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"} alt={"hubspot"}/></div>
                <div><Image src={P4} className={"opacity-60 hover:opacity-100 hover:grayscale-0 transition-all grayscale"} alt={"hubspot"}/></div>
                <div><Image src={P5} className={"opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"} alt={"hubspot"}/></div>
                <div><Image src={P6} className={"opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"} alt={"hubspot"}/></div>
            </div>
        </div>
    </div>);
}

export default SixthSection;
