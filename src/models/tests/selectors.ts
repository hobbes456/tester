import { RootState } from "@/store";

export const test = (state: RootState) => state.tests.test;
export const tests = (state: RootState) => state.tests.tests;
export const meta = (state: RootState) => state.tests.meta;
export const isLoading = (state: RootState) => state.tests.isLoading;
export const isError = (state: RootState) => state.tests.isError;
