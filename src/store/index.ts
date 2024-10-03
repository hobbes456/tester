import { configureStore, Store } from "@reduxjs/toolkit";
import createSagaMiddleware, { Task } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import { rootReducer } from "@/models";
import rootSaga from "@/models/sagas";

interface SagaStore extends Store {
    sagaTask?: Task;
}

// import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage";

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        // preloadedState: loadFromLocalStorage(),
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
    });

    // store.subscribe(() => {
    //     saveToLocalStorage(store.getState());
    // });

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore);

export default makeStore;

type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
