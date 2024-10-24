import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { useAction } from "@/hooks/useAction";

import { userSelectors } from "@/models/user";
import { setWelcomeDone, displaySelectors } from "@/models/display";

import ModalWindow from "@components/ModalWindow";
import Welcome from "@components/Welcome";
import TestCard from "@components/TestCard";
import Header from "@components/Header";

import s from "./MainScreen.module.scss";

const MainScreen = () => {
    const user = useAppSelector(userSelectors.user);
    const isWelcome = useAppSelector(displaySelectors.isWelcome);

    const handleWelcomeDone = useAction(setWelcomeDone);

    const handleClose = () => handleWelcomeDone(false);

    useEffect(() => {
        const savedValue = localStorage.getItem("isWelcome");

        if (!savedValue) {
            handleWelcomeDone(true);
            localStorage.setItem("isWelcome", JSON.stringify(isWelcome));
        }
    }, [isWelcome, handleWelcomeDone]);

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
                <ModalWindow title="Welcome" onClose={handleClose}>
                    <Welcome user={user} />
                </ModalWindow>
            )}
        </div>
    );
};

export default MainScreen;
