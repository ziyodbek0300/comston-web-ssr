import React from 'react';
import Image from "next/image";
import Icon1 from '../../public/icons-web-development/Vector.svg';
import Icon2 from '../../public/icons-web-development/Vector-1.svg';
import Icon3 from '../../public/icons-web-development/Vector-2.svg';
import Icon4 from '../../public/icons-web-development/Vector-3.svg';
import Icon5 from '../../public/icons-web-development/Vector-4.svg';
import Icon6 from '../../public/icons-web-development/Vector-5.svg';

function SecondSection() {
    return (<div className={"container"}>
        <div className={"lg:py-24 py-20"}>
            <h2 className={"capitalize text-32-44-700 text-center mb-4 lg:w-full w-[90%] mx-auto"}>Comston <span
                className={"text-blue-550"}>Software Services</span> </h2>
            <p className={"text-16-24-400 text-gray-450 text-center capitalize mb-10 lg:w-full w-[90%] mx-auto"}>At Comston, we specialize in developing customized software designed specifically for your company&apos;s needs:</p>
            <div className={"grid lg:grid-cols-3 md:grid-cols-2 gap-8"}>
                <div data-aos={"fade-up"} data-aos-duration={"800"}>
                    <div className={"mb-6 w-16 h-16 flex items-center justify-center"}>
                        <Image src={Icon1} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-6"}>Fleet Management</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                    Our tailored solutions help you oversee your entire fleet with ease, from maintenance schedules to optimizing routes for efficiency and cost savings. 
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon2} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>Employee Hour Tracking</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                    Simplify the management of employee hours with software that accurately tracks time, ensuring payroll accuracy and labor regulation compliance. 


                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon3} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>Truck and Load Scheduling</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                    Enhance your scheduling capabilities with software that provides real-time tracking of trucks and loads, improving delivery times and customer satisfaction.
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"1000"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon4} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>Broker and Shipper Communication</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                    Facilitate seamless communication between your team, brokers, and shippers with integrated messaging systems, making transactions smoother and more reliable.
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"1000"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon5} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>Financial management</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                    Our custom software solutions include financial management features that allow you to monitor expenses, revenues, and profitability, all in one place.
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"1000"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon6} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>Safety Protocol Compliance</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                    Ensure your operations follow industry safety standards with software that monitors and manages compliance with safety protocols, reducing risk and promoting a safe working environment.
                    </p>
                </div>
            </div>
        </div>
    </div>);
}

export default SecondSection;
