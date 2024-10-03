import React from "react";

import { useAppSelector } from "@/hooks/useAppSelector";

import { userSelectors } from "@/models/user";

import AppLoader from "@components/AppLoader";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const isLoading = useAppSelector(userSelectors.isLoading);

    return isLoading ? <AppLoader /> : children;
};

export default Layout;
