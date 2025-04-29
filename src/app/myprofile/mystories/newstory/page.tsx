"use client"
import React from 'react';
import RichEditor from "@/components/editor/RichEditor";

const Page = () => {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <div className={"flex justify-center my-10 font-poppinsFont text-3xl font-semibold"}>
                Post a new story
            </div>
            <div>
                <RichEditor />
            </div>
        </div>
    );
};

export default Page;