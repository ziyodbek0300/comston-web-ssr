import React from 'react';
import Navbar from "../../components/navbar";
import FirstSection from "./FirstSection";
import FourthSection from './FourthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import Footer from '../../components/footer';
import Ten from "../_home/Ten";
import Forteen from "../_home/Forteen";

function WebDevelopment() {
    return (
        <div>
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
