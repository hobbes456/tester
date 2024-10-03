import React from "react";
import clsx from "clsx";

import { useAction } from "@/hooks/useAction";

import { setLogout } from "@/models/user";

import { IUser } from "@/interface/IUser";

import s from "./Account.module.scss";

type AccountProps = {
    user: IUser;
};

const Account: React.FC<AccountProps> = ({ user }) => {
    const { username, is_admin } = user;

    const handleLogout = useAction(setLogout);

    return (
        <div className={s.account}>
            <div className={s.account__information}>
                <p>{username}</p>
                <p
                    className={clsx(s.account__admin, {
                        [s.account__admin_red]: !is_admin,
                    })}
                >
                    {is_admin ? "Admin" : "Not admin"}
                </p>
            </div>
            <button
                className={s.account__button}
                onClick={() => handleLogout()}
            >
                Log out
            </button>
        </div>
    );
};

export default Account;
