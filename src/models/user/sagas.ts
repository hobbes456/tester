import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    setRequest,
    getRequest,
    getFailure,
    setRegister,
    getRegister,
    setLogin,
    getLogin,
    setCurrent,
    setLogout,
    getLogout,
} from "@/models/user";

import {
    registerUserApi,
    loginUserApi,
    currentUserApi,
    logoutUserApi,
} from "./api";

import { IUser } from "@/interface/IUser";

function* handleRegisterUserSaga(action: PayloadAction<IUser>) {
    try {
        yield put(setRequest());

        yield call(registerUserApi, action.payload);
        yield put(getRegister());

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleLoginUserSaga(action: PayloadAction<IUser>) {
    try {
        yield put(setRequest());

        const user: IUser = yield call(loginUserApi, action.payload);
        yield put(getLogin(user));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleCurrentUserSaga(action: PayloadAction<string | null>) {
    try {
        yield put(setRequest());

        const user: IUser = yield call(currentUserApi, action.payload);
        yield put(getLogin(user));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleLogoutUserSaga() {
    try {
        yield put(setRequest());

        yield call(logoutUserApi);
        yield put(getLogout());

        yield put(getRequest());
    } catch (error) {
        console.error((error as Error).message);
    }
}

export function* watchUserSagas() {
    yield takeEvery(setRegister.type, handleRegisterUserSaga);
    yield takeEvery(setLogin.type, handleLoginUserSaga);
    yield takeEvery(setCurrent.type, handleCurrentUserSaga);
    yield takeEvery(setLogout.type, handleLogoutUserSaga);
}
