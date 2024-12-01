import { ITest } from "@/interface/ITest";
import { IMeta } from "@/interface/IMeta";
import { ITestsConfig } from "@/interface/ITestsConfig";
import { IQuestionConfig } from "@/interface/IQuestionConfig";
import { IQuestion } from "@/interface/IQuestion";
import { IAnswerConfig } from "@/interface/IAnswerConfig";
import { IAnswer } from "@/interface/IAnswer";

import { apiRequest } from "@/constants/apiRequest";
import {
    CREATE_TEST,
    PATCH_TEST,
    DELETE_TEST,
    GET_TEST,
    GET_TESTS,
} from "@/constants/testApiKeys";
import {
    CREATE_QUESTION,
    PATCH_QUESTION,
    DELETE_QUESTION,
} from "@/constants/questionApiKeys";
import {
    CREATE_ANSWER,
    PATCH_ANSWER,
    CHANGE_ANSWER_POSITION,
    DELETE_ANSWER,
} from "@/constants/answersApiKeys";
import { TESTS_API, QUESTIONS_API, ANSWERS_API } from "@/constants/localUrls";

export const createTestApi = async (title: string): Promise<void> =>
    apiRequest(CREATE_TEST, TESTS_API, { title });

export const patchTestApi = async (test: ITest): Promise<ITest> =>
    apiRequest(PATCH_TEST, TESTS_API, { test });

export const deleteTestApi = async (id: number): Promise<void> =>
    apiRequest(DELETE_TEST, TESTS_API, { id });

export const getTestApi = async (id: number): Promise<ITest> =>
    apiRequest(GET_TEST, TESTS_API, { id });

export const getTestsApi = async (
    config: ITestsConfig
): Promise<{
    tests: ITest[];
    meta: IMeta;
}> => await apiRequest(GET_TESTS, TESTS_API, { config });

export const createQuestionApi = async (
    config: IQuestionConfig,
    id: number
): Promise<IQuestion> =>
    await apiRequest(CREATE_QUESTION, QUESTIONS_API, { config, id });

export const patchQuestionApi = async (
    question: IQuestion
): Promise<IQuestion> =>
    await apiRequest(PATCH_QUESTION, QUESTIONS_API, { question });

export const deleteQuestionApi = async (id: number): Promise<number> =>
    await apiRequest(DELETE_QUESTION, QUESTIONS_API, { id });

export const createAnswerApi = async (
    config: IAnswerConfig,
    id: number
): Promise<IAnswer> =>
    await apiRequest(CREATE_ANSWER, ANSWERS_API, { config, id });

export const patchAnswerApi = async (answer: IAnswer): Promise<IAnswer> =>
    await apiRequest(PATCH_ANSWER, ANSWERS_API, { answer });

export const changeAnswerPositionApi = async (
    position: number,
    id: number
): Promise<void> =>
    await apiRequest(CHANGE_ANSWER_POSITION, ANSWERS_API, { position, id });

export const deleteAnswerApi = async (id: number): Promise<void> =>
    await apiRequest(DELETE_ANSWER, ANSWERS_API, { id });
