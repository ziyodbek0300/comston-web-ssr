import React, {useState} from 'react';
import Modal from 'react-modal';
import Img1 from "../public/project-page images/1.png";
import Img2 from "../public/project-page images/2.png";
import Img3 from "../public/project-page images/3.png";
import Img4 from "../public/project-page images/4.png";
import Img5 from "../public/project-page images/5.png";
import Img6 from "../public/project-page images/6.png";
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
            // onAfterOpen={afterOpenModal}
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
                        }, children: <div className={"absolute right-7 bottom-[140px] active:opacity-50"}><Image
                            src={ArrowRight} className={"bg-zinc-900 opacity-50"} alt={"arrow right"}/></div>,
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
                        }, children: <div className={"absolute left-7 bottom-[140px] z-50 active:opacity-50"}><Image
                            src={ArrowLeft} className={"bg-zinc-900 opacity-50"} alt={"arrow right"}/></div>,
                    }}
                    responsiveProps={[{
                        itemsToShow: 1, itemsToScroll: 1, minWidth: 768, // maxWidth: 1200,
                    },]}
                    speed={400}
                    easing="linear"
                >
                    <div style={{width: 400}}>
                        <Image layout={"responsive"} src={Img1} alt={"qwerty"}/>
                    </div>
                    <div style={{width: 400}}>
                        <Image layout={"responsive"} src={Img1} alt={"qwerty"}/>
                    </div>
                    <div style={{width: 400}}>
                        <Image layout={"responsive"} src={Img1} alt={"qwerty"}/>
                    </div>
                </ReactSimplyCarousel>
                <div className={"py-2"}>
                    <h1 className={"text-2xl font-bold"}></h1>
                    <p className={""}></p>
                    {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                </div>
            </div>) : ind === 1 ? (<div>
                <Image src={Img2} alt={"qwerty"}/>
                <div className={"py-2"}>
                    <h1 className={"text-2xl font-bold"}></h1>
                    <p className={""}></p>
                    {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                </div>
            </div>) : ind === 2 ? (<div>
                <Image src={Img3} alt={"qwerty"}/>
                <div className={"py-2"}>
                    <h1 className={"text-2xl font-bold"}></h1>
                    <p className={""}></p>
                    {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                </div>
            </div>) : ind === 3 ? (<div>
                <Image src={Img4} alt={"qwerty"}/>
                <div className={"py-2"}>
                    <h1 className={"text-2xl font-bold"}></h1>
                    <p className={""}></p>
                    {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                </div>
            </div>) : ind === 4 ? (<div>
                <Image src={Img5} alt={"qwerty"}/>
                <div className={"py-2"}>
                    <h1 className={"text-2xl font-bold"}></h1>
                    <p className={""}></p>
                    {/*<button className={"bg-blue-800 text-white py-2 px-4 rounded-lg mt-4"}>Contact us</button>*/}
                </div>
            </div>) : (<div>
                <Image src={Img6} alt={"qwerty"}/>
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
