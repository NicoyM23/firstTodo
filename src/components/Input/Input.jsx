import React from 'react';
import classes from "./Input.module.css";

const Input = ({placeholder, onChange, value}) => {
    return (
        <input
            className={classes.todo}
            value={value}
            onInput={onChange}
            spellCheck={false}
            type="text"
            placeholder={placeholder}
        />
    );
};

export default Input;