import React from "react";
import { parseCookies } from "nookies";
import { END } from "redux-saga";

import { SagaStore, wrapper } from "@/store";
import { setCurrent } from "@/models/user";
import { setTests } from "@/models/test";

import { IMainScreen } from "@/interface/IMainScreen";

import { SESSION_ID } from "@/constants/cookieNames";

import MainScreen from "@pages/MainScreen";
import ProtectedRout from "@components/ProtectedRout";

const Main: React.FC<IMainScreen> = ({ user, tests }) => (
    <ProtectedRout>
        <MainScreen user={user} tests={tests} />
    </ProtectedRout>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const session_id = parseCookies(context)[SESSION_ID];

        store.dispatch(setCurrent(session_id));
        store.dispatch(setTests(session_id));

        store.dispatch(END);
        await (store as SagaStore).sagaTask?.toPromise();

        const user = store.getState().user.user;
        const tests = store.getState().test.tests;

        return { props: { user: user, tests: tests } };
    }
);

export default Main;
