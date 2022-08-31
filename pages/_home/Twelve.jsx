import React from 'react';

function Twelve() {
    return (
        <div className={"container"}>
            <div className={"py-16"}>
            <h2 className={"text-40-56-700 capitalize text-center"}>Find <span
                className={"text-blue-550"}>our office</span> in
                Sunshine state</h2>
                <div data-aos={"fade-up"} data-aos-duration={"1000"} className={"h-80 flex items-end my-12 bg-rectangle"}>
                <a
                            href="https://www.google.com/maps/place/8010+Sunport+Dr+STE+122,+Orlando,+FL+32809,+USA/@28.4503038,-81.3777283,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77cfcf51958df:0xa3980848743cd73e!8m2!3d28.4502991!4d-81.3755396"
                            target={"#"}
                        >
                    <p className={"text-white text-30-44-600"} id={"faqs"} data-aos={"fade-up"} data-aos-duration={"1200"}>8010 Sunport dr, Suite #122, Orlando, FL 32809</p></a>
                </div>
            </div>
        </div>
    );
}

export default Twelve;
