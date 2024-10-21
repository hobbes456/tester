import { useState } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import ModalWindow from "@components/ModalWindow";
import Welcome from "@components/Welcome";
import TestCard from "@components/TestCard";

import s from "./MainScreen.module.scss";
import Drag from "@/components/common/DRAG";

const MainScreen = () => {
    const [showWelcome, setShowWelcome] = useState<boolean>(true);

    const handleClose = () => setShowWelcome((prev) => !prev);

    const user = useAppSelector(userSelectors.user);
    const isError = useAppSelector(userSelectors.isError);

    return (
        <div className={s.mainScreen}>
            {isError ? (
                <>
                    <p>error: {isError}</p>
                    <Drag />
                </>
            ) : (
                <>
                    <h1 className={s.mainScreen__title}>List of tests</h1>
                    {user && (
                        <ul className={s.mainScreen__list}>
                            <TestCard user={user} />
                            <TestCard user={user} />
                            <TestCard user={user} />
                            <TestCard user={user} />
                        </ul>
                    )}
                    {showWelcome && user && (
                        <ModalWindow title="Welcome" onClose={handleClose}>
                            <Welcome user={user} />
                        </ModalWindow>
                    )}
                </>
            )}
        </div>
    );
};

export default MainScreen;
