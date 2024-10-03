export interface IUser {
    username: string;
    password: string;
    password_confirmation?: string;
    is_admin?: boolean |string;
}
