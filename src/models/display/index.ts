import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export * as displaySelectors from "./selectors";

interface InitialStateUserProps {
    isWelcomeDone: boolean;
}

const initialState: InitialStateUserProps = {
    isWelcomeDone: false,
};

const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        setWelcomeDone(state, action: PayloadAction<boolean>) {
            state.isWelcomeDone = action.payload;
        },
    },
});

export const { setWelcomeDone } = displaySlice.actions;

export default displaySlice.reducer;
