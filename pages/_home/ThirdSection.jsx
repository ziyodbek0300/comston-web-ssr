import React from 'react';
import Computer from '../../public/computer.svg';
import Time from '../../public/time.svg';
import Hand from '../../public/hold.svg';
import Guaranteed from '../../public/success.svg';
import Button from "/components/button";
import Image from "next/image";

function ThirdSection() {
    return (<div className={"container second-section-home"} style={{padding: "100px 20px"}}>
        <div className={"md:pt-10"} style={{ width: '70%' }}>
            <h3 className={"text-30-44-700 capitalize mb-6"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                We've taken a <span className={"text-blue-550"}>founder-first</span> approach, building a program for
                entrepreneurs just like you
            </h3>
            <p className={"text-16-24-400 text-gray-450 mb-10"}>
                Most entrepreneurs can’t just quit everything to build a startup, and we believe you shouldn’t have to.
                Our program is designed for ambitious entrepreneurs who want to build an incredible business that
                disrupts the market without disrupting their life
            </p>
            <Button text={"View Portfolio"} classes={"bg-blue-950 hover:bg-blue-1000"} />
        </div>
        <div className={"w-full grid grid-cols-2 gap-7"}>
            <div className={"rounded-lg shadow-b p-6"}>
                <Image src={Computer} alt="computer" className={"mb-5"}/>
                <p className="card-title text-18-26-500 mb-2">Fully Remote</p>
                <p className="card-text text-16-24-400 text-gray-450">
                    No travel involved. Complete the program no matter where you are.
                </p>
            </div>
            <div className={"rounded-lg shadow-b p-6"}>
                <Image src={Time} alt="computer" className={"mb-5"}/>
                <p className="card-title text-18-26-500 mb-2">Part Time</p>
                <p className="card-text text-16-24-400 text-gray-450">
                    Most founders spend 5-7 hours/week while keeping full time jobs
                </p>
            </div>
            <div className={"rounded-lg shadow-b p-6"}>
                <Image src={Hand} alt="computer" className={"mb-5"}/>
                <p className="card-title text-18-26-500 mb-2">Equity-Free</p>
                <p className="card-text text-16-24-400 text-gray-450">
                    We use a co-investing model that ties us to your success without taking your hard earned ownership.
                </p>
            </div>
            <div className={"rounded-lg shadow-b p-6"}>
                <Image src={Guaranteed} alt="computer" className={"mb-5"}/>
                <p className="card-title text-18-26-500 mb-2">Guaranteed</p>
                <p className="card-text text-16-24-400 text-gray-450">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Because of our approach, we're able to guarantee our founders will raise funding through our program
                </p>
            </div>
        </div>
    </div>);
}

export default ThirdSection;
