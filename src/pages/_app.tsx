import React from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { END } from "redux-saga";

import { wrapper, SagaStore } from "@/store";

import DefaultHead from "@components/DefaultHead";
import Layout from "@components/Layout";

import "@/styles/globals.scss";

const App: React.FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return (
        <Provider store={store}>
            <Layout>
                <DefaultHead />
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
