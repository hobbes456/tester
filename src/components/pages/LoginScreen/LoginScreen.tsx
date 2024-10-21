import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import Logo from "@components/Logo";
import LoginForm from "@components/LoginForm";

import s from "./LoginScreen.module.scss";

const LoginScreen = () => {
    const router = useRouter();

    const isAuth = useAppSelector(userSelectors.isAuth);
    const isError = useAppSelector(userSelectors.isError);

    useEffect(() => {
        if (isAuth) router.push("/main");
    }, [isAuth]);

    return (
        <div className={s.loginScreen}>
            <Logo />
            <LoginForm />
            {isError && (
                <p className={s.loginScreen__error}>Error: {isError}</p>
            )}
        </div>
    );
};

export default LoginScreen;
