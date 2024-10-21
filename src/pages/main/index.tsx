import { parseCookies } from "nookies";
import { END } from "redux-saga";

import { SagaStore, wrapper } from "@/store";
import { setCurrent } from "@/models/user";

import MainScreen from "@pages/MainScreen";

const Main = () => <MainScreen />;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const cookies = parseCookies(context);

        console.log(cookies.username);
        // console.log(store);

        // if (!store.getState().user.user) {
        //     store.dispatch(setCurrent());
        //     store.dispatch(END);
        //     await (store as SagaStore).sagaTask?.toPromise();
        // }
        return { props: {} };
    }
);

export default Main;
