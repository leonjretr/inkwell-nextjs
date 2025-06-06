"use client"
import React, {useEffect, useState} from "react";
import UserPlate from "@/components/plates/UserPlate";
import BookCard from "@/components/cards/BookCard";
import {IStoryData2} from "@/lib/types";
import {getStoriesByAuthor} from "@/queries/getStoriesByAuthor";
import StoryPlateSkeleton from "@/components/skeletons/StoryPlateSkeleton";

const Page = ({params}: { params: { authorName: number } }) => {

    const [stories, setStories] = useState<IStoryData2>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const result = await getStoriesByAuthor(params.authorName);
            setStories(result);
            setLoading(false);
        }
        getData();
    }, [params.authorName]);
    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            {loading ? <StoryPlateSkeleton/> : (<><>
                <UserPlate authorName={stories?.data[0].author.username}
                           storiesNumber={stories?.data.length}/>

            </>
                <div className={"flex justify-center font-poppinsFont text-2xl mb-5"}>
                    <h1>Authors stories</h1>
                </div>
                <div className={"flex gap-x-3 justify-center"}>
                    {stories?.data.map((bookCard) => (
                        <BookCard key={bookCard.id} title={bookCard.title}
                                  id={bookCard.id}
                                  author={bookCard.author.id}
                                  authorName={bookCard.author.username} uploadDate={bookCard.createdAt}
                                  tags={bookCard.tags} avatarUrl={bookCard.story_avatar.url}/>
                    ))}
                </div>
            </>)}
        </div>
    );
};

export default Page;