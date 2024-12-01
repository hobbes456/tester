import React from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { useAction } from "@/hooks/useAction";

import { setConfig } from "@/models/display";
import { testsSelectors } from "@/models/test";

import s from "./Pagination.module.scss";

type PaginationProps = {
    currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
    const totalPages = useAppSelector(testsSelectors.totalPages);

    const handleConfig = useAction(setConfig);

    const handleIncrement = () => handleConfig({ page: currentPage + 1 });
    const handleDecrement = () => handleConfig({ page: currentPage - 1 });

    return (
        <div className={s.pagination}>
            {currentPage > 1 && (
                <button
                    className={s.pagination__button}
                    onClick={handleDecrement}
                >
                    {currentPage - 1}
                </button>
            )}
            <p className={s.pagination__current}>{currentPage}</p>
            {currentPage < totalPages && (
                <button
                    className={s.pagination__button}
                    onClick={handleIncrement}
                >
                    {currentPage + 1}
                </button>
            )}
        </div>
    );
};

export default Pagination;
