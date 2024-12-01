import { RootState } from "@/store";

export const test = (state: RootState) => state.test.test;
export const tests = (state: RootState) => state.test.tests;
export const config = (state: RootState) => state.test.config;
export const totalPages = (state: RootState) => state.test.meta.total_pages;
export const totalCount = (state: RootState) => state.test.meta.total_count;
export const isLoading = (state: RootState) => state.test.isLoading;
export const isError = (state: RootState) => state.test.isError;
