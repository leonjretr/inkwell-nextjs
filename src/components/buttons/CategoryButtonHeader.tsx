"use client"
import Link from 'next/link';
import React, {FC, useEffect, useState} from 'react';
import {MdArrowDropDown} from "react-icons/md";
import {formatRoute} from "@/utilities/formatRoute";
import {IGenresData} from "@/lib/types";
import {getGenres} from "@/queries/getGenres";

interface CategoryButtonHeaderProps {
    buttonText: string;
}

const CategoryButtonHeader: FC<CategoryButtonHeaderProps> = ({buttonText}) => {
    const [genres, setGenres] = useState<IGenresData>();
    useEffect(() => {
        const getData = async () => {
            const result = await getGenres();
            setGenres(result);
        }
        getData();
    }, []);

    return (
        <div className={"relative group"}>
            <button
                className="relative group text-smokyBlack font-poppinsFont font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center"
            >
                {buttonText} <MdArrowDropDown className={"text-lg"}/>
                <span
                    className={"absolute bottom-0.5 left-0.5 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full group-focus:w-full"}></span>
            </button>
            <div
                className="z-10 hidden font-poppinsFont group-hover:block absolute left-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 grid grid-rows-4 col-auto">
                    {genres?.data.map((genre) => (
                        <li key={genre.genre_id}>
                            <Link
                                href={`/${encodeURIComponent(formatRoute(buttonText))}/${encodeURIComponent(formatRoute(genre.name))}`}
                                className="block px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">{genre.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryButtonHeader;