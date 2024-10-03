import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    setRegister,
    setLogin,
    setCurrent,
    setLogout,
    getSuccess,
    getFailure,
    getLogout,
} from "@/models/user";

import { userRegister, userLogin, currentUser, userLogout } from "./api";

import { IUser } from "@/interface/IUser";

function* handleRegisterSaga(action: PayloadAction<IUser>) {
    try {
        const user: IUser = yield call(userRegister, action.payload);
        yield put(getSuccess(user));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleLoginSaga(action: PayloadAction<IUser>) {
    try {
        const user: IUser = yield call(userLogin, action.payload);
        yield put(getSuccess(user));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleCurrentSaga() {
    try {
        const user: IUser = yield call(currentUser);
        console.log("Hello from saga");
        yield put(getSuccess(user));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleLogoutSaga() {
    try {
        yield call(userLogout);
        yield put(getLogout());
    } catch (error) {
        console.error((error as Error).message);
    }
}

export function* watchUserSagas() {
    yield takeEvery(setRegister.type, handleRegisterSaga);
    yield takeEvery(setLogin.type, handleLoginSaga);
    yield takeEvery(setLogout.type, handleLogoutSaga);
    yield takeEvery(setCurrent.type, handleCurrentSaga);
}
