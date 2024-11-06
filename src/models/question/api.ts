import { IQuestionConfig } from "@/interface/IQuestionConfig";
import { IQuestion } from "@/interface/IQuestion";

import { apiRequest } from "@/constants/apiRequest";
import {
    CREATE_QUESTION,
    PATCH_QUESTION,
    DELETE_QUESTION,
} from "@/constants/questionApiKeys";
import { QUESTIONS_API } from "@/constants/localUrls";

export const createQuestionApi = async (
    question_config: IQuestionConfig,
    id: number
) => await apiRequest(CREATE_QUESTION, QUESTIONS_API, { question_config, id });

export const patchQuestionApi = async (question: IQuestion) =>
    await apiRequest(PATCH_QUESTION, QUESTIONS_API, { question });

export const deleteQuestionApi = async (id: number) =>
    await apiRequest(DELETE_QUESTION, QUESTIONS_API, { id });
