import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/interface/IUser";

export * as userSelectors from "./selectors";

interface InitialStateUserProps {
    isAuthenticated: boolean;
    user: IUser | null;
    isLoading: boolean;
    isError: string | null;
}

const initialState: InitialStateUserProps = {
    isAuthenticated: false,
    user: null,
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
        setCurrent(state) {
            state.isLoading = true;
            state.isError = null;
        },
        setLogout() {},
        getSuccess(state, action: PayloadAction<IUser>) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.isLoading = false;
        },
        getFailure(state, action: PayloadAction<string>) {
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
    getSuccess,
    getFailure,
    getLogout,
} = userSlice.actions;

export default userSlice.reducer;
