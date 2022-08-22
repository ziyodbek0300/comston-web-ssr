import React from 'react';
import Image from "next/image";
import Right from "../../public/right.svg";

// import Button from "../../components/button";

function FifthSection() {
    return (<div className={"container text-center overflow-hidden"} style={{padding: "100px 20px"}}>
        <h2 className={"capitalize text-40-56-700"}>We can guarantee <span
            className={"text-blue-550"}>success</span> because we spent 7+ years finding a repeatable <span
            className={"text-blue-550"}>startup formula</span></h2>
        <div style={{width: "318px"}} className={"mx-auto rounded-100 p-1 shadow-s mb-14 mt-10 flex switcher gap-1"}>
            <div className={"switcher-item p-2 text-white bg-blue-550 px-3 rounded-100 cursor-pointer text-20-30-500"}
                 style={{width: "48%"}}>Start-Ups
            </div>
            <div
                className={"switcher-item w-3/5 p-2 rounded-100 flex items-center justify-center gap-3 cursor-pointer text-20-30-500"}>Enterprise <Image
                src={Right} alt={"right"}/></div>
        </div>
        <div className={"lg:flex hidden flex-col"}>
            <div className={"flex text-left"}>
                <div className={"w-full px-5 flex items-end"}>
                    <p className={"text-24-30-700 mb-5 uppercase mx-3"}>Week 1</p>
                </div>
                <div className={"w-full px-5"}>
                    <p className={"text-20-24-700 mb-3"}>Research + Proposal</p>
                    <p className={"text-16-24-400 mb-16"}>
                        Research and document industry leading practice and approach for proposal delivery
                    </p>
                </div>
                <div className={"w-full px-5 flex items-end"}>
                    <p className={"text-24-30-700 mb-5 uppercase mx-3"}>Week 3 and 4</p>
                </div>
                <div className={"w-full px-5"}>
                    <p className={"text-20-24-700 mb-3"}>Development + Testing</p>
                    <p className={"text-16-24-400 mb-16"}>
                        Typical Development process takes 2-3 months with 1 month of testing depending on the scale of
                        the project
                    </p>
                </div>
                <div className={"w-full px-5 flex items-end"}>
                    <p className={"text-24-30-700 mb-5 uppercase mx-3"}>1 MONTH</p>
                </div>
            </div>
            <div className={"flex text-left"}>
                <div className={"w-full relative p-5"}>
                    {/*<div>01</div>*/}
                    <div className={"w-full h-5 rounded-l-xl left-0 top-0 absolute bg-purple-450 shadow-g"}></div>
                    <div className={"h-64 bg-gray-450 absolute left-0 -top-6"} style={{width: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-8 -left-5"}>01
                            </div>
                        </div>
                    </div>
                    <p className={"text-20-24-700 mt-14 mb-3"}>Ideas + Discovery</p>
                    <p className={"text-16-24-400"}>
                        Discuss and discover what you would like to accomplish through application development
                    </p>
                </div>
                <div className={"w-full relative p-5"}>
                    {/*<div>02</div>*/}
                    <p className={"text-24-30-700 mb-5 uppercase mt-6 mx-3"}>Week 2</p>
                    <div className={"w-full h-5 bg-red-350 left-0 top-0 absolute bg-red-350 shadow-g"}></div>
                    <div className={"h-64 bg-gray-450 absolute left-0"} style={{width: '1px', top: "-197px"}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -bottom-5 -left-5"}>02
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full relative p-5"}>
                    {/*<div>03</div>*/}
                    <div className={"w-full h-5 bg-green-350 left-0 top-0 absolute bg-green-350 shadow-g"}></div>
                    <div className={"h-64 bg-gray-450 absolute left-0 -top-6"} style={{width: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-8 -left-5"}>03
                            </div>
                        </div>
                    </div>
                    <p className={"text-20-24-700 mt-14 mb-3"}>Proof by UI/UX Prototype</p>
                    <p className={"text-16-24-400"}>
                        Prototype Development including the initial feature set from first 2 weeks of Discovery and
                        Research
                    </p>
                </div>
                <div className={"w-full relative p-5"}>
                    {/*<div>02</div>*/}
                    <p className={"text-24-30-700 mb-5 uppercase mt-6 mx-3"}>2-3 months</p>
                    <div className={"w-full h-5 bg-blue-350 left-0 top-0 absolute bg-blue-550 shadow-g"}></div>
                    <div className={"h-64 bg-gray-450 absolute left-0"} style={{width: '1px', top: "-197px"}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -bottom-5 -left-5"}>04
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full relative p-5"}>
                    {/*<div>02</div>*/}
                    <div
                        className={"w-full h-5 bg-green-650 rounded-r-xl left-0 top-0 absolute bg-green-550 shadow-g"}></div>
                    <div className={"h-64 bg-gray-450 absolute left-0 -top-6"} style={{width: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-8 -left-5"}>05
                            </div>
                        </div>
                    </div>
                    <p className={"text-20-24-700 mt-14 mb-3"}>Marketing Consultation</p>
                    <p className={"text-16-24-400"}>
                        Discounted professional marketing consultation from our expert partners
                    </p>
                </div>
            </div>
        </div>
        <div className={"lg:hidden"}>
            <div className={"flex relative"}>
                <div className={"absolute flex w-full items-center -top-4 -left-24"}>
                    <div className={"w-full px-5 flex items-end"}>
                        <p className={"text-24-30-700 uppercase ml-auto"}>Week 1</p>
                    </div>
                    <div className={"w-full bg-gray-450"} style={{height: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-5 -left-0"}>01
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full"}></div>
                <div className={"w-full relative pl-10 py-10"}>
                    {/*<div>01</div>*/}
                    <div className={"h-full w-5 rounded-t-xl left-0 top-0 absolute bg-purple-450 shadow-g"}></div>
                    <p className={"text-20-24-700 mb-3 text-left"}>Ideas + Discovery</p>
                    <p className={"text-16-24-400 mb-10 text-left"}>
                        Discuss and discover what you would like to accomplish through application development
                    </p>
                </div>
            </div>
            <div className={"flex relative"}>
                <div className={"absolute flex w-full items-center -top-4 -right-24"}>
                    <div className={"w-full bg-gray-450"} style={{height: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-5 right-0"}>01
                            </div>
                        </div>
                    </div>
                    <div className={"w-full px-5 flex items-center"}>
                        <p className={"text-24-30-700 uppercase"}>Week 1</p>
                    </div>
                </div>
                <div className={"w-full relative text-right py-10 pr-10"}>
                    {/*<div>01</div>*/}
                    <div className={"h-full w-5 right-0 top-0 absolute bg-red-350 shadow-g"}></div>
                    <p className={"text-20-24-700 mb-3"}>Research + Proposal</p>
                    <p className={"text-16-24-400 mb-10"}>
                        Research and document industry leading practice and approach for proposal delivery
                    </p>
                </div>
                <div className={"w-full"}></div>
            </div>
            <div className={"flex relative"}>
                <div className={"absolute flex w-full items-center -top-4 -left-24"}>
                    <div className={"w-full px-5 flex items-end"}>
                        <p className={"text-24-30-700 uppercase ml-auto"}>Week 1</p>
                    </div>
                    <div className={"w-full bg-gray-450"} style={{height: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-5 -left-0"}>01
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full"}></div>
                <div className={"w-full relative py-10 pl-10 text-left"}>
                    {/*<div>01</div>*/}
                    <div className={"h-full w-5 left-0 top-0 absolute bg-green-350 shadow-g"}></div>
                    <p className={"text-20-24-700 mb-3"}>Development + Testing</p>
                    <p className={"text-16-24-400 mb-10"}>
                        Typical Development process takes 2-3 months with 1 month of testing depending on the scale of
                        the project
                    </p>
                </div>
            </div>
            <div className={"flex relative"}>
                <div className={"absolute flex w-full items-center -top-4 -right-24"}>
                    <div className={"w-full bg-gray-450"} style={{height: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-5 right-0"}>01
                            </div>
                        </div>
                    </div>
                    <div className={"w-full px-5 flex items-center"}>
                        <p className={"text-24-30-700 uppercase"}>Week 1</p>
                    </div>
                </div>
                <div className={"w-full relative py-10 pr-10 text-right"}>
                    {/*<div>01</div>*/}
                    <div className={"h-full w-5 right-0 top-0 absolute bg-blue-550 shadow-g"}></div>
                    <p className={"text-20-24-700 mb-3"}>Proof by UI/UX Prototype</p>
                    <p className={"text-16-24-400 mb-10"}>
                        Prototype Development including the initial feature set from first 2 weeks of Discovery and
                        Research
                    </p>
                </div>
                <div className={"w-full"}></div>
            </div>
            <div className={"flex relative"}>
                <div className={"absolute flex w-full items-center -top-4 -left-24"}>
                    <div className={"w-full px-5 flex items-end"}>
                        <p className={"text-24-30-700 uppercase ml-auto"}>Week 1</p>
                    </div>
                    <div className={"w-full bg-gray-450"} style={{height: '1px'}}>
                        <div className={"relative h-full w-full"}>
                            <div
                                className={"bg-blue-950 text-white absolute rounded-full h-10 w-10 flex items-center justify-center text-16-24-400 -top-5 -left-0"}>01
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full"}></div>
                <div className={"w-full relative py-10 pl-10 text-left"}>
                    {/*<div>01</div>*/}
                    <div className={"h-full w-5 rounded-b-xl left-0 top-0 absolute bg-green-550 shadow-g"}></div>
                    <p className={"text-20-24-700 mb-3"}>Marketing Consultation</p>
                    <p className={"text-16-24-400 mb-10"}>
                        Discounted professional marketing consultation from our expert partners
                    </p>
                </div>
            </div>
        </div>
    </div>);
}

export default FifthSection;
