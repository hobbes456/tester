import { configureStore, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";

import { rootReducer } from "@/models";
import rootSaga from "@/models/sagas";

export interface SagaStore extends Store {
    sagaTask?: Task;
}

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
    });

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = RootStore["dispatch"];

export const wrapper = createWrapper<RootStore>(makeStore);
