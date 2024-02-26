import React from "react";
import Logo1 from "../../public/logos/image 39.png";
import Logo2 from "../../public/logos/image 38.png";
import Logo3 from "../../public/logos/image 40.png";
import Logo4 from "../../public/logos/image 41.png";
import Logo5 from "../../public/logos/image 42.png";
import Logo6 from "../../public/logos/image 43.png";
import Image from "next/image";
import AbsolutePart from "./Absolute-part";

function ThirdSection() {
    return (<div className={"bg-blue-150 py-12 pb-32 relative"}>
            <div
                className="container flex lg:flex-row flex-col gap-4 lg:text-left text-center justify-between items-center">
                <div className={"w-full"} data-aos={"fade-up"} data-aos-duration={"800"}>
                    <h2 className={"text-40-56-700 mb-6 capitalize"}>{"Optimize your B2B operations with "}<br/> <span
                        className={"text-blue-550"}> Comston&apos;s tailored solutions</span> for your business needs.</h2>
                    <p className={"text-16-24-400 text-gray-450"}>
                    
                    </p>
                </div>
                
            </div>
            <AbsolutePart/>
        </div>);
}

export default ThirdSection;
