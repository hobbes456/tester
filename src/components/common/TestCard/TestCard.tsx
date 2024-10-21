import React, { useState } from "react";
import Image from "next/image";

import { IUser } from "@/interface/IUser";

import ModalWindow from "@components/ModalWindow";
import Confirmation from "@components/Confirmation";

import svgs from "@/constants/svgs";

import s from "./TestCard.module.scss";

interface TestCardProps {
    user: IUser;
}

const TestCard: React.FC<TestCardProps> = ({ user }) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleClose = () => setShowModal((prev) => !prev);

    const { toolSvg } = svgs;

    return (
        <div className={s.testCard}>
            {showModal && (
                <ModalWindow title="Confirmation" onClose={handleClose}>
                    <Confirmation onClose={handleClose} />
                </ModalWindow>
            )}
            <div
                className={s.testCard__information}
                onClick={() => handleClose()}
            >
                <h1 className={s.testCard__title}>
                    Правила дорожного движения
                </h1>
                <p className={s.testCard__text}>Author: {user.username}</p>
                <p className={s.testCard__text}>Creation date: Date create</p>
            </div>
            {user.is_admin && (
                <Image
                    className={s.testCard__tool}
                    src={toolSvg.src}
                    alt="Edit tool"
                    width={30}
                    height={30}
                />
            )}
        </div>
    );
};

export default TestCard;
