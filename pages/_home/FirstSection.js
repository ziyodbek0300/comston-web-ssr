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
    const [truth, setTruth] = useState(false);
    const showVideo = () => {
        setTruth(true);
    }


    return (<div className={"container first-section flex items-center"}>
        <div className={"w-3/4 mx-auto text-center"}>
            <h1 className={"text-48-70-700 mb-4"} data-aos="fade-up" data-aos-duration={"1000"}><span
                className={"text-blue-550"}>Logistics Tech Consultancy </span> <br/> for Companies of Every Size: <br/>Startups to Industry Leaders</h1>
            <p className={"text-20-30-500 md:w-3/4 md:px-10 mx-auto mb-14"} data-aos="fade-up"
               data-aos-duration={"1200"}>We specialize in guiding companies through <span className={"text-blue-550 border-b border-blue-550 pb-1"}>digital transformation</span>, offering  consultancy on implementing <span className={"text-blue-550 border-b border-blue-550 pb-1"}>software solutions</span> and <span className={"text-blue-550 border-b border-blue-550 pb-1"}>automating processes</span>.</p>
            {truth && (<div style={{'padding': '43.25% 0 0 0'}} className="relative">
                <iframe
                    src="https://player.vimeo.com/video/744365603?h=8aa2e6f794&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                    style={{'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%'}}
                    title="Comston Technologies Intro"></iframe>
            </div>)}
            {!truth && (<Button type="submit" showFunc={showVideo} duration={"1400"} text={"Get started"}
                                classes={"bg-blue-950 hover:bg-blue-1000"}/>)}
        </div>
    </div>);
}

export default FirstSection;
