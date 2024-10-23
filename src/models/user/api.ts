import axios from "axios";
import { setCookie, destroyCookie } from "nookies";

import { fetchData } from "@/lib/fetchData";

import { IUser } from "@/interface/IUser";

import { SESSION_ID } from "@/constants/cookieNames";

export const userRegister = async (user: IUser): Promise<IUser> => {
    const { data } = await fetchData.post("/signup", user);
    return data;
};

export const userLogin = async (user: IUser): Promise<IUser> => {
    const { data } = await axios.post("/api/signin", user);

    const cookie = data?.cookie;

    setCookie(null, SESSION_ID, cookie, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });

    return data.user;
};

export const currentUser = async (
    session_id: string | null
): Promise<IUser> => {
    fetchData.defaults.headers["Cookie"] = session_id
        ? `${SESSION_ID}=${session_id}`
        : null;

    const { data } = await fetchData.get("/users/current");

    return data;
};

export const userLogout = async (): Promise<void> => {
    await fetchData.delete("/logout");

    destroyCookie(null, SESSION_ID);
};
