import { parseCookies } from "nookies";
import { END } from "redux-saga";

import { SagaStore, wrapper } from "@/store";
import { setCurrent } from "@/models/user";

import { SESSION_ID } from "@/constants/cookieNames";

import MainScreen from "@pages/MainScreen";
import ProtectedRout from "@components/ProtectedRout";

const Main = () => (
    <ProtectedRout>
        <MainScreen />;
    </ProtectedRout>
);

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const cookies = parseCookies(context);

        store.dispatch(setCurrent(cookies[SESSION_ID]));
        store.dispatch(END);
        await (store as SagaStore).sagaTask?.toPromise();

        return { props: {} };
    }
);

export default Main;
