import { useEffect } from "react";

import s from "./ModalWindow.module.scss";

type ModalWindowProps = {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
};

const ModalWindow: React.FC<ModalWindowProps> = ({
    children,
    title,
    onClose,
}) => {
    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
    };

    useEffect(() => {
        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className={s.modalWindow}>
            <div onClick={onClose} className={s.modalWindow__field} />
            <div className={s.modalWindow__content}>
                <h1 className={s.modalWindow__title}>{title}</h1>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
