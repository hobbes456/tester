import { IFormItem } from "@/interface/IFormItem";

import { formErrorMessages } from "./formErrorsMessages";

const {
    REQUIRED_ERROR_MESSAGE,
    MINLENGTH_ERROR_MESSAGE,
    MAXLENGTH_ERROR_MESSAGE,
    IS_EMPTY,
} = formErrorMessages;

const isEmpty = (value: string): string | boolean =>
    value.trim() === "" ? IS_EMPTY : true;

export const loginFormItems: IFormItem[] = [
    {
        title: "Login",
        id: "login",
        type: "text",
        placeholder: "Inter the login",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            minLength: { value: 2, message: MINLENGTH_ERROR_MESSAGE },
            maxLength: { value: 20, message: MAXLENGTH_ERROR_MESSAGE },
            validate: (value: string) => isEmpty(value),
        },
    },
    {
        title: "Password",
        id: "password",
        type: "password",
        placeholder: "Inter the password",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            minLength: { value: 2, message: MINLENGTH_ERROR_MESSAGE },
            maxLength: { value: 20, message: MAXLENGTH_ERROR_MESSAGE },
            validate: (value: string) => isEmpty(value),
        },
    },
];
