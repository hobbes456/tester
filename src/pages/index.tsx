import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tester</title>
                <meta name="keywords" content="testing app" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Simple testing app" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    http-equiv="Permissions-Policy"
                    content="interest-cohort=()"
                />
                <link rel="icon" href="/github-logo.png" />
            </Head>
        </>
    );
}
