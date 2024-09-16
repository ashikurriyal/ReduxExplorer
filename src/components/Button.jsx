import React from 'react';

const Button = ({ children, type, handle }) => {
    const style = type === 'danger'
        ? 'bg-red-500 text-white px-3 py-2 rounded-lg shadow'
        : 'bg-green-500 text-white px-3 py-2 rounded-lg shadow'; // Fixed typo 'tex' to 'text'

    return (
        <button className={style} onClick={handle}>
            {children}
        </button>
    );
};

export default Button;
