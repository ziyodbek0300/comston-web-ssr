import React, {useEffect} from 'react';
import Button from "../../components/button";

import AOS from "aos";
import "aos/dist/aos.css";
import {useRef, useState} from 'react'

function FirstSection() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.log("a")
    }, []);
    const refV = useRef();
    const [truth, setTruth] = useState(false);
    // const showVideo =() => {
    //     refV.current.classList.add('relative');
    //     refV.current.classList.remove('hidden');
    // }
    const showVideo =() => {
        setTruth(true);
    }


    return (<div className={"container first-section flex items-center"}>
        <div className={"w-3/4 mx-auto text-center"}>
            <h1 className={"text-48-70-700 mb-4"} data-aos="fade-up" data-aos-duration={"1000"}><span
                className={"text-blue-550"}>Web & Mobile</span> Software Development For Technical & Non-technical Founders</h1>
            <p className={"text-20-30-500 md:w-3/4 md:px-10 mx-auto mb-14"} data-aos="fade-up"
               data-aos-duration={"1200"}>We help non-technical founders to <span
                className={"text-blue-550 border-b border-blue-550 pb-1"}>bring idea to execution</span> or help
                them scale</p>
            {/* <div ref={refV} className={"lg:w-[70%] absolute top-16 left-20 bg-red-400 z-50"}> */}
                {truth && (<div style={{'padding': '56.25% 0 0 0'}} className="relative"><iframe src="https://player.vimeo.com/video/744365603?h=8aa2e6f794&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" style={{'position':'absolute', 'top':'0', 'left':'0', 'width':'100%', 'height':'100%'}} title="Comston Technologies Intro"></iframe></div>)}
            {/* </div> */}
            {/* <button onClick={showVideo}>Watch</button> */}
            {!truth && (<Button type="submit" showFunc={showVideo} duration={"1400"} text={"Get started"} classes={"bg-blue-950 hover:bg-blue-1000"}/>)}

        </div>
    </div>);
}

export default FirstSection;
