import { IUser } from "./IUser";
import { ITest } from "./ITest";

export interface IMainScreen {
    user: IUser;
    tests: ITest[];
}
