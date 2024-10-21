import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";

import { useAction } from "@/hooks/useAction";

import { setRegister, setLogin } from "@/models/user";

import FormItem from "@components/FormItem";

import { IUser } from "@/interface/IUser";

import { authFormItems } from "@/constants/authFormItems";
import { regFormItems } from "@/constants/regFormItems";
import { formSwitches } from "@/constants/formSwitches";
import { formButtons } from "@/constants/formButtons";

import s from "./LoginForm.module.scss";

const LoginForm = () => {
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

    const onSubmit: SubmitHandler<IUser> = async (data: IUser) => {
        if (option === "Auth") {
            await handleLogin(data);
        } else if (option === "Reg") {
            data = {
                ...data,
                is_admin: data.is_admin === "true" ? true : false,
            };
            await handleRegister(data);
        }

        reset();
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
