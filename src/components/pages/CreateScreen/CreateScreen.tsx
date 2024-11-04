import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAction } from "@/hooks/useAction";
import {
    setCreateTest,
    setPatchTest,
    setDeleteTest,
    setTest,
    setTests,
} from "@/models/tests";

import { ICreateScreen } from "@/interface/ICreateScreen";

import Header from "@components/Header";
import Input from "@components/Input";

import s from "./CreateScreen.module.scss";

const CreateScreen: React.FC<ICreateScreen> = ({ user }) => {
    const router = useRouter();

    const [testName, setTestName] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTestName(event.target.value);
    };

    const handleTestCreate = useAction(setCreateTest);
    const handleGetTest = useAction(setTest);
    const handleGetTests = useAction(setTests);
    const handleTestDelete = useAction(setDeleteTest);

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
                            onClick={() => handleTestCreate(testName)}
                        >
                            Create
                        </button>
                        <button
                            className={s.createScreen__button}
                            onClick={() => handleGetTest(parseInt(testName))}
                        >
                            Test
                        </button>
                        <button
                            className={s.createScreen__button}
                            onClick={() => handleGetTests()}
                        >
                            Tests
                        </button>
                        <button
                            className={s.createScreen__button}
                            onClick={() => handleTestDelete(parseInt(testName))}
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
