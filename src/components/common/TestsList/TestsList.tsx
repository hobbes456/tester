import React, { useState } from "react";

import { useAction } from "@/hooks/useAction";

import { setConfig } from "@/models/display";

import { IUser } from "@/interface/IUser";
import { ITest } from "@/interface/ITest";
import { IConfigParams } from "@/interface/IConfigParams";

import Search from "@components/Search";
import Pagination from "@components/Pagination";
import TestCard from "@components/TestCard";

import { DESC, ASC } from "@/constants/sortParams";

import s from "./TestsList.module.scss";

type TestsListProps = {
    user: IUser;
    tests: ITest[];
    params: IConfigParams;
};

const TestsList: React.FC<TestsListProps> = ({ user, tests, params }) => {
    const { search, sort, page } = params;

    const [searchValue, setSearchValue] = useState<string>(search);

    const handleConfig = useAction(setConfig);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleBlur = () => {
        if (searchValue === "") handleConfig({ search: searchValue });
    };

    const handleSearch = () => handleConfig({ search: searchValue });

    const handleSort = () => {
        const currentValue = sort === DESC ? ASC : DESC;

        handleConfig({ sort: currentValue });
    };

    return (
        <div className={s.testsList}>
            <div className={s.testsList__tools}>
                <Search
                    searchValue={searchValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onSearch={handleSearch}
                />
                <Pagination currentPage={page} />
                <button className={s.testsList__sort} onClick={handleSort}>
                    {sort === DESC ? "DESC" : "ASC"}
                </button>
            </div>
            {tests.length > 0 ? (
                <ul className={s.testsList__list}>
                    {tests.map((test) => (
                        <TestCard key={test.id} user={user} test={test} />
                    ))}
                </ul>
            ) : (
                <p className={s.testsList__warning}>
                    There is no information on tests in the database, or they
                    have not yet been created
                </p>
            )}
        </div>
    );
};
export default TestsList;
