import React from "react";

import './Button.css';

const Button = ({ onClick }) => {
    return (
         <button className="custom-button" onClick={onClick}>
            Очстить
        </button>
    );
};

export default Button