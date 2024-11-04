import React from "react";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";
import { testsSelectors } from "@/models/tests";

import AppLoader from "@components/AppLoader";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const loadingUser = useAppSelector(userSelectors.isLoading);
    const loadingTests = useAppSelector(testsSelectors.isLoading);

    return loadingUser || loadingTests ? <AppLoader /> : children;
};

export default Layout;
