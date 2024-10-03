"use client"

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";

import { useAction } from "@/hooks/useAction";
import { useAppSelector } from "@/hooks/useAppSelector";

import { setRegister, setLogin, userSelectors } from "@/models/user";

import FormItem from "@components/FormItem";

import { IUser } from "@/interface/IUser";

import { authFormItems } from "@/constants/authFormItems";
import { regFormItems } from "@/constants/regFormItems";
import { formSwitches } from "@/constants/formSwitches";
import { formButtons } from "@/constants/formButtons";

import s from "./LoginForm.module.scss";

const LoginForm = () => {
    const router = useRouter();

    const isError = useAppSelector(userSelectors.isError);

    const [option, setOption] = useState<"Auth" | "Reg">("Auth");

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<IUser>({ mode: "onBlur" });

    const handleChange = (
        event: React.MouseEvent<HTMLButtonElement>,
        value: "Auth" | "Reg"
    ) => {
        event.preventDefault();
        setOption(value);
    };

    const handleRegister = useAction(setRegister);
    const handleLogin = useAction(setLogin);

    const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
        if (option === "Auth") {
            handleLogin(data);
        } else if (option === "Reg") {
            data = {
                ...data,
                is_admin: data.is_admin === "true" ? true : false,
            };
            handleRegister(data);
        }

        if (!isError) {
            reset();

            router.push("/dashboard");
        }
    };

    return (
        <form
            className={s.loginForm}
            action="#"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={s.loginForm__switches}>
                {formSwitches.map((item) => {
                    return (
                        <button
                            key={item.name}
                            className={clsx(s.loginForm__switch, {
                                [s.loginForm__switch_active]:
                                    option === item.name,
                            })}
                            onClick={(event) => handleChange(event, item.name)}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>
            {(option === "Auth" ? authFormItems : regFormItems).map((item) => (
                <FormItem
                    key={item.id}
                    item={item}
                    register={register}
                    errors={errors}
                />
            ))}
            <div className={s.loginForm__buttons}>
                {formButtons.map((button) => (
                    <button
                        key={button.type}
                        type={button.type}
                        className={s.loginForm__button}
                        disabled={button.type === "submit" && !isValid}
                    >
                        {button.type.toUpperCase()}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default LoginForm;
