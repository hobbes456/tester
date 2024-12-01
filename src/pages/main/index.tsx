import React from "react";
import { parseCookies } from "nookies";
import { END } from "redux-saga";

import { SagaStore, wrapper } from "@/store";
import { setCurrent } from "@/models/user";

import { IMainScreen } from "@/interface/IMainScreen";

import { SESSION_ID } from "@/constants/cookieNames";

import MainScreen from "@pages/MainScreen";
import ProtectedRout from "@components/ProtectedRout";

const Main: React.FC<IMainScreen> = ({ user }) => (
    <ProtectedRout>
        <MainScreen user={user} />
    </ProtectedRout>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const session_id = parseCookies(context)[SESSION_ID];

        store.dispatch(setCurrent(session_id));

        store.dispatch(END);
        await (store as SagaStore).sagaTask?.toPromise();

        const user = store.getState().user.user;

        return { props: { user: user } };
    }
);

export default Main;
