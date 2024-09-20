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
            tags: ["Poems", "Russian", "XIX", "Classic", "Horror", "Adventure", "Caucasus",  "Horror", "Adventure", "Caucasus"]
        },
        {
            id: 2,
            title: "Zapiski oxotnika",
            author: "Ivan Turgenev",
            uploadDate: "September 21 2024",
            tags: ["Poems", "Russian", "XIX", "Classic"]
        },
        {
            id: 3,
            title: "Poems. 1828-1831",
            author: "Mihail Lermontov",
            uploadDate: "September 22 2024",
            tags: ["Proza", "Russian", "XIX", "Classic"]
        },
    ]

    return (
        <div className={"flex min-h-screen bg-white pb-24"}>
            <div className={"flex gap-x-5 mx-10 mt-20"}>
                {bookCards.map((bookCard) => (
                    <BookCard key={bookCard.id} title={bookCard.title}
                              author={bookCard.author} uploadDate={bookCard.uploadDate}
                              tags={bookCard.tags}/>
                ))}
            </div>
            <InfoBanner/>
        </div>
    );
}
