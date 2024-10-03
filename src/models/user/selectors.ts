import { RootState } from "@/store";

export const isAuth = (state: RootState) => state.user.isAuthenticated;
export const user = (state: RootState) => state.user.user;
export const isLoading = (state: RootState) => state.user.isLoading;
export const isError = (state: RootState) => state.user.isError;
