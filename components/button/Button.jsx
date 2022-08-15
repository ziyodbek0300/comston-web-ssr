import React from 'react';

function Button({text, classes}) {
    return (
        <button className={`${classes} rounded-2xl border border-transparent text-white py-3.5 px-14`}>{text}</button>
    );
}

export default Button;
