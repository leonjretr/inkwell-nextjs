import React, {FC} from 'react';
interface FilteringProps {
    genres: string[];
}
const Filter:FC<FilteringProps> = ({genres}) => {
    return (
        <div className={"flex flex-col"}>
            <h1 className={"italic text-lg font-poppinsFont font-semibold"}>Filters:</h1>
            {genres.map((genre, index) => (
                <div key={index}>
                    <button
                        className={"ml-2 relative group text-sm text-left font-poppinsFont font-light hover:underline"}>
                        {genre}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Filter;