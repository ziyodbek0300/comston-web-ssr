import React, {useState} from 'react';
import Modal from 'react-modal';
import Img1 from "../public/project-page images/1.png";
import Img2 from "../public/project-page images/2.png";
import Img3 from "../public/project-page images/3.png";
import Img4 from "../public/project-page images/4.png";
import Img5 from "../public/project-page images/5.png";
import Img6 from "../public/project-page images/6.png";
import Img11 from "../public/slider/laundris/01.png";
import Img12 from "../public/slider/laundris/02.png";
import Img21 from "../public/slider/pride roofing/01.png";
import Img22 from "../public/slider/pride roofing/02.png";
import Img31 from "../public/slider/kardan trucking/01.png";
import Img32 from "../public/slider/kardan trucking/02.png";
import Img41 from "../public/slider/multistone masters/01.png";
import Img42 from "../public/slider/multistone masters/02.png";
import Img51 from "../public/slider/CBRE/01.png";
import Img52 from "../public/slider/CBRE/02.png";
import Img61 from "../public/slider/loopcv/01.png";
import Img62 from "../public/slider/loopcv/02.png";
import Image from "next/image";
import Button from "./button";
import ReactSimplyCarousel from 'react-simply-carousel';
import ArrowLeft from '../public/ep_arrow-right-1.svg';
import ArrowRight from '../public/ep_arrow-right.svg';

function ModalEx({isOpen, closeModal, ind}) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.20)', zIndex: '99'
        }, content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F8F9FC',
            border: '0 !important',
            borderRadius: '1rem',
            padding: "1rem",
        },
    };

    return (<div>
        <Modal
            isOpen={isOpen}
            onRequestClose={() => closeModal()}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {ind === 0 ? (<div>
                    <ReactSimplyCarousel
                        containerProps={{
                            style: {
                                width: "100%"
                            }
                        }}
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={3}
                        itemsToScroll={1}
                        forwardBtnProps={{
                            style: {
                                alignSelf: 'center',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                            },
                            children: <div className={"rounded-lg absolute right-7 lg:bottom-[155px] bottom-[80px] w-8 active:opacity-90"}>
                                <Image
                                    src={ArrowRight} className={"rounded-lg bg-zinc-900 opacity-80"} alt={"arrow right"}/>
                            </div>,
                        }}
                        backwardBtnProps={{
                            style: {
                                alignSelf: 'center',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                            },
                            children: <div
                                className={"rounded-lg absolute left-7 lg:bottom-[155px] bottom-[80px] w-8 z-50 active:opacity-90"}><Image
                                src={ArrowLeft} className={"rounded-lg bg-zinc-900 opacity-80 w-10"} alt={"arrow right"}/>
                            </div>,
                        }}
                        responsiveProps={[{
                            itemsToShow: 1, itemsToScroll: 1, minWidth: 768, // maxWidth: 1200,
                        },{
                            itemsToShow: 1, itemsToScroll: 1, maxWidth: 400, // maxWidth: 1200,
                        },]}
                        speed={400}
                        easing="linear"
                    >
                        <div className={"lg:w-[600px] w-[300px]"}>
                            <Image src={Img11} alt={"qwerty"}/>
                        </div>
                        <div className={"lg:w-[600px] w-[300px]"}>
                            <Image src={Img12} alt={"qwerty"}/>
                        </div>
                    </ReactSimplyCarousel>
                    <div className={"py-2"}>
                        <h1 className={"text-2xl font-bold"}></h1>
                        <p className={""}></p>
                        {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                    </div>
                </div>)
                : ind === 1 ? (<div>
                        <ReactSimplyCarousel
                            containerProps={{
                                style: {
                                    width: "100%"
                                }
                            }}
                            activeSlideIndex={activeSlideIndex}
                            onRequestChange={setActiveSlideIndex}
                            itemsToShow={3}
                            itemsToScroll={1}
                            forwardBtnProps={{
                                //here you can also pass className, or any other button element attributes
                                style: {
                                    alignSelf: 'center',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                    height: 30,
                                    lineHeight: 1,
                                    textAlign: 'center',
                                    width: 30,
                                },
                                children: <div
                                    className={"rounded-lg absolute right-7 lg:bottom-[155px] bottom-[80px] w-8 active:opacity-90"}>
                                    <Image
                                        src={ArrowRight} className={"rounded-lg bg-zinc-900 opacity-80"}
                                        alt={"arrow right"}/>
                                </div>,
                            }}
                            backwardBtnProps={{
                                //here you can also pass className, or any other button element attributes
                                style: {
                                    alignSelf: 'center',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                    height: 30,
                                    lineHeight: 1,
                                    textAlign: 'center',
                                    width: 30,
                                },
                                children: <div
                                    className={"rounded-lg absolute left-7 lg:bottom-[155px] bottom-[80px] w-8 z-50 active:opacity-90"}>
                                    <Image
                                        src={ArrowLeft} className={"rounded-lg bg-zinc-900 opacity-80 w-10"}
                                        alt={"arrow right"}/>
                                </div>,
                            }}
                            responsiveProps={[{
                                itemsToShow: 1, itemsToScroll: 1, minWidth: 768, // maxWidth: 1200,
                            },{
                                itemsToShow: 1, itemsToScroll: 1, maxWidth: 400, // maxWidth: 1200,
                            },]}
                            speed={400}
                            easing="linear"
                        >
                            <div className={"lg:w-[600px] w-[300px]"}>
                                <Image src={Img21} alt={"qwerty"}/>
                            </div>
                            <div className={"lg:w-[600px] w-[300px]"}>
                                <Image src={Img22} alt={"qwerty"}/>
                            </div>
                        </ReactSimplyCarousel>
                        <div className={"py-2"}>
                            <h1 className={"text-2xl font-bold"}></h1>
                            <p className={""}></p>
                            {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                        </div>
                    </div>)
                    : ind === 2 ? (<div>
                            <ReactSimplyCarousel
                                containerProps={{
                                    style: {
                                        width: "100%"
                                    }
                                }}
                                activeSlideIndex={activeSlideIndex}
                                onRequestChange={setActiveSlideIndex}
                                itemsToShow={3}
                                itemsToScroll={1}
                                forwardBtnProps={{
                                    //here you can also pass className, or any other button element attributes
                                    style: {
                                        alignSelf: 'center',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '20px',
                                        height: 30,
                                        lineHeight: 1,
                                        textAlign: 'center',
                                        width: 30,
                                    },
                                    children: <div
                                        className={"rounded-lg absolute right-7 lg:bottom-[155px] bottom-[80px] w-8 active:opacity-90"}>
                                        <Image
                                            src={ArrowRight} className={"rounded-lg bg-zinc-900 opacity-80"}
                                            alt={"arrow right"}/>
                                    </div>,
                                }}
                                backwardBtnProps={{
                                    //here you can also pass className, or any other button element attributes
                                    style: {
                                        alignSelf: 'center',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '20px',
                                        height: 30,
                                        lineHeight: 1,
                                        textAlign: 'center',
                                        width: 30,
                                    },
                                    children: <div
                                        className={"rounded-lg absolute left-7 lg:bottom-[155px] bottom-[80px] w-8 z-50 active:opacity-90"}>
                                        <Image
                                            src={ArrowLeft} className={"rounded-lg bg-zinc-900 opacity-80 w-10"}
                                            alt={"arrow right"}/>
                                    </div>,
                                }}
                                responsiveProps={[{
                                    itemsToShow: 1, itemsToScroll: 1, minWidth: 768, // maxWidth: 1200,
                                },{
                                    itemsToShow: 1, itemsToScroll: 1, maxWidth: 400, // maxWidth: 1200,
                                },]}
                                speed={400}
                                easing="linear"
                            >
                                <div className={"lg:w-[600px] w-[300px]"}>
                                    <Image src={Img31} alt={"qwerty"}/>
                                </div>
                                <div className={"lg:w-[600px] w-[300px]"}>
                                    <Image src={Img32} alt={"qwerty"}/>
                                </div>
                            </ReactSimplyCarousel>
                            <div className={"py-2"}>
                                <h1 className={"text-2xl font-bold"}></h1>
                                <p className={""}></p>
                                {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                            </div>
                        </div>)
                        : ind === 3 ? (<div>
                                <ReactSimplyCarousel
                                    containerProps={{
                                        style: {
                                            width: "100%"
                                        }
                                    }}
                                    activeSlideIndex={activeSlideIndex}
                                    onRequestChange={setActiveSlideIndex}
                                    itemsToShow={3}
                                    itemsToScroll={1}
                                    forwardBtnProps={{
                                        //here you can also pass className, or any other button element attributes
                                        style: {
                                            alignSelf: 'center',
                                            border: 'none',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                            height: 30,
                                            lineHeight: 1,
                                            textAlign: 'center',
                                            width: 30,
                                        },
                                        children: <div
                                            className={"rounded-lg absolute right-7 lg:bottom-[155px] bottom-[80px] w-8 active:opacity-90"}>
                                            <Image
                                                src={ArrowRight} className={"rounded-lg bg-zinc-900 opacity-80"}
                                                alt={"arrow right"}/>
                                        </div>,
                                    }}
                                    backwardBtnProps={{
                                        //here you can also pass className, or any other button element attributes
                                        style: {
                                            alignSelf: 'center',
                                            border: 'none',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                            height: 30,
                                            lineHeight: 1,
                                            textAlign: 'center',
                                            width: 30,
                                        },
                                        children: <div
                                            className={"rounded-lg absolute left-7 lg:bottom-[155px] bottom-[80px] w-8 z-50 active:opacity-90"}>
                                            <Image
                                                src={ArrowLeft} className={"rounded-lg bg-zinc-900 opacity-80 w-10"}
                                                alt={"arrow right"}/>
                                        </div>,
                                    }}
                                    responsiveProps={[{
                                        itemsToShow: 1, itemsToScroll: 1, minWidth: 768, // maxWidth: 1200,
                                    },{
                                        itemsToShow: 1, itemsToScroll: 1, maxWidth: 400, // maxWidth: 1200,
                                    },]}
                                    speed={400}
                                    easing="linear"
                                >
                                    <div className={"lg:w-[600px] w-[300px]"}>
                                        <Image src={Img41} alt={"qwerty"}/>
                                    </div>
                                    <div className={"lg:w-[600px] w-[300px]"}>
                                        <Image src={Img42} alt={"qwerty"}/>
                                    </div>
                                </ReactSimplyCarousel>
                                <div className={"py-2"}>
                                    <h1 className={"text-2xl font-bold"}></h1>
                                    <p className={""}></p>
                                    {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                                </div>
                            </div>)
                            : ind === 4 ? (<div>
                                    <ReactSimplyCarousel
                                        containerProps={{
                                            style: {
                                                width: "100%"
                                            }
                                        }}
                                        activeSlideIndex={activeSlideIndex}
                                        onRequestChange={setActiveSlideIndex}
                                        itemsToShow={3}
                                        itemsToScroll={1}
                                        forwardBtnProps={{
                                            //here you can also pass className, or any other button element attributes
                                            style: {
                                                alignSelf: 'center',
                                                border: 'none',
                                                color: 'white',
                                                cursor: 'pointer',
                                                fontSize: '20px',
                                                height: 30,
                                                lineHeight: 1,
                                                textAlign: 'center',
                                                width: 30,
                                            },
                                            children: <div
                                                className={"rounded-lg absolute right-7 lg:bottom-[155px] bottom-[80px] w-8 active:opacity-90"}>
                                                <Image
                                                    src={ArrowRight} className={"rounded-lg bg-zinc-900 opacity-80"}
                                                    alt={"arrow right"}/>
                                            </div>,
                                        }}
                                        backwardBtnProps={{
                                            //here you can also pass className, or any other button element attributes
                                            style: {
                                                alignSelf: 'center',
                                                border: 'none',
                                                color: 'white',
                                                cursor: 'pointer',
                                                fontSize: '20px',
                                                height: 30,
                                                lineHeight: 1,
                                                textAlign: 'center',
                                                width: 30,
                                            },
                                            children: <div
                                                className={"rounded-lg absolute left-7 lg:bottom-[155px] bottom-[80px] w-8 z-50 active:opacity-90"}>
                                                <Image
                                                    src={ArrowLeft} className={"rounded-lg bg-zinc-900 opacity-80 w-10"}
                                                    alt={"arrow right"}/>
                                            </div>,
                                        }}
                                        responsiveProps={[{
                                            itemsToShow: 1, itemsToScroll: 1, minWidth: 768, // maxWidth: 1200,
                                        },{
                                            itemsToShow: 1, itemsToScroll: 1, maxWidth: 400, // maxWidth: 1200,
                                        },]}
                                        speed={400}
                                        easing="linear"
                                    >
                                        <div className={"lg:w-[600px] w-[300px]"}>
                                            <Image src={Img51} alt={"qwerty"}/>
                                        </div>
                                        <div className={"lg:w-[600px] w-[300px]"}>
                                            <Image src={Img52} alt={"qwerty"}/>
                                        </div>
                                    </ReactSimplyCarousel>
                                    <div className={"py-2"}>
                                        <h1 className={"text-2xl font-bold"}></h1>
                                        <p className={""}></p>
                                        {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                                    </div>
                                </div>)
                                : (<div>
                                    <ReactSimplyCarousel
                                        containerProps={{
                                            style: {
                                                width: "100%"
                                            }
                                        }}
                                        activeSlideIndex={activeSlideIndex}
                                        onRequestChange={setActiveSlideIndex}
                                        itemsToShow={3}
                                        itemsToScroll={1}
                                        forwardBtnProps={{
                                            //here you can also pass className, or any other button element attributes
                                            style: {
                                                alignSelf: 'center',
                                                border: 'none',
                                                color: 'white',
                                                cursor: 'pointer',
                                                fontSize: '20px',
                                                height: 30,
                                                lineHeight: 1,
                                                textAlign: 'center',
                                                width: 30,
                                            },
                                            children: <div
                                                className={"rounded-lg absolute right-7 lg:bottom-[155px] bottom-[80px] w-8 active:opacity-90"}>
                                                <Image
                                                    src={ArrowRight} className={"rounded-lg bg-zinc-900 opacity-80"}
                                                    alt={"arrow right"}/>
                                            </div>,
                                        }}
                                        backwardBtnProps={{
                                            //here you can also pass className, or any other button element attributes
                                            style: {
                                                alignSelf: 'center',
                                                border: 'none',
                                                color: 'white',
                                                cursor: 'pointer',
                                                fontSize: '20px',
                                                height: 30,
                                                lineHeight: 1,
                                                textAlign: 'center',
                                                width: 30,
                                            },
                                            children: <div
                                                className={"rounded-lg absolute left-7 lg:bottom-[155px] bottom-[80px] w-8 z-50 active:opacity-90"}>
                                                <Image
                                                    src={ArrowLeft} className={"rounded-lg bg-zinc-900 opacity-80 w-10"}
                                                    alt={"arrow right"}/>
                                            </div>,
                                        }}
                                        responsiveProps={[{
                                            itemsToShow: 1, itemsToScroll: 1, minWidth: 768, // maxWidth: 1200,
                                        },{
                                            itemsToShow: 1, itemsToScroll: 1, maxWidth: 400, // maxWidth: 1200,
                                        },]}
                                        speed={400}
                                        easing="linear"
                                    >
                                        <div className={"lg:w-[600px] w-[300px]"}>
                                            <Image src={Img61} alt={"qwerty"}/>
                                        </div>
                                        <div className={"lg:w-[600px] w-[300px]"}>
                                            <Image src={Img62} alt={"qwerty"}/>
                                        </div>
                                    </ReactSimplyCarousel>
                                    <div className={"py-2"}>
                                        <h1 className={"text-2xl font-bold"}></h1>
                                        <p className={""}></p>
                                        {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                                    </div>
                                </div>)}
        </Modal>
    </div>);
}

export default ModalEx;
