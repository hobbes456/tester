import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { IUser } from "@/interface/IUser";

import Logo from "@components/Logo";
import Account from "@components/Account";

import { headerLinks } from "@/constants/headerLinks";

import s from "./Header.module.scss";

type HeaderProps = {
    user: IUser;
};

const Header: React.FC<HeaderProps> = ({ user }) => {
    const router = useRouter();

    return (
        <div className={s.header}>
            <Logo />
            <ul className={s.header__links}>
                {headerLinks
                    .filter((link) => link.rout !== router.pathname)
                    .map((link) => {
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.rout}
                                    className={s.header__link}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
            </ul>
            {user && <Account user={user} />}
        </div>
    );
};

export default Header;
