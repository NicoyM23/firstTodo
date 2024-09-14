import React from 'react';
import classes from "./Button.module.css";

const Button = ({text, onclick}) => {
    return (
        <button type={'submit'} onClick={onclick} className={classes.btn}>
            {text}
        </button>
    );
};

export default Button;