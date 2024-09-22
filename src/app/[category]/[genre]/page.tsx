import React from 'react';

const Page = ({params}: { params: { genre: string } }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <h1 className={"text-black text-3xl flex justify-center mt-10"}>
                You are on a particular genre page: {params.genre}
            </h1>
        </div>
    );
};

export default Page;