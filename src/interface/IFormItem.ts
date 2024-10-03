import { IUser } from "./IUser";

export interface IFormItem {
    title: string;
    id: "username" | "password" | "password_confirmation" | "is_admin";
    type: string;
    placeholder: string;
    validations?: {
        [index: string]:
            | { value: unknown; message: string }
            | ((value: string) => string | boolean)
            | ((value: string, subValue: IUser) => string | boolean);
    };
}
