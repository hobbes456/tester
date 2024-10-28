import { fetchData } from "@/lib/fetchData";

export const createTest = async (title: string): Promise<void> => {
    try {
        const response = await fetchData.post("/tests", title);
        console.log(response);
    } catch (error) {
        console.log((error as Error).message);
    }
};
