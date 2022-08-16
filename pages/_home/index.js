import FirstSection from "./FirstSection";
import {useRef} from "react";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";

function HomePage() {

    const contentRef = useRef(null);

    function handleMove(e) {
        console.log("asdhba",e)
    }

    return (<div>
        <FirstSection contentRef={contentRef} handleMove={handleMove} />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
    </div>)
}

export default HomePage;
