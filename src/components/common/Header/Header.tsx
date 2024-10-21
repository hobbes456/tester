import Link from "next/link";
import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import Logo from "@components/Logo";
import Account from "@components/Account";

import { headerLinks } from "@/constants/headerLinks";

import s from "./Header.module.scss";

const Header = () => {
    const router = useRouter();

    const user = useAppSelector(userSelectors.user);

    const currentLinks = headerLinks.filter(
        (link) => link.rout !== router.pathname
    );

    return (
        <div className={s.header}>
            <Logo />
            <div className={s.header__links}>
                {currentLinks.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.rout}
                            className={s.header__link}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
            {user && <Account user={user} />}
        </div>
    );
};

export default Header;
