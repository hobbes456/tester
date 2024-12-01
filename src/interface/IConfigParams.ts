import { DESC, ASC } from "@/constants/sortParams";

export interface IConfigParams {
    page: number;
    per: number;
    search: string;
    sort: typeof ASC | typeof DESC;
}
