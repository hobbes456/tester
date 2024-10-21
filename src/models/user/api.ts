import { setCookie } from "nookies";

import { fetchData } from "@/lib/fetchData";

import { IUser } from "@/interface/IUser";

export const userRegister = async (data: IUser): Promise<IUser> => {
    const response = await fetchData.post("/signup", data);
    return response.data;
};

export const userLogin = async (data: IUser): Promise<IUser> => {
    const response = await fetchData.post("/signin", data);

    console.log(response);

    // _session_id: ?

    setCookie(null, "username", response.data.username, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });

    return response.data;
};

export const currentUser = async (): Promise<IUser> => {
    const response = await fetchData.get("/users/current");
    return response.data;
};

export const userLogout = async (): Promise<void> => {
    await fetchData.delete("/logout");
};
