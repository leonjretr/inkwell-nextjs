"use client"
import React, {FC, useEffect, useState} from 'react';
import Image from "next/image";
import * as motion from "framer-motion/client";
import TagBadge from "@/components/badges/TagBadge";
import toast from "react-hot-toast";

interface StoryPagePlaqueProps {
    storyId: number;
    storyName: string | undefined;
    username: string;
    name: string;
    description: string;
    tags: string;
    avatarUrl: string | undefined;
}

const StoryPagePlate: FC<StoryPagePlaqueProps> = ({
                                                      storyName, username, description, tags,
                                                      avatarUrl, storyId
                                                  }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const toggleFavourite = async () => {
        await checkFavourites();
        try {
            if (!isFavourite) {
                const res = fetch("/api/reqs/postlike", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        storyId: storyId
                    })
                });
                await toast.promise(res, {
                    loading: "Just a moment...",
                    success: "Story has been added to favourites!🎉",
                    error: "Oops, something went wrong!😱😱"
                });
                setIsFavourite(true);
            } else {
                const res = fetch("/api/reqs/deletelike", {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({story: storyId}),
                });

                await toast.promise(res, {
                    loading: "Removing...",
                    success: "Removed from favourites 🗑️",
                    error: "Failed to remove 😞"
                });

                setIsFavourite(false);
            }
        } catch (err) {
            throw new Error("Failed to add to favourites");
        }
    };

    const checkFavourites = async () => {
        try {
            const res = await fetch(`/api/reqs/checklike?storyId=${storyId}`);
            const data = await res.json();
            setIsFavourite(data?.data?.length > 0);
        } catch (err) {
            console.error("Failed to check favourites", err);
        }
    };
    useEffect(() => {
        checkFavourites();
    }, []);

    return (
        <div className={"p-10"}>
            <div className={"flex justify-between w-full bg-thistle p-5 rounded-2xl"}>
                <div className={"flex"}>
                    <div className={"flex flex-col"}>
                        <Image className={"rounded-lg border-2 border-white"} alt={"Author"}
                               src={`http://localhost:1337${avatarUrl}`}
                               height={"150"}
                               width={"150"}/>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            onClick={toggleFavourite}
                            className={`h-10 mt-2 rounded-lg text-sm font-poppinsFont font-medium w-full ${isFavourite ? `hover:bg-red-400 bg-white` : `bg-white`} `}>
                            {isFavourite ? "Delete" : "Add to favorites"}
                        </motion.button>
                    </div>
                    <div className={"flex flex-col text-white font-poppinsFont mx-6"}>
                        <div>
                            <div className={"text-5xl font-bold"}> {storyName}</div>
                            <div className={"text-3xl font-medium mt-1.5"}>{username}</div>
                            <div className={"text-lg font-medium mt-1.5 max-w-2xl"}>{description}</div>
                            {/*<div className={"mt-1 flex gap-x-3 items-center text-lg font-medium"}>*/}
                            {/*    <div>4231 views</div>*/}
                            {/*    <div>120 ratings</div>*/}
                            {/*    <div>3 reviews</div>*/}
                            {/*</div>*/}
                            <div className={"flex flex-wrap w-full gap-x-0.5 gap-y-1 mt-3"}>
                                {Array.isArray(tags) && tags.map((tag, index) => (
                                    <TagBadge key={index} tagTitle={tag.trim()}/>
                                ))}
                            </div>
                        </div>
                        {/*<div className={"flex mt-14 items-end"}>*/}
                        {/*    <div className={"flex items-center"}>*/}
                        {/*        <div className={"text-6xl text-yellow-400"}><CiStar/></div>*/}
                        {/*        <div className={"font-interFont text-6xl"}>4,3</div>*/}
                        {/*    </div>*/}
                        {/*    <div className={"font-interFont italic text-3xl mx-3 mb-1"}>average rating</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className={"flex flex-col items-start"}>
                    <div className={"text-2xl text-white font-interFont"}>Share the story!</div>
                    <div className={"flex flex-col text-5xl text-yellow-400"}>
                        {/*{bookCards.map((bookCard) => (*/}
                        {/*    <div key={bookCard.id}>*/}
                        {/*        {bookCard.tags.map((tag, index) => (*/}
                        {/*            <TagBadge key={index} tagTitle={tag}/>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryPagePlate;