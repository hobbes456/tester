import type { NextApiRequest, NextApiResponse } from "next";

import { fetchData } from "@/lib/fetchData";

import { SESSION_ID } from "@/constants/cookieNames";
import {
    CREATE_QUESTION,
    PATCH_QUESTION,
    DELETE_QUESTION,
} from "@/constants/questionApiKeys";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const {
            key,
            session_id,
            question_config = null,
            question = null,
            id,
        } = req.body;

        fetchData.defaults.headers.Cookie = session_id
            ? `${SESSION_ID}=${session_id}`
            : "null";

        switch (key) {
            case CREATE_QUESTION: {
                const { data, status } = await fetchData.post(
                    `/tests/${id}/questions`,
                    question_config
                );

                return res.status(status).send(data);
            }

            case PATCH_QUESTION: {
                const { id } = question;

                const { data, status } = await fetchData.patch(
                    `/questions/${id}`,
                    question
                );

                return res.status(status).send(data);
            }

            case DELETE_QUESTION: {
                const { status } = await fetchData.delete(`/questions/${id}`);

                return res.status(status).send(id);
            }
        }
    } catch (error) {
        return res.status(500).send((error as Error).message);
    }
}
