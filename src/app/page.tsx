import React from "react";
import InfoBanner from "@/components/banner/InfoBanner";
import BookCard from "@/components/cards/BookCard";

export default function Home() {

    const bookCards = [
        {
            id: 1,
            title: "Poems. 1828-1831",
            author: "Mihail Lermontov",
            uploadDate: "September 20 2024",
            tags: ["Poems", "Russian", "XIX", "Classic", "Horror", "Adventure", "Caucasus", "Horror", "Adventure", "Caucasus"],
            rating: 1,
        },
        {
            id: 2,
            title: "Zapiski oxotnika",
            author: "Ivan Turgenev",
            uploadDate: "September 21 2024",
            tags: ["Poems", "Russian", "XIX", "Classic"],
            rating:2,
        },
        {
            id: 3,
            title: "Poems. 1828-1831",
            author: "Mihail Lermontov",
            uploadDate: "September 22 2024",
            tags: ["Proza", "Russian", "XIX", "Classic"],
            rating:3,
        },
    ]

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
