import FirstSection from "./FirstSection";
import {useRef} from "react";

function HomePage() {

    const contentRef = useRef(null);

    function handleMove(e) {
        console.log("asdhba",e)
    }

    return (<div>
        <FirstSection contentRef={contentRef} handleMove={handleMove} />
    </div>)
}

export default HomePage;
