import { useState } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import ModalWindow from "@components/ModalWindow";
import Welcome from "@components/Welcome";

const MainScreen = () => {
    const [showWelcome, setShowWelcome] = useState<boolean>(true);

    const handleClose = () => setShowWelcome(false);

    const user = useAppSelector(userSelectors.user);

    return (
        <div>
            {showWelcome && (
                <ModalWindow title="Welcome" onClose={handleClose}>
                    {user && <Welcome user={user} />}
                </ModalWindow>
            )}
        </div>
    );
};

export default MainScreen;
