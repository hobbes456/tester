import axios from "axios";

export const fetchData = axios.create({
    baseURL: "https://interns-test-fe.snp.agency/api/v1/",
    headers: {
        Accept: "application/json",
        "scope-key": "Y@<&8>K%=6S?#L5wD3kqQ(",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
