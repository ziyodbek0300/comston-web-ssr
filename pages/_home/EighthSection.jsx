import React from 'react';
import Image from "next/image";
import Human1 from '../../public/humans/image 33.png';
import Human2 from '../../public/humans/image 34.png';
import Human3 from '../../public/humans/image 35.png';
import Human4 from '../../public/humans/image 36.png';

function EighthSection() {
    return (<div className={"container py-20"}>
            <h2 className={"capitalize text-40-56-700 text-center mb-12"}>Introducing company <span
                className={"text-blue-550"}>leadership</span></h2>
            <div className={"flex gap-3 justify-between mb-20"}>
                <div>
                    <div className={"card-human1 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human1} alt={"human 1"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Brett Fraser</p>
                    <p className={"text-18-26-500 text-gray-450"}>Board Advisor</p>
                </div>
                <div>
                    <div className={"card-human2 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human2} alt={"human 2"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Brett Fraser</p>
                    <p className={"text-18-26-500 text-gray-450"}>Board Advisor</p>
                </div>
                <div>
                    <div className={"card-human3 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human3} alt={"human 3"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Brett Fraser</p>
                    <p className={"text-18-26-500 text-gray-450"}>Board Advisor</p>
                </div>
                <div>
                    <div className={"card-human4 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human4} alt={"human 4"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Brett Fraser</p>
                    <p className={"text-18-26-500 text-gray-450"}>Board Advisor</p>
                </div>
            </div>
        </div>);
}

export default EighthSection;
