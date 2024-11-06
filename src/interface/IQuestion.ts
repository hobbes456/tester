import { IQuestionConfig } from "./IQuestionConfig";

export interface IQuestion extends IQuestionConfig {
    id: number;
    answers: [];
}
