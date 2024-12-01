import React from "react";
import clsx from "clsx";

import s from "./Input.module.scss";

type InputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    placeholder: string;
    isBig: boolean;
};

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    onBlur,
    placeholder,
    isBig,
}) => (
    <input
        className={clsx(s.input, isBig ? s.input_big : s.input_small)}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
    />
);

export default Input;
