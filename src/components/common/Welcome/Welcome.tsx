import React from "react";
import clsx from "clsx";

import { IUser } from "@/interface/IUser";

import s from "./Welcome.module.scss";

type WelcomeProps = {
    user: IUser;
};

const Welcome: React.FC<WelcomeProps> = ({ user }) => {
    const { username, is_admin } = user;

    return (
        <div className={s.welcome}>
            <h1 className={s.welcome__title}>Welcome, {username}</h1>
            <p
                className={clsx(s.welcome__text, {
                    [s.welcome__text_red]: !is_admin,
                })}
            >
                You {!is_admin && "do not "}have administrator rights
            </p>
            <p className={s.welcome__memo}>
                (Click anywhere on the dark screen or escape to close this
                window)
            </p>
        </div>
    );
};

export default Welcome;
