"use client"
import React, {useEffect} from 'react';
import MyProfilePlateNavPart from "@/components/parts/MyProfilePlateNavPart";
import {IUser2} from "@/lib/types";
import MyProfilePlateSkeleton from "@/components/skeletons/MyProfilePlateSkeleton";

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
        <div className="flex flex-col min-h-screen bg-white pb-10">
            {myData ? (<>
                <MyProfilePlateNavPart/>
                <div className={"mx-10 mt-5 w-120"}>
                    <div className="flex h-14 items-center px-4 bg-gray-50 border border-gray-200 rounded-t-lg shadow">
                        <h1 className={"font-poppinsFont text-lg font-semibold"}>
                            What can you tell about yourself?
                        </h1>
                    </div>
                    <div className="flex flex-col h-40 p-4 bg-white border border-gray-200 rounded-b-lg shadow">
                        <h1 className={"font-poppinsFont text-sm"}>Name: {myData?.name}</h1>
                        <h1 className={"font-poppinsFont text-sm"}>Username: {myData?.username}</h1>
                        <h1 className={"font-poppinsFont text-sm"}>Email: {myData?.email}</h1>
                    </div>
                </div>
            </>) : <MyProfilePlateSkeleton/>}
        </div>
    );
};

export default Page;