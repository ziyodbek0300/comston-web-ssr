import React from 'react';
import Image from "next/image";
import Computer from "../../public/icons/Abstract/Vector.svg";
import Time from "../../public/icons/Edit/Vector.svg";
import Hand from "../../public/icons/Edit/Vector-1.svg";
import Guaranteed from "../../public/icons/Office/Vector.svg";
import Button from "../../components/button";

function Fourteen() {
    return (
        <div className={"container"}>
            <div className={"py-12"}>
                <div className={"flex gap-10"}>
                    <div style={{width: '55%'}}>
                        <h2 className={"text-40-56-700 capitalize mb-5"}>Discuss <span
                            className={"text-blue-550"}>your idea</span> with our IT consultants now!</h2>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={"text-16-24-400 mb-12"}>We helped business owners and start-ups to get ahead of
                            competition.Fill
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            out the form and we'll send you a few times to chat.</p>
                        <div className={"w-full grid grid-cols-2 gap-14"}>
                            <div className={"rounded-lg pb-6"}>
                                <div className={"mb-5"}>
                                    <Image src={Computer} alt="computer" className={"mb-5"}/>
                                </div>
                                <p className="card-title text-18-26-500 mb-2">Consultancy & Research</p>
                                <p className="card-text text-16-24-400 text-gray-450">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Our consulting team will reach out to schedule a brief scoping call to understand
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    exactly what you're building
                                </p>
                            </div>
                            <div className={"rounded-lg pb-6"}>
                                <div className="mb-5">
                                    <Image src={Guaranteed} alt="computer" className={"mb-5"}/>
                                </div>
                                <p className="card-title text-18-26-500 mb-2">Plan</p>
                                <p className="card-text text-16-24-400 text-gray-450">
                                    Once we clearly understand your build plan, we’ll send you a detailed proposal
                                    explaining the full scope of work to be delivered.
                                </p>
                            </div>
                            <div className={"rounded-lg pb-6"}>
                                <div className="mb-5">
                                    <Image src={Time} alt="computer" className={"mb-5"}/>
                                </div>
                                <p className="card-title text-18-26-500 mb-2">Development</p>
                                <p className="card-text text-16-24-400 text-gray-450">
                                    Once you approve our proposal, we will assign a product manager and team of
                                    developers who will work with you every step of the way.
                                </p>
                            </div>
                            <div className={"rounded-lg pb-6"}>
                                <div className="mb-5">
                                    <Image src={Hand} alt="computer" className={"mb-5"}/>
                                </div>
                                <p className="card-title text-18-26-500 mb-2">Check-ins</p>
                                <p className="card-text text-16-24-400 text-gray-450">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    You’ll enjoy daily and weekly check-ins until your app is live, and ongoing support
                                    and iteration from there
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '45%'}}>
                        <form className={"p-10 shadow-a rounded-2xl"}>
                            <div className={"mb-4"}>
                                <label className={"text-16-20-500"} htmlFor="name">Your Name</label>
                                <input type="text" id={"name"} placeholder={"John Smith"}
                                       className={"bg-gray-350 mt-2 p-3 text-16-24-400 rounded outline-blue-550 w-full"}/>
                            </div>
                            <div className={"mb-4"}>
                                <label className={"text-16-20-500"} htmlFor="email">Your Email</label>
                                <input type="text" id={"email"} placeholder={"johnsmith@example.com"}
                                       className={"bg-gray-350 mt-2 p-3 text-16-24-400 rounded outline-blue-550 w-full"}/>
                            </div>
                            <div className={"mb-4"}>
                                <label className={"text-16-20-500"} htmlFor="phone">Your Phone</label>
                                <input type="text" id={"phone"} placeholder={"+1 (999) 999-9999"}
                                       className={"bg-gray-350 mt-2 p-3 text-16-24-400 rounded outline-blue-550 w-full"}/>
                            </div>
                            <div className={"mb-4"}>
                                <label className={"text-16-20-500"} htmlFor="name">Describe Your Project</label>
                                <textarea className={"bg-gray-350 mt-2 p-3 text-16-24-400 rounded outline-blue-550 w-full"}
                                          name="description" id="description" cols="30" rows="10"></textarea>
                            </div>
                            <div className={"mb-4"}>
                                <input type="checkbox" id={"isProtected"} className={"border border-blue-550"}/>
                                <label className={"ml-3 text-16-20-500"} htmlFor="isProtected">Protect my project idea</label>
                            </div>
                            <div className="mb-4">
                                <Button classes={"bg-blue-550 w-full"} text={"Submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fourteen;
