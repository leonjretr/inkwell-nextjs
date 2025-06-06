import React, {FC} from 'react';
import {IGenresData} from "@/lib/types";
interface FilteringProps {
    genres: IGenresData | undefined;
}
const Filter:FC<FilteringProps> = ({genres}) => {
    return (
        <div className={"flex flex-col"}>
            <h1 className={"italic text-lg font-poppinsFont font-semibold"}>Filters:</h1>
            {genres?.data.map((genre, index) => (
                <div key={index}>
                    <button
                        className={"ml-2 relative group text-sm text-left font-poppinsFont font-light hover:underline"}>
                        {genre.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Filter;