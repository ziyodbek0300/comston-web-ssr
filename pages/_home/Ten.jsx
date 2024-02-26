import React from 'react';
import Image from "next/image";
import Human11 from '../../public/humans/Ellipse-1.png';
import Human22 from '../../public/humans/Ellipse.png';
import Human33 from '../../public/humans/avatar.png';

function Ten() {
    return (<div className={"my-10 container overflow-auto"}>
        <div className={"py-10 overflow-hidden"}>
            <h2 className={"capitalize text-center text-40-56-700 mb-12"}>Meet a few of our <span
                className={"text-blue-550"}>happy clients</span></h2>
            <div className={"min-w-max"}>
                <div className={'grid grid-cols-3 gap-5'}>
                    <div data-aos={"fade-up"} data-aos-duration={"800"} className={"w-80"}>
                        <div className="shadow-card py-10 px-7 h-full rounded-2xl text-center hover:bg-blue-550">
                            <div className={"mb-9"}>
                                <Image src={Human22} alt={"human1"}/>
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className={"text-20-26-500 mb-5"}>"Partnering with Comston transformed our operations from the ground up. Their innovative solutions, especially in AI implementation, not only streamlined our logistics processes but also significantly enhanced our efficiency and customer satisfaction."</p>
                            <p className={"text-18-26-500 mb-9 text-blue-550"}>CEO, Global Shipping Co.</p>
                            <p className={"text-16-24-400"}>Global Shipping Co. benefited Comston&apos;s Custom Software Solutions services</p>
                        </div>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"1000"} className={"w-80"}>
                        <div className="shadow-card py-10 px-7 h-full rounded-2xl text-center hover:bg-blue-550">
                            <div className={"mb-9"}>
                                <Image src={Human33} alt={"human1"}/>
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className={"text-20-26-500 mb-5"}>"Struggling with sales, we turned to Comston for help. Their expertise led us to secure long-term contracts, transforming our sales strategy and business outlook. Highly recommend for any logistics firm facing similar challenges."</p>
                            <p className={"text-18-26-500 mb-9 text-blue-550"}>Operations Manager, Kardan</p>
                            <p className={"text-16-24-400"}>Brokerage and Contract Assistance Service was provided to Kardan.</p>
                        </div>
                    </div>
                    <div data-aos={"fade-up"} data-aos-duration={"1200"} className={"w-80"}>
                        <div className="shadow-card py-10 px-7 h-full rounded-2xl text-center hover:bg-blue-550">
                            <div className={"mb-9"}>
                                <Image src={Human11} alt={"human1"}/>
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className={"text-20-26-500 mb-5"}>"Working with Comston has been a game-changer for our warehouse operations. The team is knowledgeable, responsive, and truly understands the logistics industry's nuances."</p>
                            <p className={"text-18-26-500 mb-9 text-blue-550"}>COO, Warehouse Excel Inc</p>
                            <p className={"text-16-24-400"}>All in one service: from launch to getting contracts stage advisory was provided to Warehouse Excel Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Ten;
