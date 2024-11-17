/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITest } from "@/interface/ITest";
import { IMeta } from "@/interface/IMeta";
import { IQuestionConfig } from "@/interface/IQuestionConfig";
import { IQuestion } from "@/interface/IQuestion";
import { IAnswerConfig } from "@/interface/IAnswerConfig";
import { IAnswer } from "@/interface/IAnswer";

export * as testsSelectors from "./selectors";

interface InitialStateTestProps {
    currentTest: ITest | null;
    tests: ITest[];
    meta: IMeta;
    isLoading: boolean;
    isError: string | null;
}

const initialState: InitialStateTestProps = {
    currentTest: null,
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
        getRequest(state) {
            state.isLoading = false;
        },
        getFailure(state, action: PayloadAction<string>) {
            state.isError = action.payload;
            state.isLoading = false;
        },
        setCreateTest() {},
        getCreateTest(state, action: PayloadAction<ITest>) {
            state.currentTest = action.payload;
        },
        setPatchTest() {},
        getPatchTest(state, action: PayloadAction<ITest>) {
            const { id } = action.payload;

            state.tests = state.tests.map((test) =>
                test.id !== id ? test : { ...action.payload }
            );
        },
        setDeleteTest() {},
        getDeleteTest(state, action: PayloadAction<number>) {
            state.tests = state.tests.filter(
                (test) => test.id !== action.payload
            );

            state.currentTest =
                state.currentTest?.id === action.payload
                    ? null
                    : state.currentTest;
        },
        setTest() {},
        getTest(state, action: PayloadAction<ITest>) {
            state.currentTest = action.payload;
        },
        setTests(state, action: PayloadAction<string | null>) {},
        getTests(
            state,
            action: PayloadAction<{ tests: ITest[]; meta: IMeta }>
        ) {
            state.tests = action.payload.tests;
            state.meta = action.payload.meta;
        },

        setCreateQuestion(
            state,
            action: PayloadAction<{ config: IQuestionConfig; id: number }>
        ) {},
        getCreateQuestion(state, action: PayloadAction<IQuestion>) {
            if (state.currentTest)
                state.currentTest.questions.push(action.payload);
        },
        setPatchQuestion(state, action: PayloadAction<IQuestion>) {},
        getPatchQuestion(state, action: PayloadAction<IQuestion>) {
            if (state.currentTest) {
                const { id } = action.payload;

                state.currentTest.questions = state.currentTest.questions.map(
                    (question) =>
                        question.id === id
                            ? {
                                  ...action.payload,
                              }
                            : question
                );
            }
        },
        setDeleteQuestion(state, action: PayloadAction<number>) {},
        getDeleteQuestion(state, action: PayloadAction<number>) {
            if (state.currentTest)
                state.currentTest.questions =
                    state.currentTest.questions.filter(
                        (question) => question.id !== action.payload
                    );
        },

        setCreateAnswer(
            state,
            action: PayloadAction<{ config: IAnswerConfig; id: number }>
        ) {},
        getCreateAnswer(
            state,
            action: PayloadAction<{ data: IAnswer; id: number }>
        ) {
            if (state.currentTest) {
                const { data, id } = action.payload;

                state.currentTest.questions = state.currentTest.questions.map(
                    (question) =>
                        question.id === id
                            ? {
                                  ...question,
                                  answers: [...question.answers, data],
                              }
                            : question
                );
            }
        },
        setPatchAnswer(
            state,
            action: PayloadAction<{ data: IAnswer; id: number }>
        ) {},
        getPatchAnswer(
            state,
            action: PayloadAction<{ answer: IAnswer; id: number }>
        ) {
            if (state.currentTest) {
                const { answer, id } = action.payload;

                state.currentTest.questions = state.currentTest.questions.map(
                    (question) =>
                        question.id === id
                            ? {
                                  ...question,
                                  answers: [
                                      ...question.answers.map((item) =>
                                          item.id === answer.id ? answer : item
                                      ),
                                  ],
                              }
                            : question
                );
            }
        },
        setChangeAnswerPosition(
            state,
            action: PayloadAction<{
                position: number;
                answer_id: number;
                question_id: number;
            }>
        ) {},
        getChangeAnswerPosition(
            state,
            action: PayloadAction<{
                position: number;
                answer_id: number;
                question_id: number;
            }>
        ) {
            if (state.currentTest) {
                const { position, answer_id, question_id } = action.payload;

                console.log(position, answer_id, question_id);

                // state.currentTest.questions = state.currentTest.questions.map(
                //     (question) =>
                //         question.id === question_id
                //             ? {
                //                   ...question,
                //                   answers: [
                //                       ...question.answers.filter(
                //                           (answer) => answer.id !== answer_id
                //                       ),
                //                   ],
                //               }
                //             : question
                // );
            }
        },
        setDeleteAnswer(
            state,
            action: PayloadAction<{ answer_id: number; question_id: number }>
        ) {},
        getDeleteAnswer(
            state,
            action: PayloadAction<{ answer_id: number; question_id: number }>
        ) {
            if (state.currentTest) {
                const { answer_id, question_id } = action.payload;

                state.currentTest.questions = state.currentTest.questions.map(
                    (question) =>
                        question.id === question_id
                            ? {
                                  ...question,
                                  answers: [
                                      ...question.answers.filter(
                                          (answer) => answer.id !== answer_id
                                      ),
                                  ],
                              }
                            : question
                );
            }
        },
    },
});

export const {
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
} = testSlice.actions;

export default testSlice.reducer;
