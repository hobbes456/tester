import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import userSlice from "@/models/user";

const combinedReducer = combineReducers({
    user: userSlice,
});

export const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        console.log(1234)
        return {
            ...state,
            ...action.payload,
        };
    }

    return combinedReducer(state, action);
};
