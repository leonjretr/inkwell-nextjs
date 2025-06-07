"use client"
import React, {useEffect, useState} from 'react';
import CategoryButtonHeader from "@/components/buttons/CategoryButtonHeader";
import {IGenresData} from "@/lib/types";
import {getGenres} from "@/queries/getGenres";

const Categories = () => {
    const [genres, setGenres] = useState<IGenresData>();
    useEffect(() => {
        const getData = async () => {
            const result = await getGenres();
            setGenres(result);
        }
        getData();
    }, []);

    return (
        <div className={"bg-headerColor w-full h-12 flex items-center px-3 gap-x-1 border-b border-gray-300"}>
            {genres?.data.map((genre, index) => (
                <CategoryButtonHeader key={index} buttonText={genre.name}/>
            ))}
        </div>
    );
};

export default Categories;