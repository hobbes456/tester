import Logo from "@components/Logo";
import LoginForm from "@components/LoginForm";

import s from "./LoginScreen.module.scss";

const LoginScreen = () => {
    return (
        <div className={s.loginScreen}>
            <Logo />
            <LoginForm />
        </div>
    );
};

export default LoginScreen;
