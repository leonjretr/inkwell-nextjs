import React from 'react';
import Sort from "@/components/filter/Sort";
import {formatTitle} from "@/utilities/formatTitle";
import Filter from "@/components/filter/Filter";

const Page = ({params}: { params: { genre: string } }) => {

    const genres = [
        "New arrivals",
        "Popular",
        "Detectives"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <h1 className={"flex text-black text-3xl justify-center font-poppinsFont font-semibold mt-10"}>
                {formatTitle(params.genre)}
            </h1>
            <div className={"flex flex-col px-8 gap-y-5"}>
                <Sort/>
                <Filter genres={genres}/>
            </div>
        </div>
    );
};

export default Page;