import { IQuestion } from "./IQuestion";

export interface ITest {
    id: number;
    title: string;
    created_at: string;
    questions: IQuestion[];
}
