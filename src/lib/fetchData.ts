import axios from "axios";

import { BASE_URL } from "@/constants/baseUrl";
import { SCOPE_KEY } from "@/constants/scopeKey";

export const fetchData = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "scope-key": SCOPE_KEY,
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
