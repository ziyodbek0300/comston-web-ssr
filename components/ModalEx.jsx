import React from 'react';
import Modal from 'react-modal';
import Img1 from "../public/project-page images/1.png";
import Img2 from "../public/project-page images/2.png";
import Img3 from "../public/project-page images/3.png";
import Img4 from "../public/project-page images/4.png";
import Img5 from "../public/project-page images/5.png";
import Img6 from "../public/project-page images/6.png";
import Image from "next/image";
import Button from "./button";

function ModalEx({isOpen, closeModal, ind}) {

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
                <Image src={Img1} alt={"qwerty"}/>
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
