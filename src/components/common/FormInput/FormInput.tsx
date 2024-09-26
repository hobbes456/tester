import React from "react";

import { UseFormRegister } from "react-hook-form";

import { IUser } from "@/interface/IUser";
import { IFormItem } from "@/interface/IFormItem";

type FormInputProps = {
    className: string;
    item: IFormItem;
    register: UseFormRegister<IUser>;
};

const FormInput: React.FC<FormInputProps> = ({ className, item, register }) => {
    return (
        <input
            type={item.type}
            className={className}
            {...register(item.id, item.validations)}
            name={item.id}
            id={item.id}
            placeholder={item.placeholder}
        />
    );
};

export default FormInput;
