import React from "react";

import s from "./Input.module.scss";

type InputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
    <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

export default Input;
