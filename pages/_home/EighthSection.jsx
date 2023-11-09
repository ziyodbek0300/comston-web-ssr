import React from 'react';
import Image from "next/image";
import Human1 from '../../public/humans/kenny.png';
import Human2 from '../../public/humans/image 34.png';
import Human3 from '../../public/humans/image 35.png';
import Human4 from '../../public/humans/image 36.png';

function EighthSection() {
    return (<div className={"container py-20"} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <h2 className={"capitalize text-40-56-700 text-center mb-12"}>Introducing company <span
            className={"text-blue-550"}>leadership</span></h2>
        <div className="overflow-auto mb-16">
            <div className={"flex gap-3 min-w-max justify-between mb-4"}>
            <div>
                    <div className={"card-human2 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human2} alt={"human 2"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Khusniddin Muradov</p>
                    <p className={"text-18-26-500 text-gray-450"}>Chief Executive Officer</p>
                </div>
                <div>
                    <div className={"card-human1 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human1} alt={"human 1"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Kenny Abdul</p>
                    <p className={"text-18-26-500 text-gray-450"}>Chief Operating Officer</p>
                </div>
                <div>
                    <div className={"card-human3 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human3} alt={"human 3"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Abror Khaytbaev</p>
                    <p className={"text-18-26-500 text-gray-450"}>Tech Lead</p>
                </div>
                
                
                {/* <div>
                    <div className={"card-human4 overflow-hidden flex bg-blue-950 pt-16 rounded-2xl mb-4"}>
                        <Image src={Human4} alt={"human 4"}/>
                    </div>
                    <p className={"text-20-24-700 mb-2"}>Abror Damanov</p>
                    <p className={"text-18-26-500 text-gray-450"}>Project Manager</p>
                </div> */}
            </div>
        </div>
    </div>);
}

export default EighthSection;
