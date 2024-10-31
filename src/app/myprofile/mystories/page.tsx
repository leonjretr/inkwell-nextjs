import React from 'react';
import MyProfilePlateNavPart from "@/components/parts/MyProfilePlateNavPart";
import ProfileStoryCard from "@/components/cards/ProfileStoryCard";
import SearchBarProfile from "@/components/search-bar/SearchBarProfile";
import { PiSortDescendingLight } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";

const Page = () => {
    return (
        <div className={"flex flex-col min-h-screen bg-white pb-10"}>
            <MyProfilePlateNavPart/>
            <div className={"flex mx-14 mt-5 gap-x-3 items-center"}>
                <button
                    className={"flex px-1.5 h-10 rounded-lg border-2 border-gray-600 items-center justify-center hover:bg-caribCurrent hover:text-white hover:border-caribCurrent"}>
                    <PiSortDescendingLight className={"text-2xl"}/>
                </button>
                <SearchBarProfile/>
                <button
                    className={"flex px-1.5 h-10 rounded-lg border-2 border-gray-600 items-center justify-center hover:bg-caribCurrent hover:text-white hover:border-caribCurrent"}>
                    <CiFilter className={"text-2xl"}/>
                </button>
            </div>

            <div className={"mx-14 mt-3"}>
                <ProfileStoryCard/>
            </div>
        </div>
    );
};

export default Page;