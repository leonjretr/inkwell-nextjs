import React from 'react';
import MyProfilePlateNavPart from "@/components/parts/MyProfilePlateNavPart";

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <MyProfilePlateNavPart/>
            <div className={"mx-10 mt-5 w-120"}>
                <div className="flex h-14 items-center px-4 bg-gray-50 border border-gray-200 rounded-t-lg shadow">
                    <h1 className={"font-poppinsFont text-lg font-semibold"}>
                        What can you tell about yourself?
                    </h1>
                </div>
                <div className="flex flex-col h-40 p-4 bg-white border border-gray-200 rounded-b-lg shadow">
                    <h1 className={"font-poppinsFont text-sm"}>Name:</h1>
                    <h1 className={"font-poppinsFont text-sm"}>Surname:</h1>
                </div>
            </div>
        </div>
    );
};

export default Page;