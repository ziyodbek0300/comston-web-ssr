import React from 'react';
import Image from "next/image";
import Icon1 from '../../public/star.svg';
import Icon2 from '../../public/star.svg';
import Icon3 from '../../public/star.svg';
import Icon4 from '../../public/star.svg';
import Icon5 from '../../public/star.svg';
import Icon6 from '../../public/star.svg';

function SeventhSection() {
    return (
        <div className={"container"} data-aos={"fade-up"} data-aos-duration={"800"}>
            <div className={"py-24"}>
                <h2 className={"capitalize text-32-44-700 text-center mb-14"}>
                    Services</h2>
                <div className={"grid lg:grid-cols-3 md:grid-cols-2 gap-8"}>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon1} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Business Launch Guidance</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        From navigating administrative tasks to setting up your business structure, we&apos;re with you from day one.
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon2} className={""} alt={"telemedicine"}/>
                            
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Permits and Licenses</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        We demystify the process of obtaining the necessary permits and licenses, ensuring you&apos;re compliant and ready to operate.
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon3} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Fleet Acquisition</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        Whether you&apos;re buying or leasing trucks and trailers, we provide expert advice to get you the best deals and options.
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon4} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Software Solutions</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        We recommend the best software to streamline your operations or can develop a custom solution tailored to your business needs.
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon5} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Unified Platform Development</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        Our expertise helps integrate fleet management, safety protocols, driver schedules, broker interactions, contracts, and financials into one cohesive platform.
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 bg-blue-150 w-16 h-16 rounded-xl flex items-center justify-center"}>
                            <Image src={Icon6} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-18-26-500 mb-4"}>Brokerage and Contract Assistance</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        We don&apos;t just help you find brokers; we assist in securing year-long contracts to ensure steady business flow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeventhSection;
