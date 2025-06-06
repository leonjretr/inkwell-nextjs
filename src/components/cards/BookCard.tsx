import React, {FC} from 'react';
import Image from "next/image";
import TagBadge from "@/components/badges/TagBadge";
import Link from "next/link";
import {formatRoute} from "@/utilities/formatRoute";
import { formatDate } from '@/utilities/formatDate';

interface BookCardProps {
    id:number;
    title: string;
    author: string | undefined;
    uploadDate: string;
    tags: string;
    rating?: number;
}

const BookCard: FC<BookCardProps> = ({id, title, author, uploadDate, tags}) => {
    return (
        <div
            className="max-w-48 flex flex-col text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {author && <Link href={`/authors/${formatRoute(author)}/${id}`}>
                <Image className="mx-auto rounded-t-lg" src="/images/cover.jpg" alt="BookCover"
                       width={200}
                       height={300}/>
            </Link>}
            <div className="flex flex-col p-2">
                {author && <Link href={`/authors/${formatRoute(author)}/${id}`}>
                    <button
                        className="relative group text-base font-bold tracking-tight text-gray-900 font-poppinsFont rounded-lg p-0.5 text-center inline-flex items-center"
                    >
                        {title}
                        <span
                            className={"absolute bottom-0.5 left-0.5 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full"}></span>
                    </button>
                </Link>}
                {author && <Link href={`/authors/${formatRoute(author)}`}>
                    <button
                        className="mb-0.5 relative group font-light p-0.5 font-poppinsFont text-gray-700 dark:text-gray-400">
                        {author}
                        <span
                            className={"absolute bottom-0.5 left-0.5 w-0 h-0.25 bg-gray-700 dark:bg-white transition-all group-hover:w-full"}>
                        </span>
                    </button>
                </Link>}
                <p className={"mb-3 font-semibold font-interFont text-xs"}>{formatDate(uploadDate)}</p>
                <div className={"flex flex-wrap items-center gap-x-0.5 gap-y-1"}>
                    {Array.isArray(tags) && tags.map((tag, index) => (
                        <TagBadge key={index} tagTitle={tag.trim()}/>
                    ))}
                </div>
                {/*<p className={"mb-1 font-bold font-interFont text-sm"}>{rating}</p>*/}
            </div>
        </div>
    );
};

export default BookCard;