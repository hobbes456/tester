import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import userSlice from "@/models/user";
import displaySlice from "@/models/display";
import testSlice from "@/models/test";

const combinedReducer = combineReducers({
    user: userSlice,
    display: displaySlice,
    test: testSlice,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rootReducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return combinedReducer(state, action);
    }
};
