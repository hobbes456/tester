import React from "react";
import { parseCookies } from "nookies";
import { END } from "redux-saga";
import { useRouter } from "next/router";

import { SagaStore, wrapper } from "@/store";
import { setCurrent } from "@/models/user";

import { SESSION_ID } from "@/constants/cookieNames";

import ProtectedRout from "@components/ProtectedRout";

const Slug = () => {
    const router = useRouter();

    return (
        <ProtectedRout>
            <div>{router.query.slug}</div>;
        </ProtectedRout>
    );
};

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

export default Slug;
