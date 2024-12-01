import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    setRequest,
    getRequest,
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
    setCreateQuestion,
    getCreateQuestion,
    setPatchQuestion,
    getPatchQuestion,
    setDeleteQuestion,
    getDeleteQuestion,
    setCreateAnswer,
    getCreateAnswer,
    setPatchAnswer,
    getPatchAnswer,
    setChangeAnswerPosition,
    getChangeAnswerPosition,
    setDeleteAnswer,
    getDeleteAnswer,
} from "@/models/test";

import {
    createTestApi,
    patchTestApi,
    deleteTestApi,
    getTestApi,
    getTestsApi,
    createQuestionApi,
    patchQuestionApi,
    deleteQuestionApi,
    createAnswerApi,
    patchAnswerApi,
    changeAnswerPositionApi,
    deleteAnswerApi,
} from "./api";

import { ITest } from "@/interface/ITest";
import { IMeta } from "@/interface/IMeta";
import { IQuestionConfig } from "@/interface/IQuestionConfig";
import { IQuestion } from "@/interface/IQuestion";
import { IAnswerConfig } from "@/interface/IAnswerConfig";
import { IAnswer } from "@/interface/IAnswer";
import { ITestsConfig } from "@/interface/ITestsConfig";

function* handleCreateTestSaga(action: PayloadAction<string>) {
    try {
        yield put(setRequest());

        const test: ITest = yield call(createTestApi, action.payload);
        yield put(getCreateTest(test));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handlePatchTestSaga(action: PayloadAction<ITest>) {
    try {
        yield put(setRequest());

        const test: ITest = yield call(patchTestApi, action.payload);
        yield put(getPatchTest(test));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleDeleteTestSaga(action: PayloadAction<number>) {
    try {
        yield put(setRequest());

        const id: number = yield call(deleteTestApi, action.payload);
        yield put(getDeleteTest(id));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleGetTestSaga(action: PayloadAction<number>) {
    try {
        yield put(setRequest());

        const test: ITest = yield call(getTestApi, action.payload);
        yield put(getTest(test));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleGetTestsSaga(action: PayloadAction<ITestsConfig>) {
    try {
        yield put(setRequest());

        const data: { tests: ITest[]; meta: IMeta } = yield call(
            getTestsApi,
            action.payload
        );

        yield put(getTests(data));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleCreateQuestionSaga(
    action: PayloadAction<{ config: IQuestionConfig; id: number }>
) {
    try {
        yield put(setRequest());

        const { config, id } = action.payload;

        const data: IQuestion = yield call(createQuestionApi, config, id);
        yield put(getCreateQuestion(data));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handlePatchQuestionSaga(action: PayloadAction<IQuestion>) {
    try {
        yield put(setRequest());

        const data: IQuestion = yield call(patchQuestionApi, action.payload);
        yield put(getPatchQuestion(data));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleDeleteQuestionSaga(action: PayloadAction<number>) {
    try {
        yield put(setRequest());

        const id: number = yield call(deleteQuestionApi, action.payload);
        yield put(getDeleteQuestion(id));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleCreateAnswerSaga(
    action: PayloadAction<{ config: IAnswerConfig; id: number }>
) {
    try {
        yield put(setRequest());

        const { config, id } = action.payload;

        const data: IAnswer = yield call(createAnswerApi, config, id);
        yield put(getCreateAnswer({ data, id }));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handlePatchAnswerSaga(
    action: PayloadAction<{ data: IAnswer; id: number }>
) {
    try {
        yield put(setRequest());

        const { data, id } = action.payload;

        const answer: IAnswer = yield call(patchAnswerApi, data);
        yield put(getPatchAnswer({ answer, id }));

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleChangeAnswerPositionSaga(
    action: PayloadAction<{
        position: number;
        answer_id: number;
        question_id: number;
    }>
) {
    try {
        yield put(setRequest());

        const { position, answer_id, question_id } = action.payload;

        yield call(changeAnswerPositionApi, position, answer_id);
        yield put(
            getChangeAnswerPosition({ position, answer_id, question_id })
        );

        yield put(getRequest());
    } catch (error) {
        yield put(getFailure((error as Error).message));
    }
}

function* handleDeleteAnswerSaga(
    action: PayloadAction<{ answer_id: number; question_id: number }>
) {
    try {
        yield put(setRequest());

        const { answer_id, question_id } = action.payload;

        yield call(deleteAnswerApi, answer_id);
        yield put(getDeleteAnswer({ answer_id, question_id }));

        yield put(getRequest());
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

    yield takeEvery(setCreateQuestion.type, handleCreateQuestionSaga);
    yield takeEvery(setPatchQuestion.type, handlePatchQuestionSaga);
    yield takeEvery(setDeleteQuestion.type, handleDeleteQuestionSaga);

    yield takeEvery(setCreateAnswer.type, handleCreateAnswerSaga);
    yield takeEvery(setPatchAnswer.type, handlePatchAnswerSaga);
    yield takeEvery(
        setChangeAnswerPosition.type,
        handleChangeAnswerPositionSaga
    );
    yield takeEvery(setDeleteAnswer.type, handleDeleteAnswerSaga);
}
