import React from 'react';
import Image from "next/image";
import Icon1 from '../../public/Health/Vector.svg';
import Icon2 from '../../public/Build/Vector.svg';
import Icon3 from '../../public/Abstract/Vector.svg';
import Icon4 from '../../public/Base/Vector.svg';
import Icon5 from '../../public/Brand/Vector (Stroke).svg';
import Icon6 from '../../public/Build/Vector-1.svg';

function SeventhSection() {
    return (
        <div className={"container"} data-aos={"fade-up"} data-aos-duration={"800"}>
            <div className={"py-24"}>
                <h2 className={"capitalize text-32-44-700 text-center mb-14"}><span
                    className={"text-blue-550"}>Industries</span> we&apos;ve excelled in</h2>
                <div className={"grid lg:grid-cols-3 md:grid-cols-2 gap-8"}>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon1} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Telemedicine</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                            Healthcare is broken. Fix it by building a better virtual solution with a
                            telehealth app or a web platform
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon2} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Government</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                            Government projects are strict. We bring our experts into work to make sure the solutions we provide are sustainable and reliable
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon3} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Blockchain Apps</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                            Blockchain is the future. Decentralized apps (dApps) will be the main utility to process the data on blockchain. Why not build your own dApp?
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon4} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>E-commerce</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                            Retail is evolving. Build the future of commerce with our innovative vision and advanced
                            solutions. Maybe in metaverse?
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon5} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Social Media</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                            We know Facebook sucks so we can help you build a better social media app!
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon6} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Marketplaces</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                            Wanna disrupt an industry? Build a marketplace to remove the middleman and reinvent the way
                            ordinary trade is done!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeventhSection;
