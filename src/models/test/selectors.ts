import { RootState } from "@/store";

export const test = (state: RootState) => state.test.test;
export const tests = (state: RootState) => state.test.tests;
export const meta = (state: RootState) => state.test.meta;
export const isLoading = (state: RootState) => state.test.isLoading;
export const isError = (state: RootState) => state.test.isError;
