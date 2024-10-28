import React from "react";
import { parseCookies } from "nookies";
import { END } from "redux-saga";

import { SagaStore, wrapper } from "@/store";
import { setCurrent } from "@/models/user";

import { ICreateScreen } from "@/interface/ICreateScreen";

import { SESSION_ID } from "@/constants/cookieNames";

import CreateScreen from "@pages/CreateScreen";
import ProtectedRout from "@components/ProtectedRout";

const Create: React.FC<ICreateScreen> = ({ user }) => (
    <ProtectedRout>
        <CreateScreen user={user} />
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

export default Create;
