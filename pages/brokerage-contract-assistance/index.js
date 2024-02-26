import React, {useEffect} from 'react'
import Navbar from '../../components/navbar'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from '../_home/SixthSection'
import SeventhSection from './SeventhSection'
import Footer from '../../components/footer/Footer'
import Ten from "../_home/Ten";
import Forteen from "../_home/Forteen";
import AOS from "aos";
import Head from 'next/head'
import "aos/dist/aos.css";

export default function Index() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        console.log("a")
    }, []);

    return (
        <div>
            <Head>
                <title>Logistics Tech Consultancy in Orlando | Comston</title>
                <meta name="description" content="Comston offers guidance to companies through digital transformation, offering consultancy on implementing software solutions and automating processes."/>
            </Head>

            <Navbar/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            {/* <SeventhSection/> */}
            <Ten/>
            <Forteen/>
            <Footer/>
        </div>
    )
}
