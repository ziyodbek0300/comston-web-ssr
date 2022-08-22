import React from 'react'
import Image from "next/image";
import Human11 from '../../public/humans/Ellipse-1.png';
import Human22 from '../../public/humans/Ellipse.png';

export default function FifthSection() {
    return (<div className={"bg-blue-150 justify-center flex items-center mt-10"}>
        <div className={"container"}>
            <h2 className={"capitalize text-32-44-700 text-center mt-24"}>what our clients say</h2>
            <p className={"text-16-24-400 text-gray-450 text-center capitalize mb-12 mt-1"}>Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit <br/> officia consequat duis enim velit
                mollit.</p>
            <div className="client-cards flex gap-8 pb-14">
                <div className="card bg-white p-8 rounded-2xl">
                    <div className={"card-header flex mb-5 items-center gap-4"}>
                        <div className="for-img">
                            <Image src={Human22} alt={'Pamela_brown'}/>
                        </div>
                        <div className="for-text">
                            <span className='text-20-26-500'>Pamela Brown</span>
                            <p className='text-18-26-500 text-blue-550 mt-2'>CEO, Aura Health</p>
                        </div>
                    </div>
                    <div className={'card-body'}>
                        <p className={'text-16-24-400'}>“Aura used Comston to conduct rigorous A/B testing and
                            iterate rapidly in a period of high growth.Comston has been an integral part of Aura`s
                            growth to millions of users.”</p>
                    </div>
                </div>
                <div className="card bg-white p-8 rounded-2xl">
                    <div className={"card-header flex mb-5 items-center gap-4"}>
                        <div className="for-img">
                            <Image src={Human11} alt={'mayk_taylor'}/>
                        </div>
                        <div className="for-text">
                            <span className='text-20-26-500'>Mayk Taylor</span>
                            <p className='text-18-26-500 text-blue-550 mt-2'>CEO, Showcasing.io</p>
                        </div>
                    </div>
                    <div className={'card-body'}>
                        <p className={'text-16-24-400'}>`Comston` combination of prebuilt and custom options made it
                            a good fit that was in my price range, as opposed to more traditional custom development
                            shops.”</p>
                    </div>
                </div>
                <div className="card bg-white p-8 rounded-2xl">
                    <div className={"card-header flex mb-5 items-center gap-4"}>
                        <div className="for-img">
                            <Image src={Human22} alt={'Pamela_brown'}/>
                        </div>
                        <div className="for-text">
                            <span className='text-20-26-500'>Pamela Brown</span>
                            <p className='text-18-26-500 text-blue-550 mt-2'>CEO, Aura Health</p>
                        </div>
                    </div>
                    <div className={'card-body'}>
                        <p className={'text-16-24-400'}>“Aura used Comston to conduct rigorous A/B testing and
                            iterate rapidly in a period of high growth.Comston has been an integral part of Aura`s
                            growth to millions of users.”</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
