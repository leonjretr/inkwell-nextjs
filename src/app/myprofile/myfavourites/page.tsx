"use client"
import React, {useEffect} from 'react';
import MyProfilePlateNavPart from "@/components/parts/MyProfilePlateNavPart";
import {IUser2} from "@/lib/types";
import ProfileStoryCard from "@/components/cards/ProfileStoryCard";
import MyProfilePlateSkeleton from "@/components/skeletons/MyProfilePlateSkeleton";
import ProfileFavStoriesCard from "@/components/cards/ProfileFavStoriesCard";

const Page = () => {
    const [myData, setMyData] = React.useState<IUser2>();
    useEffect(() => {
        const getData = async () => {
            const getMyData = await fetch("/api/reqs/me", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await getMyData.json();
            setMyData(res.data);
        }
        getData();
    }, [])

    return (
        <div className={"flex flex-col min-h-screen bg-white pb-10"}>
            {myData ? (<>
                <MyProfilePlateNavPart/>
                <div className={"mx-14 mt-3"}>
                    <ProfileFavStoriesCard/>
                </div>
            </>) : <MyProfilePlateSkeleton/>}
        </div>
    );
};

export default Page;