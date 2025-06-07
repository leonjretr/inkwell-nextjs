"use client"
import React, {useEffect, useState} from 'react';
import {formatTitle} from "@/utilities/formatTitle";
import {observer} from 'mobx-react-lite';
import BookCard from "@/components/cards/BookCard";
import {IStoryData2} from "@/lib/types";
import BookCardSkeleton from '@/components/skeletons/BookCardSkeleton';
import {getStoriesByGenre} from "@/queries/getStoriesByGenre";

const Page = ({params}: { params: { genre: string } }) => {
    const [stories, setStories] = useState<IStoryData2>();
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        if (!params.genre) return;
        const getData = async () => {
            setLoading(true);
            const result = await getStoriesByGenre(params.genre);
            setStories(result);
            setLoading(false);
        }
        getData();
    }, [params.genre]);

    return (
        <div className={"min-h-screen w-full px-4"}>
            {/*<div className={"flex flex-col justify-start mt-10"}>*/}
            {/*    <Sort/>*/}
            {/*    /!*<Filter genres={genres}/>*!/*/}
            {/*</div>*/}
            <div className="flex flex-col items-center bg-white pb-10">
                <h1 className={"flex text-black text-3xl justify-center font-poppinsFont font-semibold mt-10"}>
                    {formatTitle(params.genre)}
                </h1>
                <div className={"flex flex-wrap justify-center gap-x-5 mx-10 mt-5"}>
                    {loading
                        ? Array.from({length: 3}).map((_, index) => <BookCardSkeleton key={index}/>)
                        : stories?.data.map((bookCard) => (
                            <BookCard
                                authorName={bookCard.author.username}
                                key={bookCard.id} id={bookCard.id} title={bookCard.title}
                                author={bookCard?.author?.id} uploadDate={bookCard.createdAt}
                                tags={bookCard.tags} avatarUrl={bookCard.story_avatar.url}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
        ;
};

export default observer(Page);