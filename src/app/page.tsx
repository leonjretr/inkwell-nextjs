import React from "react";
import InfoBanner from "@/components/banner/InfoBanner";
import BookCard from "@/components/cards/BookCard";
import {bookCards} from "@/config/bookCardData";


export default function Home() {
    return (
        <div className={"flex flex-col min-h-screen bg-white pb-10"}>
            <div className={"flex justify-center mt-5"}>
                <InfoBanner/>
            </div>
            <div className={"flex justify-center font-poppinsFont text-2xl mt-7"}>
                <h1>New stories</h1>
            </div>

            <div className={"flex justify-center gap-x-5 mx-10 mt-5"}>
                {bookCards.map((bookCard) => (
                    <BookCard key={bookCard.id} title={bookCard.title}
                              author={bookCard.author} uploadDate={bookCard.uploadDate}
                              tags={bookCard.tags} rating={bookCard.rating}/>
                ))}
            </div>

        </div>
    );
}
