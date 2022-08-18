import React from 'react';
import Navbar from "../../components/navbar";
import FifthSection from './FifthSection';
import FirstSection from "./FirstSection";
import FourthSection from './FourthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import SixthSection from './SixthSection';
import Footer from '../../.idea/components/components/footer/Footer';

function WebDevelopment() {
    return (
        <div>
            <Navbar/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <Footer/>
        </div>
    );
}

export default WebDevelopment;
