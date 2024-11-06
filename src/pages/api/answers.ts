import type { NextApiRequest, NextApiResponse } from "next";

import { fetchData } from "@/lib/fetchData";

import { SESSION_ID } from "@/constants/cookieNames";
import {
    CREATE_ANSWER,
    PATCH_ANSWER,
    DELETE_ANSWER,
    CHANGE_ANSWER_POSITION,
} from "@/constants/answersApiKeys";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const {
            key,
            session_id,
            answer_config = null,
            answer = null,
            id,
            position = null,
        } = req.body;

        fetchData.defaults.headers.Cookie = session_id
            ? `${SESSION_ID}=${session_id}`
            : "null";

        switch (key) {
            case CREATE_ANSWER: {
                const { data, status } = await fetchData.post(
                    `/questions/${id}/answers`,
                    answer_config
                );

                return res.status(status).send(data);
            }

            case PATCH_ANSWER: {
                const { id } = answer;

                const { data, status } = await fetchData.patch(
                    `/answers/${id}`,
                    answer
                );

                return res.status(status).send(data);
            }

            case CHANGE_ANSWER_POSITION: {
                const { data, status } = await fetchData.patch(
                    `/answers/${id}/insert_at/${position}`
                );

                return res.status(status).send(data);
            }

            case DELETE_ANSWER: {
                const { data, status } = await fetchData.delete(
                    `/answers/${id}`
                );

                return res.status(status).send(data);
            }
        }
    } catch (error) {
        return res.status(500).send((error as Error).message);
    }
}
