import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <label className={"relative block"}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch/>
            </span>
            <input
                className={"h-8 w-110 bg-gray-50 border-gray-400 border rounded-lg placeholder:italic placeholder:text-sm pl-8"}
                placeholder={"What sequel are you looking for?"}>
            </input>
        </label>

    );
};

export default SearchBar;