"use client"
import React, {useEffect, useState} from 'react';
import StoryPagePlate from "@/components/plates/StoryPagePlate";
import {IStoryData2} from "@/lib/types";
import {getStory} from '@/queries/getStory';
import StoryPlateSkeleton from "@/components/skeletons/StoryPlateSkeleton";
import MarkdownRenderer from "@/components/editor/MarkdownRenderer";

const Page = ({params}: { params: { storyId: number } }) => {

    const [story, setStory] = useState<IStoryData2>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const result = await getStory(params.storyId);
            setStory(result);
            setLoading(false);
        }
        getData();
    }, [params.storyId]);


    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <>
                {loading
                    ? <StoryPlateSkeleton/>
                    : story?.data?.map((sstory) => (
                        <div key={sstory.id}>
                            <StoryPagePlate storyName={sstory.title}
                                            username={sstory.author.username}
                                            name={sstory.author.name}
                                            description={sstory.description}
                                            tags={sstory.tags}
                                            avatarUrl={sstory.story_avatar}
                            />
                            <div className="px-10 pt-5">
                                <MarkdownRenderer content={sstory.story_text}/>
                            </div>
                        </div>
                    ))
                }
            </>


        </div>
    );
};

export default Page;