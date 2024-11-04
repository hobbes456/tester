import type { NextApiRequest, NextApiResponse } from "next";

import { fetchData } from "@/lib/fetchData";

import { SESSION_ID } from "@/constants/cookieNames";
import {
    CREATE_TEST,
    PATCH_TEST,
    DELETE_TEST,
    GET_TEST,
    GET_TESTS,
} from "@/constants/testApiKeys";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const {
            key,
            session_id,
            title = null,
            test = null,
            id = null,
        } = req.body;

        fetchData.defaults.headers.Cookie = session_id
            ? `${SESSION_ID}=${session_id}`
            : "null";

        switch (key) {
            case CREATE_TEST: {
                const { data, status } = await fetchData.post(
                    "/tests",
                    JSON.stringify({ title })
                );

                return res.status(status).send(data);
            }

            case PATCH_TEST: {
                const { id } = test;

                const { data, status } = await fetchData.patch(
                    `/tests/${id}`,
                    test
                );

                return res.status(status).send(data);
            }

            case DELETE_TEST: {
                const { status } = await fetchData.delete(`/tests/${id}`);

                return res.status(status).send(id);
            }

            case GET_TEST: {
                const { data, status } = await fetchData.get(`/tests/${id}`);

                return res.status(status).send(data);
            }

            case GET_TESTS: {
                // const config = {
                //     params: {
                //         per: 20,
                //     },
                // };

                // const { data, status } = await fetchData.get("/tests", config);
                const { data, status } = await fetchData.get("/tests");

                return res.status(status).send(data);
            }
        }
    } catch (error) {
        console.error("API error:", error);

        return res.status(500).send((error as Error).message);
    }
}
