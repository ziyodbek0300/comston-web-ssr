import React from 'react';
import Link from "next/link";

function Button({text, classes, id, link, duration}) {
    return (
        <Link href={link ? link : "/#"}>
            <button data-aos="fade-up" data-aos-duration={duration ? duration : "0"} id={id}
                    className={`${classes} rounded-2xl border hover:opacity-90 text-white py-3.5 md:px-14 px-8`}>{text}</button>
        </Link>
    );
}

export default Button;
