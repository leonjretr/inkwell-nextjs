"use client"
import {IFavStoryData} from '@/lib/types';
import React, {useEffect, useState} from 'react';
import StoryProfilePlate from "@/components/plates/StoryProfilePlate";

const ProfileFavStoriesCard = () => {
    const [favStories, setFavStories] = useState<IFavStoryData>();
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`/api/reqs/userlikes`);
            const data = await res.json();
            setFavStories(data)
        }
        getData();
    }, []);

    return (
        <div className={"w-140 h-full bg-white rounded-lg border border-gray-200 shadow"}>
            {!favStories?.data || favStories.data.length < 1 ? (
                <div className="flex justify-center m-3">
                    <h1 className="font-interFont text-xl font-bold">No favourite stories!</h1>
                </div>
            ) : (favStories.data.map((story) => (
                    <div key={story.id} className={"p-2"}>
                        <StoryProfilePlate title={story.story.title} author={story.user.username}
                                           tags={story.story.tags}
                                           authorId={story.user.id}
                                           storyId={story.story.id}/>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProfileFavStoriesCard;