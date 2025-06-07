"use client"
import React, {useEffect, useState} from "react";
import InfoBanner from "@/components/banner/InfoBanner";
import BookCard from "@/components/cards/BookCard";
import {IStoryData2} from "@/lib/types";
import BookCardSkeleton from "@/components/skeletons/BookCardSkeleton";


export default function Home() {

    const [stories, setStories] = useState<IStoryData2>();

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const res = await fetch(`http://localhost:1337/api/stories?pagination[page]=1&pagination[pageSize]=5&populate=*`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await res.json();
                setStories(data);
            } catch (error) {
                console.error("Error fetching stories:", error);
                return null;
            }
        }
        fetchStories();
    }, []);

    return (
        <div className={"flex flex-col items-center min-h-screen bg-white pb-10"}>
            {stories ?
                (<>
                    <div className={"flex justify-center mt-5"}>
                        <InfoBanner/>
                    </div>
                    <div className={"flex justify-center font-poppinsFont text-2xl mt-7"}>
                        <h1>Selected stories</h1>
                    </div>

                    <div className={"flex justify-center gap-x-5 mx-10 mt-5"}>
                        {stories?.data.map((bookCard) => (
                            <BookCard key={bookCard.id} id={bookCard.id} title={bookCard.title}
                                      author={bookCard.author.id} uploadDate={bookCard.createdAt}
                                      tags={bookCard.tags} avatarUrl={bookCard.story_avatar.url}
                                      authorName={bookCard.author.username}
                            />
                        ))}
                    </div>
                </>) : <div className={"flex gap-x-5"}>{Array.from({length: 3}).map((_, index) => (<div key={index}><BookCardSkeleton/></div>))}</div>}
        </div>
    );
}
