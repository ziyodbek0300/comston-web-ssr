import React from 'react';
import Image from "next/image";

import Img1 from '../../public/web-development-images/img1.svg';
import Img2 from '../../public/web-development-images/img3.svg';
import Img3 from '../../public/web-development-images/img2.svg';
import Img4 from '../../public/web-development-images/img4.svg';
import Img5 from '../../public/web-development-images/img5.svg';


function FourthSection() {
    return (
        <div className={'development-fourthSection'}>
            <div className={' container'}>
                <h2 className={"capitalize text-32-44-700 text-center my-24"}>Our website <span
                    className={"text-blue-550"}>Design & development</span>  Process</h2>
                <div className="flex justify-center items-center container">
                    <div className={'cards-section pb-10'}>

                        <div className={"card flex items-center justify-center"}>
                            <div>
                                <div className={"card-header flex pb-4"}>
                                    <div className="circle-div flex justify-center items-center">
                                        <span>01</span>
                                    </div>
                                    <p className={'text-30-44-600 capitalize'}>your goals</p>
                                </div>
                                <div className="card-body">
                                    Because your website is unique, we take the time to learn about the objectives you want to achieve. We research your needs, brand, and corporate identity before deciding on the best strategy for online success.
                                </div>
                            </div>
                        </div>

                        <div className="card flex items-center justify-center">
                            <Image src={Img1} className={'w-100'} alt={'goals'} />
                        </div>


                        <div className="card flex items-center ">
                            <Image src={Img2} className={'w-100'} alt={'ideation'} />
                        </div>

                        <div className={"card flex items-center "}>
                            <div>
                                <div className={"card-header flex pb-4"}>
                                    <div className="circle-div flex justify-center items-center">
                                        <span>02</span>
                                    </div>
                                    <p className={'text-30-44-600 capitalize'}>Ideation</p>
                                </div>
                                <div className="card-body">
                                    After we've done our research, our professional website designers will sketch up the fundamental design concepts. These designs are just blueprints or mockups that serve as a starting point for building great online experiences that will convey and connect your business with your customers.
                                </div>
                            </div>
                        </div>

                        <div className={"card flex items-center "}>
                            <div>
                                <div className={"card-header flex pb-4"}>
                                    <div className="circle-div flex justify-center items-center">
                                        <span>03</span>
                                    </div>
                                    <p className={'text-30-44-600 capitalize'}>Design</p>
                                </div>
                                <div className="card-body">
                                    Our lead web designers will then work on transforming your blueprints into completed design layouts once the basic version has been developed. If you are unable to supply specific content, we will complete the layout using dummy content while our content team works on producing top quality content for your website.
                                </div>
                            </div>
                        </div>

                        <div className="card flex items-center ">
                            <Image src={Img3} className={'w-100'} alt={'ideation'} />
                        </div>
                        <div className="card flex items-center ">
                            <Image src={Img4} className={'w-100'} alt={'ideation'} />
                        </div>
                        <div className={"card flex items-center "}>
                            <div>
                                <div className={"card-header flex pb-4"}>
                                    <div className="circle-div flex justify-center items-center">
                                        <span>04</span>
                                    </div>
                                    <p className={'text-30-44-600 capitalize'}>Development</p>
                                </div>
                                <div className="card-body">
                                    After the design work is complete and you approve a final mockup, we send it off to our website development team to turn your vision into reality. Our web development team will work on building a gorgeous website while focusing on usability and responsive web design.
                                </div>
                            </div>
                        </div>

                        <div className={"card flex items-center "}>
                            <div>
                                <div className={"card-header flex pb-4"}>
                                    <div className="circle-div flex justify-center items-center">
                                        <span>05</span>
                                    </div>
                                    <p className={'text-30-44-600 capitalize'}>Launch</p>
                                </div>
                                <div className="card-body">
                                    After you are completely satisfied with all aspects of your website, our team will set your new website live for the world to see! We will continue to monitor your site post-launch to ensure all is working as it should be & handover the project to you after the official closure
                                </div>
                            </div>
                        </div>
                        <div className="card flex items-center ">
                            <Image src={Img5} className={'w-100'} alt={'ideation'} />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default FourthSection;