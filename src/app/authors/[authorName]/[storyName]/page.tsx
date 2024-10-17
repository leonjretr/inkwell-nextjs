import React from 'react';
import StoryPagePlate from "@/components/plates/StoryPagePlate";

const Page = ({params}: { params: { storyName: string } }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <>
                <StoryPagePlate storyName={params.storyName}/>
            </>
        </div>
    );
};

export default Page;