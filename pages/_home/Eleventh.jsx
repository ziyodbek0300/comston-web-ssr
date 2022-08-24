import React from 'react';
import Logo1 from '../../public/logos/image 37.png';
import Logo2 from '../../public/logos/image 38.png';
import Logo3 from '../../public/logos/image 40.png';
import Logo4 from '../../public/logos/image 41.png';
import Logo5 from '../../public/logos/image 42.png';
import Logo6 from '../../public/logos/image 43.png';
import Image from "next/image";

function Eleventh() {
    return (
        <div className={"bg-blue-150 py-12 mt-10"}>
            <div data-aos={"fade-up"} data-aos-duration={"800"} className="container flex lg:flex-row flex-col gap-4 lg:text-left text-center justify-between items-center">
                <div className={"w-full"}>
                    <h2 className={"text-40-56-700 mb-6 capitalize"}>Some of our humble <br/> <span
                        className={"text-blue-550"}>regonitions</span></h2>
                    <p className={"text-16-24-400 text-gray-450"}>
                        We have worked for the top brands and government institutions in the USA from Dept of Defense to
                        Discover channel host Peter Nielsen in our 9 years in business. You are in a good company!
                    </p>
                </div>
                <div className={"w-full"} data-aos={"fade-up"} data-aos-duration={"1200"}>
                    <div className={"w-2/3 lg:mr-0 ml-auto mr-auto grid grid-cols-3 gap-4 p-4 text-center"}>
                        <div><Image src={Logo1} alt={"Logo 1"}/></div>
                        <div><Image src={Logo2} alt={"Logo 1"}/></div>
                        <div><Image src={Logo3} alt={"Logo 1"}/></div>
                        <div><Image src={Logo4} alt={"Logo 1"}/></div>
                        <div><Image src={Logo5} alt={"Logo 1"}/></div>
                        <div><Image src={Logo6} alt={"Logo 1"}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eleventh;
