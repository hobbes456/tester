import React, { useState } from "react";
import Image from "next/image";

import { IUser } from "@/interface/IUser";
import { ITest } from "@/interface/ITest";

import ModalWindow from "@components/ModalWindow";
import Confirmation from "@components/Confirmation";

import svgs from "@/constants/svgs";
import { formatDate } from "@/constants/formatDate";

import s from "./TestCard.module.scss";

interface TestCardProps {
    user: IUser;
    test: ITest;
}

const TestCard: React.FC<TestCardProps> = ({ user, test }) => {
    const { is_admin } = user;
    const { id, title, created_at, questions } = test;

    const [showModal, setShowModal] = useState<boolean>(false);

    const { toolSvg } = svgs;

    const handleClose = () => setShowModal((prev) => !prev);

    return (
        <div className={s.testCard}>
            <div className={s.testCard__information} onClick={handleClose}>
                <h1 className={s.testCard__title}>{title}</h1>
                <p className={s.testCard__text}>Id: {id}</p>
                <p className={s.testCard__text}>
                    Creation date: {formatDate(created_at)}
                </p>
                <p className={s.testCard__text}>
                    Number of questions: {questions.length}
                </p>
            </div>
            {is_admin && (
                <Image
                    className={s.testCard__tool}
                    src={toolSvg.src}
                    alt="Edit tool"
                    width={30}
                    height={30}
                />
            )}
            {showModal && (
                <ModalWindow title="Confirmation" onClose={handleClose}>
                    <Confirmation
                        text={"Start taking the selected test?"}
                        onConfirm={() => console.log(1)}
                        onFailure={handleClose}
                    />
                </ModalWindow>
            )}
        </div>
    );
};

export default TestCard;
