import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    setRegister,
    setLogin,
    setCurrent,
    setLogout,
    getSuccessSignup,
    getSuccessSignin,
    getFailure,
    getLogout,
} from "@/models/user";

import { userRegister, userLogin, currentUser, userLogout } from "./api";

import { IUser } from "@/interface/IUser";

function* handleRegisterSaga(action: PayloadAction<IUser>) {
    try {
        yield call(userRegister, action.payload);
        yield put(getSuccessSignup());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleLoginSaga(action: PayloadAction<IUser>) {
    try {
        const user: IUser = yield call(userLogin, action.payload);
        yield put(getSuccessSignin(user));
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleCurrentSaga(action: PayloadAction<string | null>) {
    try {
        const user: IUser = yield call(currentUser, action.payload);
        yield put(getSuccessSignin(user));
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
    yield takeEvery(setCurrent.type, handleCurrentSaga);
    yield takeEvery(setLogout.type, handleLogoutSaga);
}
