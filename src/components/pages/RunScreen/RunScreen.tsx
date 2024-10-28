import React from "react";

import { IRunScreen } from "@/interface/IRunScreen";

import Header from "@components/Header";

import s from "./RunScreen.module.scss";

const RunScreen: React.FC<IRunScreen> = ({ user }) => {
    return (
        <div className={s.runScreen}>
            <Header user={user} />
            <h1 className={s.runScreen__title}>Run a test</h1>
        </div>
    );
};

export default RunScreen;
