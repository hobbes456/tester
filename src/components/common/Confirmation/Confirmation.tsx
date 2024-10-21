import React from "react";

import s from "./Confirmation.module.scss";

type ConfirmationProps = {
    onClose: () => void;
};

const Confirmation: React.FC<ConfirmationProps> = ({ onClose }) => {
    const handleClick = () => console.log(1);

    return (
        <div className={s.confirmation}>
            <p>Start taking the selected test?</p>
            <div className={s.confirmation__buttons}>
                <button
                    className={s.confirmation__button}
                    onClick={handleClick}
                >
                    Yes
                </button>
                <button className={s.confirmation__button} onClick={onClose}>
                    No
                </button>
            </div>
        </div>
    );
};

export default Confirmation;
