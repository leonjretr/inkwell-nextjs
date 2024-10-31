import React from 'react';
import {FaSearch} from "react-icons/fa";

const SearchBarProfile = () => {
    return (
        <div className="p-0.5  w-max rounded-lg">
            <label className={"relative block"}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch/>
            </span>
                <input
                    className={"h-10 w-120 bg-white rounded-lg border-gray-600 border-2 placeholder:italic placeholder:text-sm pl-8"}
                    placeholder={"Search the story..."}>
                </input>
            </label>
        </div>
    );
};

export default SearchBarProfile;