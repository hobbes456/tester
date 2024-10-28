import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ICreateScreen } from "@/interface/ICreateScreen";

import Header from "@components/Header";
import Input from "@components/Input";

import s from "./CreateScreen.module.scss";

import { createTest } from "@/models/tests/api";

const CreateScreen: React.FC<ICreateScreen> = ({ user }) => {
    const router = useRouter();

    const [testName, setTestName] = useState<string>(
        "Правила дорожного движения"
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTestName(event.target.value);
    };

    const handleTestCreate = async () => {
        await createTest(testName);
    };

    const handleTestDelete = () => setTestName("");

    useEffect(() => {
        if (!user?.is_admin) router.push("/main");
    }, [user?.is_admin, router]);

    return (
        <div className={s.createScreen}>
            {user?.is_admin && (
                <>
                    <Header user={user} />
                    <h1 className={s.createScreen__title}>Create a test</h1>
                    <Input
                        value={testName}
                        onChange={handleChange}
                        placeholder="Enter test name"
                    />
                    <div className={s.createScreen__buttons}>
                        <button
                            className={s.createScreen__button}
                            onClick={handleTestCreate}
                        >
                            Create
                        </button>
                        <button
                            className={s.createScreen__button}
                            onClick={handleTestDelete}
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CreateScreen;
