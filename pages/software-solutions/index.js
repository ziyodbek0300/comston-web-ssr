import React, {useEffect} from 'react';
import Navbar from "../../components/navbar";
import FirstSection from "./FirstSection";
import FourthSection from './FourthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import Footer from '../../components/footer';
import Ten from "../_home/Ten";
import Forteen from "../_home/Forteen";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'

function WebDevelopment() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.log("a")
    }, []);

    return (
        <div>
            <Head>
                <title>Comston Software Solutions</title>
                <meta name="description" content="Get affordable web design & development services from our experienced team in your timeline. Grow your business with a conversion-driven website."/>
            </Head>
            <Navbar/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <Ten/>
            <Forteen/>
            <Footer/>
        </div>
    );
}

export default WebDevelopment;
