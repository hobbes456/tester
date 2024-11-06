import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import {
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
} from "@/models/test";

import {
    createTestApi,
    patchTestApi,
    deleteTestApi,
    getTestApi,
    getTestsApi,
} from "./api";

import { ITest } from "@/interface/ITest";
import { IMeta } from "@/interface/IMeta";

function* handleCreateTestSaga(action: PayloadAction<string>) {
    try {
        yield put(setRequest());

        const test: ITest = yield call(createTestApi, action.payload);
        yield put(getCreateTest(test));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handlePatchTestSaga(action: PayloadAction<ITest>) {
    try {
        yield put(setRequest());

        const test: ITest = yield call(patchTestApi, action.payload);
        yield put(getPatchTest(test));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleDeleteTestSaga(action: PayloadAction<number>) {
    try {
        yield put(setRequest());

        const id: number = yield call(deleteTestApi, action.payload);
        yield put(getDeleteTest(id));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleGetTestSaga(action: PayloadAction<number>) {
    try {
        yield put(setRequest());

        const test: ITest = yield call(getTestApi, action.payload);
        yield put(getTest(test));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleGetTestsSaga(action: PayloadAction<string | null>) {
    try {
        yield put(setRequest());

        const data: { tests: ITest[]; meta: IMeta } = yield call(
            getTestsApi,
            action.payload
        );
        yield put(getTests(data));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

export function* watchTestsSagas() {
    yield takeEvery(setCreateTest.type, handleCreateTestSaga);
    yield takeEvery(setPatchTest.type, handlePatchTestSaga);
    yield takeEvery(setDeleteTest.type, handleDeleteTestSaga);
    yield takeEvery(setTest.type, handleGetTestSaga);
    yield takeEvery(setTests.type, handleGetTestsSaga);
}
