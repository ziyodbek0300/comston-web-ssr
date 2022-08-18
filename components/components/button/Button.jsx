import React from 'react';

function Button({text, classes}) {
    return (
        <button className={`${classes} rounded-2xl border hover:opacity-90 text-white py-3.5 px-14`}>{text}</button>
    );
}

export default Button;
