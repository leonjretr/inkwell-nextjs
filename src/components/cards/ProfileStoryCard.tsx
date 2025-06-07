"use client"
import {IStoryData2} from '@/lib/types';
import React, {FC, useEffect, useState} from 'react';
import {getStoriesByAuthor} from "@/queries/getStoriesByAuthor";
import StoryProfilePlate from "@/components/plates/StoryProfilePlate";

interface ProfileStoryCardProps {
    userId: number;
}

const ProfileStoryCard: FC<ProfileStoryCardProps> = ({userId}) => {
    const [stories, setStories] = useState<IStoryData2>();
    useEffect(() => {
        if(!userId) return;
        const getData = async () => {
            const result = await getStoriesByAuthor(userId);
            setStories(result);
        }
        getData();
    }, [userId]);

    return (
        <div className={"w-140 h-full bg-white rounded-lg border border-gray-200 shadow"}>
            {!stories?.data || stories.data.length < 1 ? (
                <div className="flex justify-center m-3">
                    <h1 className="font-interFont text-xl font-bold">No liked stories!</h1>
                </div>
            ) : (stories.data.map((story) => (
                    <div key={story.id} className={"p-2"}>
                        <StoryProfilePlate title={story.title} author={story.author.username}
                                           tags={story.tags}
                                           authorId={story.author.id}
                                           storyId={story.id}/>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProfileStoryCard;