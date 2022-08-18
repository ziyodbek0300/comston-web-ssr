import React from 'react';
import Image from "next/image";
import Human11 from '../../public/humans/Ellipse-1.png';
import Human22 from '../../public/humans/Ellipse.png';
import Human33 from '../../public/humans/avatar.png';

function Ten() {
    return (
        <div className={"container"}>
            <div className={"py-20"}>
                <h2 className={"capitalize text-center text-40-56-700 mb-12"}>Meet a few of our <span
                    className={"text-blue-550"}>happy clients</span></h2>
                <div className={'flex gap-5'}>
                    <div className="shadow-card py-10 px-7 rounded-2xl text-center w-full hover:bg-blue-550">
                        <div className={"mb-9"}>
                            <Image src={Human22} alt={"human1"}/>
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={"text-20-26-500 mb-5"}>“Comston has been an integral part of Aura's growth to
                            millions of users.”</p>
                        <p className={"text-18-26-500 mb-9 text-blue-550"}>Co-founder / CEO, Aura Health</p>
                        <p className={"text-16-24-400"}>Aura used Comston to conduct rigorous A/B testing and iterate
                            rapidly in a period of high growth.</p>
                    </div>
                    <div className="shadow-card py-10 px-7 rounded-2xl text-center w-full hover:bg-blue-550">
                        <div className={"mb-9"}>
                            <Image src={Human33} alt={"human1"}/>
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={"text-20-26-500 mb-5"}>“Comston has been an integral part of Aura's growth to
                            millions of users.”</p>
                        <p className={"text-18-26-500 mb-9 text-blue-550"}>Co-founder / CEO, Aura Health</p>
                        <p className={"text-16-24-400"}>Aura used Comston to conduct rigorous A/B testing and iterate
                            rapidly in a period of high growth.</p>
                    </div>
                    <div className="shadow-card py-10 px-7 rounded-2xl text-center w-full hover:bg-blue-550">
                        <div className={"mb-9"}>
                            <Image src={Human11} alt={"human1"}/>
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={"text-20-26-500 mb-5"}>"Comston" combination of prebuilt and custom options made it a good fit that was in my price range, as opposed to more traditional custom development shops.”</p>
                        <p className={"text-18-26-500 mb-9 text-blue-550"}>Co-founder / CEO, Aura Health</p>
                        <p className={"text-16-24-400"}>Aura used Comston to conduct rigorous A/B testing and iterate
                            rapidly in a period of high growth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ten;