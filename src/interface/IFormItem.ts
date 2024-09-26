export interface IFormItem {
    title: string;
    id: "login" | "password";
    type: string;
    placeholder: string;
    validations?: {
        [index: string]:
            | { value: unknown; message: string }
            | ((value: string) => string | boolean);
    };
}
