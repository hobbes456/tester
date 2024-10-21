import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { END } from "redux-saga";

import { wrapper, SagaStore } from "@/store";

import DefaultHead from "@components/DefaultHead";
import Layout from "@components/Layout";
import Header from "@components/Header";

import "@/styles/globals.scss";

const App: React.FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    const router = useRouter();
    const [showHeader, setShowHeader] = useState<boolean>(false);

    useEffect(() => {
        setShowHeader(router.pathname === "/login" ? false : true);
    }, [router.pathname]);

    return (
        <Provider store={store}>
            <Layout>
                <DefaultHead />
                {showHeader && <Header />}
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

export const getInitialProps = wrapper.getInitialAppProps(
    () => async (context) => {
        const { Component, ctx } = context;

        const pageProps = {
            ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}),
        };

        if (ctx.req) {
            ctx.store.dispatch(END);

            await (ctx.store as SagaStore).sagaTask?.toPromise();
        }

        return { pageProps };
    }
);

export default App;
