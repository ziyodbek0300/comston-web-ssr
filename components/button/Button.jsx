import React from 'react';

function Button({text, classes, id}) {
    return (
        <button id={id} className={`${classes} rounded-2xl border hover:opacity-90 text-white py-3.5 md:px-14 px-8`}>{text}</button>
    );
}

export default Button;
