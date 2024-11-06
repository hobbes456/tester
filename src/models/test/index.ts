/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITest } from "@/interface/ITest";
import { IMeta } from "@/interface/IMeta";

export * as testsSelectors from "./selectors";

interface InitialStateTestProps {
    test: ITest | null;
    tests: ITest[];
    meta: IMeta;
    isLoading: boolean;
    isError: string | null;
}

const initialState: InitialStateTestProps = {
    test: null,
    tests: [],
    meta: {
        total_pages: 0,
        total_count: 0,
    },
    isLoading: false,
    isError: null,
};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setRequest(state) {
            state.isError = null;
            state.isLoading = true;
        },
        getFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isError = action.payload;
        },
        setCreateTest() {},
        getCreateTest(state, action: PayloadAction<ITest>) {
            state.test = action.payload;
            state.isLoading = false;
        },
        setPatchTest() {},
        getPatchTest(state, action: PayloadAction<ITest>) {
            state.tests = state.tests.map((test) =>
                test.id !== action.payload.id ? test : { ...action.payload }
            );
            state.isLoading = false;
        },
        setDeleteTest() {},
        getDeleteTest(state, action: PayloadAction<number>) {
            state.tests = state.tests.filter(
                (test) => test.id !== action.payload
            );
            state.test = state.test?.id === action.payload ? null : state.test;
            state.isLoading = false;
        },
        setTest() {},
        getTest(state, action: PayloadAction<ITest>) {
            state.test = action.payload;
            state.isLoading = false;
        },
        setTests(state, action: PayloadAction<string | null>) {},
        getTests(
            state,
            action: PayloadAction<{ tests: ITest[]; meta: IMeta }>
        ) {
            state.tests = action.payload.tests;
            state.meta = action.payload.meta;
            state.isLoading = false;
        },
    },
});

export const {
    setRequest,
    getFailure,
    setCreateTest,
    getCreateTest,
    setPatchTest,
    getPatchTest,
    setDeleteTest,
    getDeleteTest,
    setTest,
    getTest,
    setTests,
    getTests,
} = testSlice.actions;

export default testSlice.reducer;
