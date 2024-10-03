import axios from "axios";

import { BASE_URL } from "@/constants/baseUrl";
import { SCOPE_KEY } from "@/constants/scopeKey";

export const fetchData = axios.create({
    baseURL: BASE_URL,
    headers: { "scope-key": SCOPE_KEY },
    withCredentials: true,
});
