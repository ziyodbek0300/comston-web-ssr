import React from 'react';
import Image from "next/image";

import Img1 from '../../public/web-development-images/05.svg';
import Img2 from '../../public/web-development-images/04.svg';
import Img3 from '../../public/web-development-images/03.svg';
import Img4 from '../../public/web-development-images/02.svg';
import Img5 from '../../public/web-development-images/01.svg';


function FourthSection() {
    return (<div className={'development-fourthSection'}>
        <div className={'container'}>
            <h2 className={"capitalize text-32-44-700 text-center mt-20 mb-14"}>Here are the  <span
                className={"text-blue-550"}>five key steps</span>  we follow:</h2>
            <div className="container-md relative">
                <div className={"absolute lg:left-1/2 left-0 dashed w-1 h-full"}>
                    <div className={"h-full relative"}>
                        <div className={"w-2 h-64 bg-blue-550 rounded sticky top-64"} style={{ marginLeft: "-2px" }}></div>
                    </div>
                </div>
                <div className={"card flex lg:flex-row flex-col items-center mb-24 justify-between lg:gap-60 gap-10"}>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"p-5 w-full"}>
                        <div className={"card-header flex gap-4 mb-6"}>
                            <div
                                className="text-16-24-400 bg-blue-950 text-white h-10 rounded-full w-10 flex justify-center items-center">01
                            </div>
                            <p className={'text-30-44-600 capitalize'}>Requirement Analysis</p>
                        </div>
                        <div className="card-body">
                        We start by understanding your business objectives, challenges, and the specific requirements of your logistics operations. This involves detailed discussions to gather all necessary information to tailor a solution that fits your needs.
                        </div>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"w-full"}>
                        <Image quality={1} layout={'fixed'} src={Img1} className={'w-100'} alt={'goals'}/>
                    </div>
                </div>

                <div className={"card flex lg:flex-row flex-col-reverse items-center mb-24 justify-between lg:gap-60 gap-10"}>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"w-full"}>
                        <Image src={Img2} className={'w-100'} alt={'ideation'}/>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"p-5 w-full"}>
                        <div className={"card-header flex gap-4 mb-6"}>
                            <div
                                className="text-16-24-400 bg-blue-950 text-white h-10 rounded-full w-10 flex justify-center items-center">02
                            </div>
                            <p className={'text-30-44-600 capitalize'}>Design and Prototyping</p>
                        </div>
                        <div className="card-body">
                        Based on the requirements analysis, our team designs a prototype of the software solution. This step allows us to visualize the end product and make adjustments based on your feedback, ensuring the final product aligns with your expectations.
                        </div>
                    </div>
                </div>

                <div className={"card flex lg:flex-row flex-col items-center mb-24 justify-between lg:gap-60 gap-10"}>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"p-5 w-full"}>
                        <div className={"card-header flex gap-4 mb-6"}>
                            <div
                                className="text-16-24-400 bg-blue-950 text-white h-10 rounded-full w-10 flex justify-center items-center">03
                            </div>
                            <p className={'text-30-44-600 capitalize'}>Development</p>
                        </div>
                        <div className="card-body">
                        With the design in place, our developers begin coding the software, building out the features and functionalities discussed during the analysis phase. We use agile methodologies to ensure flexibility and efficiency throughout the development process.
                        </div>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"w-full"}>
                        <Image src={Img3} className={'w-100'} alt={'ideation'}/>
                    </div>
                </div>

                <div className={"card flex lg:flex-row flex-col-reverse items-center mb-24 justify-between lg:gap-60 gap-10"}>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"w-full"}>
                        <Image src={Img4} className={'w-100'} alt={'ideation'}/>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"p-5 w-full"}>
                        <div className={"card-header flex gap-4 mb-6"}>
                            <div
                                className="text-16-24-400 bg-blue-950 text-white h-10 rounded-full w-10 flex justify-center items-center">04
                            </div>
                            <p className={'text-30-44-600 capitalize'}>Testing and Quality Assurance</p>
                        </div>
                        <div className="card-body">
                        After development, the software undergoes rigorous testing to identify and fix any bugs or issues. Our quality assurance team ensures that the software meets all specifications and performs reliably under various conditions.
                        </div>
                    </div>
                </div>

                <div className={"card flex lg:flex-row flex-col items-center mb-24 justify-between lg:gap-60 gap-10"}>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"p-5 w-full"}>
                        <div className={"card-header flex gap-4 mb-6"}>
                            <div
                                className="text-16-24-400 bg-blue-950 text-white h-10 rounded-full w-10 flex justify-center items-center">05
                            </div>
                            <p className={'text-30-44-600 capitalize'}>Deployment and Support</p>
                        </div>
                        <div className="card-body">
                        Once testing is complete and the software is approved, we proceed with deployment. We provide comprehensive support and training to ensure smooth integration into your operations. Post-deployment, we remain available for ongoing maintenance and updates to support your business&apos;s growth and evolving needs.
                        </div>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"w-full"}>
                        <Image src={Img5} className={'w-100'} alt={'goals'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default FourthSection;
