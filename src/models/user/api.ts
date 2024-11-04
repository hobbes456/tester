import { destroyCookie, setCookie } from "nookies";

import { fetchData } from "@/lib/fetchData";
import { localAxios } from "@/lib/localAxios";

import { IUser } from "@/interface/IUser";

import { SESSION_ID } from "@/constants/cookieNames";

export const registerUserApi = async (user: IUser): Promise<void> => {
    await fetchData.post("/signup", user);
};

export const loginUserApi = async (user: IUser): Promise<IUser> => {
    const { data } = await localAxios.post("/api/signin", user);

    const cookie = data?.cookie;

    if (cookie) {
        setCookie(null, SESSION_ID, cookie, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
    }

    return data.user;
};

export const currentUserApi = async (
    session_id: string | null
): Promise<IUser> => {
    fetchData.defaults.headers.Cookie = session_id
        ? `${SESSION_ID}=${session_id}`
        : null;

    const { data } = await fetchData.get("/users/current");

    return data;
};

export const logoutUserApi = async (): Promise<void> => {
    await fetchData.delete("/logout");

    destroyCookie(null, SESSION_ID);
};
