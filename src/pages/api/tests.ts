// import type { NextApiRequest, NextApiResponse } from "next";

// import { fetchData } from "@/lib/fetchData";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     try {
//         fetchData.defaults.headers["Authorization"] = `Bearer ${session_id}`;

//         console.log(req.body);

//         fetchData.defaults.auth = {
//             username: "hobbes",
//             password: "123456",
//         };

//         await fetchData.post("/tests", req.body);

//         return res.status(200);
//     } catch (error) {
//         return res.status(401).send((error as Error).message);
//     }
// }
