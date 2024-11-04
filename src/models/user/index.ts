/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/interface/IUser";

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
        getFailure(state, action: PayloadAction<string>) {
            state.registered = false;
            state.isLoading = false;
            state.isError = action.payload;
        },
        setRegister() {},
        getRegister(state) {
            state.registered = true;
            state.isLoading = false;
        },
        setLogin() {},
        getLogin(state, action: PayloadAction<IUser>) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.registered = false;
            state.isLoading = false;
        },
        setCurrent(state, action: PayloadAction<string | null>) {},
        setLogout() {},
        getLogout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.isLoading = false;
            state.isError = null;
        },
    },
});

export const {
    setRequest,
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
