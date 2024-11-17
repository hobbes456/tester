import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAction } from "@/hooks/useAction";

import { setCreateTest } from "@/models/test";

import { ICreateScreen } from "@/interface/ICreateScreen";

import Header from "@components/Header";
import Input from "@components/Input";
import ModalWindow from "@components/ModalWindow";
import Confirmation from "@components/Confirmation";

import s from "./CreateScreen.module.scss";

const CreateScreen: React.FC<ICreateScreen> = ({ user }) => {
    const router = useRouter();

    const [testName, setTestName] = useState<string>("");
    const [showConfirmCreateTest, setShowConfirmCreateTest] =
        useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTestName(event.target.value);
    };

    const setCreate = useAction(setCreateTest);

    const handleReset = () => setTestName("");
    const handleCloseConfirmCreate = () =>
        setShowConfirmCreateTest((prev) => !prev);

    const handleCreate = async (name: string) => {
        // setCreate(name);
        handleCloseConfirmCreate();

        router.push(`/create/${name}`);
    };

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
                            onClick={handleCloseConfirmCreate}
                        >
                            Create
                        </button>
                        <button
                            className={s.createScreen__button}
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                    {showConfirmCreateTest && (
                        <ModalWindow
                            title="Confirmation"
                            onClose={handleCloseConfirmCreate}
                        >
                            <Confirmation
                                text={`Do you really want to create a test named "${testName}"?`}
                                onConfirm={() => handleCreate(testName)}
                                onFailure={handleCloseConfirmCreate}
                            />
                        </ModalWindow>
                    )}
                </>
            )}
        </div>
    );
};

export default CreateScreen;
