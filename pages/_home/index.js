import FirstSection from "./FirstSection";
import {useRef} from "react";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import EighthSection from "./EighthSection";
import NinthSection from "./NinthSection";
import Ten from "./Ten";
import Eleventh from "./Eleventh";
import Twelve from "./Twelve";
import Thirteen from "./Thirdteen";
import Fourteen from "./Forteen";
import Footer from "../../components/footer";

function HomePage() {

    return (<div>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
        <SeventhSection/>
        <EighthSection/>
        <NinthSection/>
        <Ten/>
        <Eleventh/>
        <Twelve/>
        <Thirteen/>
        <Fourteen/>
        {/*<Footer/>*/}
    </div>)
}

export default HomePage;
