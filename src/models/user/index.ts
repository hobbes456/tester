/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/interface/IUser";

import { removeItem } from "@/constants/localStorageApi";
import { WELCOME_KEY, CONFIG_KEY } from "@/constants/localStorageKeys";

export * as userSelectors from "./selectors";

interface InitialStateUserProps {
    isAuthenticated: boolean;
    user: IUser | null;
    registered: boolean;
    isLoading: boolean;
    isError: string | null;
}

const initialState: InitialStateUserProps = {
    isAuthenticated: false,
    user: null,
    registered: false,
    isLoading: false,
    isError: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setRequest(state) {
            state.isLoading = true;
            state.isError = null;
        },
        getRequest(state) {
            state.isLoading = false;
        },
        getFailure(state, action: PayloadAction<string>) {
            state.registered = false;
            state.isLoading = false;
            state.isError = action.payload;
        },
        setRegister() {},
        getRegister(state) {
            state.registered = true;
        },
        setLogin() {},
        getLogin(state, action: PayloadAction<IUser>) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.registered = false;
        },
        setCurrent(state, action: PayloadAction<string | null>) {},
        setLogout() {},
        getLogout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.isError = null;

            removeItem(WELCOME_KEY);
            removeItem(CONFIG_KEY);
        },
    },
});

export const {
    setRequest,
    getRequest,
    getFailure,
    setRegister,
    getRegister,
    setLogin,
    getLogin,
    setCurrent,
    setLogout,
    getLogout,
} = userSlice.actions;

export default userSlice.reducer;
