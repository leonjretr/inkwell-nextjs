import React from 'react';
import TagBadge from "@/components/badges/TagBadge";
import Link from "next/link";

interface StoryPlateProps {
    title: string;
    author: string;
    tags: string
    storyId: number;
    authorId:number;
}

const StoryPlate: React.FC<StoryPlateProps> = ({title, author, tags, storyId, authorId}) => {
    return (
        <Link href={`/authors/${authorId}/${storyId}`}>
            <button
                className="flex w-full bg-gray-50 font-interFont shadow-sm border border-gray-200 rounded-xl p-4 transition hover:shadow-md cursor-pointer">
                <div className={"flex flex-col"}>
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <div className="text-sm text-gray-500 mt-1">by {author}</div>
                </div>
                <div className="mx-2 gap-x-2">
                    {Array.isArray(tags) && tags.map((tag, index) => (
                        <TagBadge key={index} tagTitle={tag.trim()}/>
                    ))}
                </div>
            </button>
        </Link>
    );
};

export default StoryPlate;
