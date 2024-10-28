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
        setRegister(state) {
            state.isLoading = true;
            state.isError = null;
        },
        setLogin(state) {
            state.isLoading = true;
            state.isError = null;
        },
        setCurrent(state, action: PayloadAction<string | null>) {
            state.isLoading = true;
            state.isError = null;
        },
        setLogout() {},
        getSuccessSignup(state) {
            state.registered = true;
            state.isLoading = false;
        },
        getSuccessSignin(state, action: PayloadAction<IUser>) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.registered = false;
            state.isLoading = false;
        },
        getFailure(state, action: PayloadAction<string>) {
            state.registered = false;
            state.isLoading = false;
            state.isError = action.payload;
        },
        getLogout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const {
    setRegister,
    setLogin,
    setCurrent,
    setLogout,
    getSuccessSignup,
    getSuccessSignin,
    getFailure,
    getLogout,
} = userSlice.actions;

export default userSlice.reducer;
