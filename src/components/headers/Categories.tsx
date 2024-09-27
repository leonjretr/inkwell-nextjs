import React from 'react';
import CategoryButtonHeader from "@/components/buttons/CategoryButtonHeader";
import {categs} from "@/config/categoriesData";

const Categories = () => {
    return (
        <div className={"bg-headerColor w-full h-12 flex items-center px-3 gap-x-1 border-b border-gray-300"}>
            {categs.map((category, index) => (
                <CategoryButtonHeader key={index} buttonText={category.title} genres={category.genres}
                category={category}/>
            ))}
        </div>
    );
};

export default Categories;