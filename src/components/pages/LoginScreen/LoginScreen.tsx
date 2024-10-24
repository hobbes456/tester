import { useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import Logo from "@components/Logo";
import LoginForm from "@components/LoginForm";

import s from "./LoginScreen.module.scss";

const LoginScreen = () => {
    const router = useRouter();

    const isRegistered = useAppSelector(userSelectors.registered);
    const isAuth = useAppSelector(userSelectors.isAuth);
    const isError = useAppSelector(userSelectors.isError);

    useEffect(() => {
        if (isAuth) router.push("/main");
    }, [isAuth, router]);

    return (
        <div className={s.loginScreen}>
            <Logo />
            <LoginForm />
            {isRegistered && (
                <p
                    className={clsx([
                        [s.loginScreen__text],
                        [s.loginScreen__text_success],
                    ])}
                >
                    You have successfully registered, now login.
                </p>
            )}
            {isError && (
                <p
                    className={clsx([
                        [s.loginScreen__text],
                        [s.loginScreen__text_error],
                    ])}
                >
                    Error: {isError}
                </p>
            )}
        </div>
    );
};

export default LoginScreen;
