import type { NextApiRequest, NextApiResponse } from "next";

import { fetchData } from "@/lib/fetchData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { data, headers } = await fetchData.post("/signin", req.body);

        const cookie = headers["set-cookie"];

        if (cookie) {
            const sessionCookie = cookie[0].split(";")[0].split("=")[1];

            return res.status(200).send({ user: data, cookie: sessionCookie });
        }

        return res.status(200).send({ user: data });
    } catch (error) {
        return res.status(500).send((error as Error).message);
    }
}
