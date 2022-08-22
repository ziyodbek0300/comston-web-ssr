import React from 'react';
import Button from "../../components/button";

function FirstSection() {
    return (
        <div className={"container first-section flex items-center"}>
            <div className={"w-3/4 mx-auto text-center"}>
                <h1 className={"text-48-70-700 mb-4"}>Mobile <span
                    className={"text-blue-550"}>Web/App</span> Development For Technical & Non-technical Founders</h1>
                <p className={"text-20-30-500 md:w-3/4 md:px-10 mx-auto mb-14"}>We help non-technical founders to <span className={"text-blue-550 border-b border-blue-550 pb-1"}>bring idea to execution</span> or help them scale</p>
                <Button text={"Get started"} classes={"bg-blue-950 hover:bg-blue-1000"} />
            </div>
        </div>
    );
}

export default FirstSection;
