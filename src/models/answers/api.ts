import { IAnswerConfig } from "@/interface/IAnswerConfig";
import { IAnswer } from "@/interface/IAnswer";

import { apiRequest } from "@/constants/apiRequest";
import {
    CREATE_ANSWER,
    PATCH_ANSWER,
    CHANGE_ANSWER_POSITION,
    DELETE_ANSWER,
} from "@/constants/answersApiKeys";
import { ANSWERS_API } from "@/constants/localUrls";

export const createAnswerApi = async (
    answer_config: IAnswerConfig,
    id: number
) => await apiRequest(CREATE_ANSWER, ANSWERS_API, { answer_config, id });

export const patchAnswerApi = async (answer: IAnswer) =>
    await apiRequest(PATCH_ANSWER, ANSWERS_API, { answer });

export const changeAnswerPositionApi = async (position: number, id: number) =>
    await apiRequest(CHANGE_ANSWER_POSITION, ANSWERS_API, { position, id });

export const deleteAnswerApi = async (id: number) =>
    await apiRequest(DELETE_ANSWER, ANSWERS_API, { id });
