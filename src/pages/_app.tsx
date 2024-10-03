import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { wrapper } from "@/store";

import DefaultHead from "@components/DefaultHead";
import Layout from "@components/Layout";
import Header from "@components/Header";

import "@/styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [showHeader, setShowHeader] = useState<boolean>(false);

    useEffect(() => {
        setShowHeader(router.pathname !== "/login" ? true : false);
    }, [router.pathname]);

    return (
        <Layout>
            <DefaultHead />
            {showHeader && <Header />}
            <Component {...pageProps} />
        </Layout>
    );
}

export default wrapper.withRedux(App);
