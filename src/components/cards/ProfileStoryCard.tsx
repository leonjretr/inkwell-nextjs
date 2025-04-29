import React from 'react';

const ProfileStoryCard = () => {
    return (
        <div className={"w-150 h-40 bg-white rounded-lg border border-gray-200 shadow"}>
            <div className={"flex justify-center m-3"}>
                <h1 className={"font-interFont text-xl font-bold"}> No published stories! </h1>
            </div>
        </div>
    );
};

export default ProfileStoryCard;