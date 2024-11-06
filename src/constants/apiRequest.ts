import { parseCookies } from "nookies";

import { localAxios } from "@/lib/localAxios";

import { SESSION_ID } from "./cookieNames";

const getSessionId = (): string | null => {
    const cookies = parseCookies();

    return cookies[SESSION_ID] || null;
};

export const apiRequest = async (
    key: string,
    url: string,
    data: object,
    current_session_id?: string | null
) => {
    const session_id = current_session_id || getSessionId();

    const response = await localAxios.post(url, {
        key,
        session_id,
        ...data,
    });

    return response.data;
};
