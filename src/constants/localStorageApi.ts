/* eslint-disable @typescript-eslint/no-explicit-any */
export const setItem = (key: string, value: unknown): void =>
    localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key: string): any => {
    let value;

    if (typeof window !== "undefined") {
        value = localStorage.getItem(key);
    }

    return value ? JSON.parse(value) : null;
};

export const removeItem = (key: string): void => localStorage.removeItem(key);
