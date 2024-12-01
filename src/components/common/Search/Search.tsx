import React from "react";
import Image from "next/image";

import Input from "@components/Input";

import svgs from "@/constants/svgs";

import s from "./Search.module.scss";

type SearchProps = {
    searchValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    onSearch: () => void;
};

const Search: React.FC<SearchProps> = ({
    searchValue,
    onChange,
    onBlur,
    onSearch,
}) => {
    const { searchSvg } = svgs;

    return (
        <div className={s.search}>
            <Input
                value={searchValue}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Search"
                isBig={false}
            />
            <Image
                className={s.search__icon}
                src={searchSvg.src}
                alt="Search icon"
                width={25}
                height={25}
                onClick={onSearch}
            />
        </div>
    );
};

export default Search;
