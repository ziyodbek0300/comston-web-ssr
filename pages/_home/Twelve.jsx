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
                            href="https://www.google.com/maps/place/6925+Lake+Ellenor+Dr,+Orlando,+FL+32809/@28.4655806,-81.4023714,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77d4979f909f9:0x7a5c0fe59d9724bd!8m2!3d28.4655759!4d-81.3997965!16s%2Fg%2F11kc745rrz?entry=ttu"
                            target={"#"}
                        >
                    <p className={"text-white text-30-44-600"} id={"faqs"} data-aos={"fade-up"} data-aos-duration={"1200"}>6925 Lake Ellenor Dr, Orlando, FL 32809</p></a>
                </div>
            </div>
        </div>
    );
}

export default Twelve;
