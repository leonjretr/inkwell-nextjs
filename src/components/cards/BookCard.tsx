import React, {FC} from 'react';
import Image from "next/image";
import TagBadge from "@/components/badges/TagBadge";

interface BookCardProps {
    title: string;
    author: string;
    uploadDate: string;
    tags: string[];
    rating:number;
}

const BookCard: FC<BookCardProps> = ({title, author, uploadDate, tags, rating}) => {
    return (
        <div
            className="max-w-48 flex flex-col text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image className="mx-auto rounded-t-lg" src="/images/cover.jpg" alt="BookCover"
                       width={200}
                       height={300}/>
            </a>
            <div className="p-2">
                <a>
                    <button
                        className="relative group text-smokyBlack font-poppinsFont font-medium rounded-lg p-0.5 text-center inline-flex items-center"
                    >
                        <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}</h5>
                        <span
                            className={"absolute bottom-0.5 left-0.5 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full"}></span>
                    </button>
                </a>
                <a>
                    <button
                        className="mb-0.5 relative group font-light p-0.5 font-poppinsFont text-gray-700 dark:text-gray-400">
                        <h1>{author}</h1>
                        <span
                            className={"absolute bottom-0.5 left-0.5 w-0 h-0.25 bg-gray-700 dark:bg-white transition-all group-hover:w-full"}>
                        </span>
                    </button>
                </a>
                <p className={"mb-3 font-semibold font-interFont text-xs"}>{uploadDate}</p>
                <div className={"flex flex-wrap items-center gap-x-0.5 gap-y-1"}>
                    {tags.map((tag, index) => (
                        <TagBadge key={index} tagTitle={tag}/>
                    ))}
                </div>
                <p className={"mb-1 font-bold font-interFont text-sm"}>{rating}</p>
            </div>
        </div>


    );
};

export default BookCard;