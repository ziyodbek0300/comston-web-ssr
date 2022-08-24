import React, {useEffect} from "react";
import Image from "next/image";
import Img1 from '../../public/blog/rectangle6.png';
import Img2 from "../../public/blog/rectangle.png";
import Img3 from '../../public/blog/rectangle2.png';
import Img4 from '../../public/blog/rectangle3.png';
import Img5 from '../../public/blog/rectangle4.png';
import Img6 from '../../public/blog/rectangle5.png';
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FirstSection() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.log("a")
    }, []);

    return (
        <>
            <Navbar/>

            <div className={"container"}>
                <div className={"py-24"}>
                    <div>
                        <h2 className={"capitalize text-30-44-600 text-center mb-6"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Ultrices quam facillisi
                            praesent
                            ipsum{" "}
                        </h2>
                        <p className={"text-16-24-400 text-gray-450 text-center  mb-14"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Ultrices quam facillisi praesent
                            ipsum,
                            urna, <br/> faucibus sed id dictumst. Cursus laoreet {" "}
                        </p>
                    </div>
                    <div className={"blog-cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7 gap-y-12"}>
                        <Link data-aos={"fade-up"} data-aos-duration={"800"} href={'/blog/1'}>
                            <div className={"card shadow-bl rounded-2xl"}>
                                <div className="card-header rounded-t-full w-full">
                                    <Image layout={"responsive"} src={Img1} alt={'card-manufacturing'}/>
                                </div>
                                <div className="card-body p-4">
                                    <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>manufacturing</p>
                                    <p className='text-20-26-500 mb-5 w-100'>New Siemens tech hub accelerates additive
                                        manufacturing</p>
                                </div>
                                <div className="card-footer p-4">
                                    <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                                </div>
                            </div>
                        </Link>
                        <div data-aos={"fade-up"} data-aos-duration={"800"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img2} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>manufacturing</p>
                                <p className='text-20-26-500 mb-5 w-100'>Siemens + Xerox: Boosting metal
                                    additive-manufacturing capabilities</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                        <div data-aos={"fade-up"} data-aos-duration={"800"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img3} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>manufacturing</p>
                                <p className='text-20-26-500 mb-5 w-100'>Siemens + Roboze: Accelerating the
                                    industrialization of 3D printing</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                        <div data-aos={"fade-up"} data-aos-duration={"1000"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img4} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>digital twin</p>
                                <p className='text-20-26-500 mb-5 w-100'>Siemens awarded $1.78M FDA contract for
                                    advancing
                                    digital design and manufacturing</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                        <div data-aos={"fade-up"} data-aos-duration={"1000"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img5} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>digital twin</p>
                                <p className='text-20-26-500 mb-5 w-100'>Rapid design iteration: Using Siemens software
                                    and
                                    digital twin to test concepts</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                        <div data-aos={"fade-up"} data-aos-duration={"1000"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img6} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>digital twin</p>
                                <p className='text-20-26-500 mb-5 w-100'>Siemens + Dow: Partnering to create a
                                    process-manufacturing digital twin testbed</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                        <div data-aos={"fade-up"} data-aos-duration={"1200"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img4} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>digital twin</p>
                                <p className='text-20-26-500 mb-5 w-100'>Siemens awarded $1.78M FDA contract for
                                    advancing
                                    digital design and manufacturing</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                        <div data-aos={"fade-up"} data-aos-duration={"1200"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img5} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>digital twin</p>
                                <p className='text-20-26-500 mb-5 w-100'>Rapid design iteration: Using Siemens software
                                    and
                                    digital twin to test concepts</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                        <div data-aos={"fade-up"} data-aos-duration={"1200"} className={"card shadow-bl rounded-2xl"}>
                            <div className="card-header rounded-t-full">
                                <Image layout={"responsive"} src={Img6} className={"w-full"} alt={'card-manufacturing'}/>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-16-19-600 text-blue-550 pb-5 pt-3 uppercase'>digital twin</p>
                                <p className='text-20-26-500 mb-5 w-100'>Siemens + Dow: Partnering to create a
                                    process-manufacturing digital twin testbed</p>
                            </div>
                            <div className="card-footer p-4">
                                <p className={"text-16-24-400 text-gray-450"}>3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
