/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { useAction } from "@/hooks/useAction";

import { setWelcome, setConfig, displaySelectors } from "@/models/display";
import { setTests, testsSelectors } from "@/models/test";

import { IMainScreen } from "@/interface/IMainScreen";

import Header from "@components/Header";
import TestsList from "@components/TestsList";
import ModalWindow from "@components/ModalWindow";
import Welcome from "@components/Welcome";

import { getItem } from "@/constants/localStorageApi";
import { WELCOME_KEY, CONFIG_KEY } from "@/constants/localStorageKeys";

import s from "./MainScreen.module.scss";

const MainScreen: React.FC<IMainScreen> = ({ user }) => {
    const isWelcome = useAppSelector(displaySelectors.isWelcome);
    const isParams = useAppSelector(displaySelectors.isParams);

    const tests = useAppSelector(testsSelectors.tests);
    const totalCount = useAppSelector(testsSelectors.totalCount);
    const loader = useAppSelector(testsSelectors.isLoading);

    const handleWelcome = useAction(setWelcome);
    const handleConfig = useAction(setConfig);
    const loadTests = useAction(setTests);

    useEffect(() => {
        if (getItem(WELCOME_KEY) !== false) handleWelcome(true);
    }, []);

    useEffect(() => {
        const savedConfig = getItem(CONFIG_KEY);

        if (savedConfig) handleConfig(savedConfig);

        loadTests({ params: savedConfig });
    }, [isParams]);

    return (
        <div className={s.mainScreen}>
            <Header user={user} />
            <h1 className={s.mainScreen__title}>
                List of tests [{totalCount}]
            </h1>
            {loader ? (
                <p className={s.mainScreen__loading}>...loading</p>
            ) : (
                <TestsList user={user} tests={tests} params={isParams} />
            )}
            {isWelcome && (
                <ModalWindow
                    title="Welcome"
                    onClose={() => handleWelcome(false)}
                >
                    <Welcome user={user} />
                </ModalWindow>
            )}
        </div>
    );
};

export default MainScreen;
