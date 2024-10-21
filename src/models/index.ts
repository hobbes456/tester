import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import userSlice from "@/models/user";

const combinedReducer = combineReducers({
    user: userSlice,
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
// export const rootReducer = combinedReducer;
