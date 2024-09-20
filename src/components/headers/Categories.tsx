import React from 'react';
import CategoryButtonHeader from "@/components/buttons/CategoryButtonHeader";

const Categories = () => {

    const categs = [
        {
            title: "New arrivals",
            genres: ["Detectives", "Horrors", "Adventures", "Plays", "Westerns", "Psychological", "True Crime", "Russian Literature"]
        },
        {
            title: "Popular",
            genres: ["Detectives", "Horrors", "Adventures", "Plays", "Westerns", "Psychological", "True Crime", "English Literature"]
        },
        {
            title: "Stories",
            genres: ["Detectives", "Horrors", "Adventures", "Plays", "Westerns", "Psychological", "True Crime", "American Literature"]
        },
        {
            title: "Books",
            genres: ["Detectives", "Horrors", "Adventures", "Plays", "Westerns", "Psychological", "True Crime", "American Literature"]
        },
        {
            title: "Week favourites",
            genres: ["Detectives", "Horrors", "Adventures", "Plays", "Westerns", "Psychological", "True Crime", "American Literature"]
        },
        {
            title: "All time favourites",
            genres: ["Detectives", "Horrors", "Adventures", "Plays", "Westerns", "Psychological", "True Crime", "American Literature"]
        },
    ];

    return (
        <div className={"bg-headerColor w-full h-12 flex items-center px-3 gap-x-1 border-b border-gray-300"}>
            {categs.map((category, index) => (
                <CategoryButtonHeader key={index} buttonText={category.title} genres={category.genres}/>
            ))}
        </div>
    );
};

export default Categories;