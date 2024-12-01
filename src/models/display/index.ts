import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IConfigParams } from "@/interface/IConfigParams";

import { setItem } from "@/constants/localStorageApi";
import { WELCOME_KEY, CONFIG_KEY } from "@/constants/localStorageKeys";
import { DESC } from "@/constants/sortParams";

export * as displaySelectors from "./selectors";

interface InitialStateDisplayProps {
    isWelcome: boolean;
    isParams: IConfigParams;
}

const initialState: InitialStateDisplayProps = {
    isWelcome: false,
    isParams: {
        page: 1,
        per: 5,
        search: "",
        sort: DESC,
    },
};

const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        setWelcome(state, action: PayloadAction<boolean>) {
            state.isWelcome = action.payload;

            setItem(WELCOME_KEY, state.isWelcome);
        },

        setConfig(state, action: PayloadAction<IConfigParams>) {
            Object.assign(state.isParams, action.payload);

            setItem(CONFIG_KEY, state.isParams);
        },
    },
});

export const { setWelcome, setConfig } = displaySlice.actions;

export default displaySlice.reducer;
