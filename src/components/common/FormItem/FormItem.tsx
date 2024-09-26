import React from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

import { IUser } from "@/interface/IUser";
import { IFormItem } from "@/interface/IFormItem";

import FormInput from "@components/FormInput";

import s from "./FormItem.module.scss";

type FormItemProps = {
    item: IFormItem;
    register: UseFormRegister<IUser>;
    errors: FieldErrors<FieldValues>;
};

const FormItem: React.FC<FormItemProps> = ({ item, register, errors }) => {
    return (
        <div className={s.formItem}>
            <label htmlFor={item.id}>{item.title}</label>
            <FormInput
                className={s.formItem__field}
                item={item}
                register={register}
            />
            <div className={s.formItem__warning}>
                {errors?.[item.id] && `${errors?.[item.id]?.message}`}
            </div>
        </div>
    );
};

export default FormItem;
