import { useCallback } from "react";

import { useAppDispatch } from "./useAppDispatch";

export const useAction = (action: Function) => {
    const dispatch = useAppDispatch();

    return useCallback(
        (arg?: unknown) => dispatch(action(arg)),
        [dispatch, action]
    );
};
