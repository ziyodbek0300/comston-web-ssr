import React, {useRef} from 'react';
import Image from "next/image";
import Arrow from '../../public/Arrows/Vector (Stroke).svg';

function Thirteen() {
    const body1 = useRef(null);
    const body2 = useRef(null);
    const body3 = useRef(null);
    const body4 = useRef(null);
    const body5 = useRef(null);
    const icon1 = useRef(null);
    const icon2 = useRef(null);
    const icon3 = useRef(null);
    const icon4 = useRef(null);
    const icon5 = useRef(null);

    function handleCollapse(num) {
        let refs = [body1, body2, body3, body4, body5];
        let icons = [icon1, icon2, icon3, icon4, icon5];
        refs.forEach(el => {
            el.current.classList.add("h-0");
            el.current.classList.remove("p-4");
            el.current.classList.add("p-0");
        })
        icons.forEach(el => {
            el.current.classList.remove("rotate-180");
        })
        icons[num].current.classList.toggle("rotate-180")
        refs[num].current.classList.toggle("h-0");
        refs[num].current.classList.toggle("p-4");
        refs[num].current.classList.toggle("p-0");

    }

    return (<div className={"container"}>
        <div className={"pb-16"}>
            <h2 className={"capitalize text-center text-40-56-700"}>Get answers for <span
                className={"text-blue-550"}>your questions</span> here <br/> and <span className={"text-blue-550"}>call us</span> to
                discuss your idea!</h2>
            <div className={"py-5"}>
                <div className="accordion">
                    <div className="accordion-item mb-4 shadow-a rounded-lg">
                        <div onClick={() => handleCollapse(0)}
                             className="accordion-header flex justify-between items-center cursor-pointer hover:bg-blue-150 rounded-t-lg p-4">
                            <p className={"text-18-26-500"}>How can I protect my idea from ...</p>
                            <div ref={icon1}>
                                <Image src={Arrow} className={"ccc"} alt={"arrow-down"}/>
                            </div>
                        </div>
                        <div ref={body1} className="accordion-body overflow-hidden p-0 h-0">
                            <p className={"text-16-24-400 text-gray-450 lg:w-1/2"}>It depends on the scope of the
                                project,
                                for example, average time for app development
                                can take from 3-4 months.</p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4 shadow-a rounded-lg">
                        <div onClick={() => handleCollapse(1)}
                             className="accordion-header flex justify-between items-center cursor-pointer hover:bg-blue-150 rounded-t-lg p-4">
                            <p className={"text-18-26-500"}>How can I protect my idea from ...</p>
                            <div ref={icon2}>
                                <Image src={Arrow} className={"ccc"} alt={"arrow-down"}/>
                            </div>
                        </div>
                        <div ref={body2} className="accordion-body overflow-hidden p-0 h-0">
                            <p className={"text-16-24-400 text-gray-450 lg:w-1/2"}>It depends on the scope of the
                                project,
                                for example, average time for app development
                                can take from 3-4 months.</p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4 shadow-a rounded-lg">
                        <div onClick={() => handleCollapse(2)}
                             className="accordion-header flex justify-between items-center cursor-pointer hover:bg-blue-150 rounded-t-lg p-4">
                            <p className={"text-18-26-500"}>How can I protect my idea from ...</p>
                            <div ref={icon3}>
                                <Image src={Arrow} className={"ccc"} alt={"arrow-down"}/>
                            </div>
                        </div>
                        <div ref={body3} className="accordion-body overflow-hidden p-0 h-0">
                            <p className={"text-16-24-400 text-gray-450 lg:w-1/2"}>It depends on the scope of the
                                project,
                                for example, average time for app development
                                can take from 3-4 months.</p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4 shadow-a rounded-lg">
                        <div onClick={() => handleCollapse(3)}
                             className="accordion-header flex justify-between items-center cursor-pointer hover:bg-blue-150 rounded-t-lg p-4">
                            <p className={"text-18-26-500"}>How can I protect my idea from ...</p>
                            <div ref={icon4}>
                                <Image src={Arrow} className={"ccc"} alt={"arrow-down"}/>
                            </div>
                        </div>
                        <div ref={body4} className="accordion-body overflow-hidden p-0 h-0">
                            <p className={"text-16-24-400 text-gray-450 lg:w-1/2"}>It depends on the scope of the
                                project,
                                for example, average time for app development
                                can take from 3-4 months.</p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4 shadow-a rounded-lg">
                        <div onClick={() => handleCollapse(4)}
                             className="accordion-header flex justify-between items-center cursor-pointer hover:bg-blue-150 rounded-t-lg p-4">
                            <p className={"text-18-26-500"}>How can I protect my idea from ...</p>
                            <div ref={icon5}>
                                <Image src={Arrow} className={"ccc"} alt={"arrow-down"}/>
                            </div>
                        </div>
                        <div ref={body5} className="accordion-body overflow-hidden p-0 h-0">
                            <p className={"text-16-24-400 text-gray-450 lg:w-1/2"}>It depends on the scope of the
                                project,
                                for example, average time for app development
                                can take from 3-4 months.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Thirteen;
