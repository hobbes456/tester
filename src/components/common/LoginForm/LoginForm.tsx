import { useForm, SubmitHandler } from "react-hook-form";

import FormItem from "@components/FormItem";

import { IUser } from "@/interface/IUser";

import { loginFormItems } from "@/constants/loginFormItems";
import { formButtons } from "@/constants/formButtons";

import s from "./LoginForm.module.scss";

const LoginForm = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<IUser>({ mode: "onBlur" });

    const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
        reset();
    };

    return (
        <form
            className={s.loginForm}
            action="#"
            onSubmit={handleSubmit(onSubmit)}
        >
            {loginFormItems.map((item) => (
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
                        {button.type === "submit"
                            ? "SIGN IN"
                            : button.type.toUpperCase()}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default LoginForm;
