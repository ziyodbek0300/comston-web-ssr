import React, {useEffect, useState} from "react";
import Image from "next/image";
import Img1 from "../../public/project-page images/1.png";
import Img2 from "../../public/project-page images/2.png";
import Img3 from "../../public/project-page images/3.png";
import Img4 from "../../public/project-page images/4.png";
import Img5 from "../../public/project-page images/5.png";
import Img6 from "../../public/project-page images/6.png";
import Navbar from "../../components/navbar";
import Forteen from "../_home/Forteen";
import Footer from "../../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalEx from "../../components/ModalEx";
import Script from "next/script";

export default function FirstSection() {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.log("a")
    }, []);

    const openModal = (ind) => {
        setModal(true);
        setIndex(ind);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (<div>
        <Navbar/>
        <ModalEx isOpen={modal} closeModal={closeModal} ind={index} />
        <div className={"py-12 mb-10"}>
            <h2 className={"text-30-44-700 text-center capitalize pt-7 "}>
                We`ve taken a founder-first approach, building a <br/> program for
                entrepreneurs just like you
            </h2>
            <p className={"text-16-24-400 text-center text-gray-450 pt-6 pb-9"}>
                Take a look at some of the companies we’ve helped to scale and excel in their industries
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 container">
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative hoverable rounded-xl overflow-hidden" onClick={() => openModal(0)}>
                    <Image layout="responsive" className={"hoverable-image"} src={Img1} alt={"human 1"}/>
                    <div className={"opacity-0 transition hover:opacity-100"}>
                        <div className={"flex h-full w-full flex justify-center items-center absolute z-50 top-0 left-0"}>
                            <h1 className={"text-white"}>Web & Desktop Software for Laundris</h1>

                        </div>
                        <div
                            className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50 z-40">
                                 
                        </div>
                        
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative hoverable rounded-xl overflow-hidden" onClick={() => openModal(1)}>
                    <Image layout="responsive" className={"hoverable-image"} src={Img2} alt={"human 1"}/>
                    <div className={"opacity-0 transition hover:opacity-100"}>
                        <div
                            className={"flex h-full w-full flex justify-center items-center absolute z-50 top-0 left-0"}>
                            <h1 className={"text-white"}>Web and Mobile Management Software for Pride Roofing</h1>
                        </div>
                        <div
                            className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                        </div>
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative hoverable rounded-xl overflow-hidden" onClick={() => openModal(2)}>
                    <Image layout="responsive" className={"hoverable-image"} src={Img3} alt={"human 1"}/>
                    <div className={"opacity-0 transition hover:opacity-100"}>
                        <div
                            className={"flex h-full w-full flex justify-center items-center absolute z-50 top-0 left-0"}>
                            <h1 className={"text-white"}>TMS & Landing Website for Kardan Trucking</h1>
                        </div>
                        <div
                            className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                        </div>
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative hoverable rounded-xl overflow-hidden" onClick={() => openModal(3)}>
                    <Image layout="responsive" className={"hoverable-image"} src={Img4} alt={"human 1"}/>
                    <div className={"opacity-0 transition hover:opacity-100"}>
                        <div
                            className={"flex h-full w-full flex justify-center items-center absolute z-50 top-0 left-0"}>
                            <h1 className={"text-white"}>Landing Website for Multi Stone Masters</h1>
                        </div>
                        <div
                            className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                        </div>
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative hoverable rounded-xl overflow-hidden" onClick={() => openModal(4)}>
                    <Image layout="responsive" className={"hoverable-image"} src={Img5} alt={"human 1"}/>
                    <div className={"opacity-0 transition hover:opacity-100"}>
                        <div
                            className={"flex h-full w-full flex justify-center items-center absolute z-50 top-0 left-0"}>
                            <h1 className={"text-white"}>UI/UX Design for CBRE</h1>
                        </div>
                        <div
                            className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                        </div>
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative hoverable rounded-xl overflow-hidden" onClick={() => openModal(5)}>
                    <Image layout="responsive" className={"hoverable-image"} src={Img6} alt={"human 1"}/>
                    <div className={"opacity-0 transition hover:opacity-100"}>
                        <div
                            className={"flex h-full w-full flex justify-center items-center absolute z-50 top-0 left-0"}>
                            <h1 className={"text-white"}>Automation software for LoopCV</h1>
                        </div>
                        <div
                            className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-14">
            <Forteen/>
        </div>
        <Footer/>
    </div>);
}
