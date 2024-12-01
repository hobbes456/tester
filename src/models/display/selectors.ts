import { RootState } from "@/store";

export const isWelcome = (state: RootState) => state.display.isWelcome;
export const isParams = (state: RootState) => state.display.isParams;
