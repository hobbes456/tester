import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import Logo from "@components/Logo";
import Account from "@components/Account";

import s from "./Header.module.scss";

const Header = () => {
    const user = useAppSelector(userSelectors.user);

    return (
        <div className={s.header}>
            <Logo />
            {user && <Account user={user} />}
        </div>
    );
};

export default Header;
