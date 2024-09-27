import React from "react";
import AuthorPlate from "@/components/plates/AuthorPlate";
import {bookCards} from "@/config/bookCardData";
import BookCard from "@/components/cards/BookCard";

const Page = ({params}: { params: { authorName: string } }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <>
                <AuthorPlate authorName={params.authorName}/>
            </>
            <div className={"flex gap-x-3 justify-center"}>
                {bookCards.map((bookCard) => (
                    <BookCard key={bookCard.id} title={bookCard.title}
                              author={bookCard.author} uploadDate={bookCard.uploadDate}
                              tags={bookCard.tags} rating={bookCard.rating}/>
                ))}
            </div>
        </div>
    );
};

export default Page;