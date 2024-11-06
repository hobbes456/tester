import { ITest } from "@/interface/ITest";
import { IMeta } from "@/interface/IMeta";

import { apiRequest } from "@/constants/apiRequest";
import {
    CREATE_TEST,
    PATCH_TEST,
    DELETE_TEST,
    GET_TEST,
    GET_TESTS,
} from "@/constants/testApiKeys";
import { TESTS_API } from "@/constants/localUrls";

export const createTestApi = async (title: string): Promise<void> =>
    apiRequest(CREATE_TEST, TESTS_API, { title });

export const patchTestApi = async (test: ITest): Promise<ITest> =>
    apiRequest(PATCH_TEST, TESTS_API, { test });

export const deleteTestApi = async (id: number): Promise<void> =>
    apiRequest(DELETE_TEST, TESTS_API, { id });

export const getTestApi = async (id: number): Promise<ITest> =>
    apiRequest(GET_TEST, TESTS_API, { id });

export const getTestsApi = async (
    session_id: string | null
): Promise<{
    tests: ITest[];
    meta: IMeta;
}> => await apiRequest(GET_TESTS, TESTS_API, {}, session_id);
