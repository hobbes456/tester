import React from "react";
import { parseCookies } from "nookies";
import { END } from "redux-saga";

import { SagaStore, wrapper } from "@/store";
import { setCurrent } from "@/models/user";

import { IRunScreen } from "@/interface/IRunScreen";

import { SESSION_ID } from "@/constants/cookieNames";

import RunScreen from "@pages/RunScreen";
import ProtectedRout from "@components/ProtectedRout";

const Run: React.FC<IRunScreen> = ({ user }) => (
    <ProtectedRout>
        <RunScreen user={user} />
    </ProtectedRout>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const cookies = parseCookies(context);

        store.dispatch(setCurrent(cookies[SESSION_ID]));
        store.dispatch(END);
        await (store as SagaStore).sagaTask?.toPromise();

        const user = store.getState().user.user;

        return { props: { user: user } };
    }
);

export default Run;
