import React from 'react';
import Button from "../../components/button";

function NinthSection() {
    return (
        <div className={"py-14 bg-blue-950 text-center nineSection"}>
            <div className="container">
                <h2 className={"text-white text-40-56-700 mb-5"}>What expert feedback on <br/> your idea?</h2>
                <Button id={"comments"} classes={"bg-gradient text-white border-none"} text={"Get started"}/>
            </div>
        </div>
    );
}

export default NinthSection;
