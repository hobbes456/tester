import { useCallback } from "react";

import { useAppDispatch } from "./useAppDispatch";

import { IUser } from "@/interface/IUser";

export const useAction = (action: Function) => {
    const dispatch = useAppDispatch();

    return useCallback(
        (arg?: IUser | string) => dispatch(action(arg)),
        [dispatch, action]
    );
};
