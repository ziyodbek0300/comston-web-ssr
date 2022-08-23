import React from 'react';

function Button({text, classes, id}) {
    return (
        <button data-aos="fade-up" data-aos-duration={"1400"} id={id} className={`${classes} rounded-2xl border hover:opacity-90 text-white py-3.5 md:px-14 px-8`}>{text}</button>
    );
}

export default Button;
