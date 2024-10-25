import React from 'react';
import UserPlate from "@/components/plates/UserPlate";

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <UserPlate authorName={"John Greene"}/>
        </div>
    );
};

export default Page;