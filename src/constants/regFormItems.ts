import { IUser } from "@/interface/IUser";
import { IFormItem } from "@/interface/IFormItem";

import { authFormItems } from "./authFormItems";
import { formErrorMessages } from "./formErrorsMessages";

const {
    REQUIRED_ERROR_MESSAGE,
    IS_NOT_CONFIRM_PASSWORD,
    IS_NOT_VALID_BOOLEAN,
} = formErrorMessages;

const isPassConfirm = (confirmPassword: string, formValues: IUser) =>
    confirmPassword !== formValues.password ? IS_NOT_CONFIRM_PASSWORD : true;

const isValidBoolean = (value: string) =>
    value === "true" || value === "false" ? true : IS_NOT_VALID_BOOLEAN;

export const regFormItems: IFormItem[] = authFormItems.concat([
    {
        title: "Password confirmation",
        id: "password_confirmation",
        type: "password",
        placeholder: "Confirm the password",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            validate: (value: string, formValues: IUser) =>
                isPassConfirm(value, formValues),
        },
    },
    {
        title: "Is admin",
        id: "is_admin",
        type: "text",
        placeholder: "Enter true or false",
        validations: {
            required: { value: true, message: REQUIRED_ERROR_MESSAGE },
            validate: (value: string) => isValidBoolean(value),
        },
    },
]);
