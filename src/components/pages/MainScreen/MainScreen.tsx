import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import ModalWindow from "@components/ModalWindow";
import Welcome from "@components/Welcome";
import TestCard from "@components/TestCard";
import Header from "@components/Header";

import s from "./MainScreen.module.scss";

const MainScreen = () => {
    const [isWelcome, setIsWelcome] = useState<boolean>(false);

    const user = useAppSelector(userSelectors.user);

    const handleClose = () => {
        setIsWelcome((prev) => !prev);
        localStorage.setItem("isWelcomeShow", JSON.stringify(false));
    };

    useEffect(() => {
        const savedValue = localStorage.getItem("isWelcomeShow");
        setIsWelcome(savedValue ? JSON.parse(savedValue) : true);
    }, []);

    return (
        <div className={s.mainScreen}>
            <Header user={user} />
            <h1 className={s.mainScreen__title}>List of tests</h1>
            {user && (
                <ul className={s.mainScreen__list}>
                    <TestCard user={user} />
                    <TestCard user={user} />
                    <TestCard user={user} />
                    <TestCard user={user} />
                    <TestCard user={user} />
                    <TestCard user={user} />
                    <TestCard user={user} />
                    <TestCard user={user} />
                </ul>
            )}
            {isWelcome && (
                <ModalWindow title="Welcome" onClose={() => handleClose()}>
                    <Welcome user={user} />
                </ModalWindow>
            )}
        </div>
    );
};

export default MainScreen;
