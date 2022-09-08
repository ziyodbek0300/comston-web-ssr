import React, {useEffect} from "react";
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

export default function FirstSection() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.log("a")
    }, []);

    return (<div>
        <Navbar/>
        <div className={"py-12 mb-10"}>
            <h2 className={"text-30-44-700 text-center capitalize pt-7 "}>
                We`ve taken a founder-first approach, building a <br/> program for
                entrepreneurs just like you
            </h2>
            <p className={"text-16-24-400 text-center text-gray-450 pt-6 pb-9"}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ultrices quam
                facilisi praesent ipsum, urna, <br/> faucibus sed id dictumst. Cursus
                laoreet
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 container">
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative">
                    <Image layout="responsive" src={Img1} alt={"human 1"}/>
                    <div className={"flex h-full w-full flex justify-center items-center absolute z-50"}>
                        <h1 className={"text-white"}>Some Text</h1>
                    </div>
                    <div
                        className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative">
                    <Image layout="responsive" src={Img2} alt={"human 1"}/>
                    <div className={"flex h-full w-full flex justify-center items-center absolute z-50"}>
                        <h1 className={"text-white"}>Some Text</h1>
                    </div>
                    <div
                        className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative">
                    <Image layout="responsive" src={Img3} alt={"human 1"}/>
                    <div className={"flex h-full w-full flex justify-center items-center absolute z-50"}>
                        <h1 className={"text-white"}>Some Text</h1>
                    </div>
                    <div
                        className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative">
                    <Image layout="responsive" src={Img4} alt={"human 1"}/>
                    <div className={"flex h-full w-full flex justify-center items-center absolute z-50"}>
                        <h1 className={"text-white"}>Some Text</h1>
                    </div>
                    <div
                        className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative">
                    <Image layout="responsive" src={Img5} alt={"human 1"}/>
                    <div className={"flex h-full w-full flex justify-center items-center absolute z-50"}>
                        <h1 className={"text-white"}>Some Text</h1>
                    </div>
                    <div
                        className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
                    </div>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"} className="relative">
                    <Image layout="responsive" src={Img6} alt={"human 1"}/>
                    <div className={"flex h-full w-full flex justify-center items-center absolute z-50"}>
                        <h1 className={"text-white"}>Some Text</h1>
                    </div>
                    <div
                        className="absolute rounded-lg flex justify-center items-center text-white h-full w-full top-0 left-0 bg-zinc-900 opacity-50  ">
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
