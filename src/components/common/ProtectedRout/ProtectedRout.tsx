import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

type ProtectedRoutProps = {
    children: React.ReactNode;
};

const ProtectedRout: React.FC<ProtectedRoutProps> = ({ children }) => {
    const router = useRouter();

    const isAuth = useAppSelector(userSelectors.isAuth);

    useEffect(() => {
        if (!isAuth) router.push("/login");
    }, [isAuth, router]);

    return children;
};

export default ProtectedRout;
