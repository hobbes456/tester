import React from "react";

import s from "./Confirmation.module.scss";

type ConfirmationProps = {
    text: string;
    onConfirm: () => void;
    onFailure: () => void;
};

const Confirmation: React.FC<ConfirmationProps> = ({
    text,
    onConfirm,
    onFailure,
}) => {
    return (
        <div className={s.confirmation}>
            <p>{text}</p>
            <div className={s.confirmation__buttons}>
                <button className={s.confirmation__button} onClick={onConfirm}>
                    Yes
                </button>
                <button className={s.confirmation__button} onClick={onFailure}>
                    No
                </button>
            </div>
        </div>
    );
};

export default Confirmation;
