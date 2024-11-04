import { parseCookies } from "nookies";

import { localAxios } from "@/lib/localAxios";

import { ITest } from "@/interface/ITest";
import { IMeta } from "@/interface/IMeta";

import { SESSION_ID } from "@/constants/cookieNames";
import {
    CREATE_TEST,
    PATCH_TEST,
    DELETE_TEST,
    GET_TEST,
    GET_TESTS,
} from "@/constants/testApiKeys";

export const createTestApi = async (title: string): Promise<void> => {
    const cookies = parseCookies();

    const { data } = await localAxios.post("/api/tests", {
        key: CREATE_TEST,
        session_id: cookies[SESSION_ID],
        title: title,
    });

    return data;
};

export const patchTestApi = async (test: ITest): Promise<ITest> => {
    const cookies = parseCookies();

    const { data } = await localAxios.post("/api/tests", {
        key: PATCH_TEST,
        session_id: cookies[SESSION_ID],
        test: test,
    });

    return data;
};

export const deleteTestApi = async (id: number): Promise<void> => {
    const cookies = parseCookies();

    const { data } = await localAxios.post("/api/tests", {
        key: DELETE_TEST,
        session_id: cookies[SESSION_ID],
        id: id,
    });

    return data;
};

export const getTestApi = async (id: number): Promise<ITest> => {
    const cookies = parseCookies();

    const { data } = await localAxios.post("/api/tests", {
        key: GET_TEST,
        session_id: cookies[SESSION_ID],
        id: id,
    });

    return data;
};

export const getTestsApi = async (
    session_id: string | null
): Promise<{
    tests: ITest[];
    meta: IMeta;
}> => {
    const cookies = parseCookies();

    const { data } = await localAxios.post("/api/tests", {
        key: GET_TESTS,
        session_id:
            Object.keys(cookies).length === 0
                ? session_id
                : cookies[SESSION_ID],
    });

    return data;
};
