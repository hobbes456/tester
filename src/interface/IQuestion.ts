import { IQuestionConfig } from "./IQuestionConfig";
import { IAnswer } from "./IAnswer";

export interface IQuestion extends IQuestionConfig {
    id: number;
    answers: IAnswer[];
}
