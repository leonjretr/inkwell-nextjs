import React from "react";

const BookCardSkeleton = () => {
    return (
        <div className="mt-10 max-w-48 animate-pulse flex flex-col text-center bg-gray-100 border border-gray-200 rounded-lg shadow">
            <div className="w-full h-[300px] bg-gray-300 rounded-t-lg"></div>
            <div className="p-2">
                <div className="h-4 bg-gray-300 rounded mb-2 w-3/4 mx-auto"></div>
                <div className="h-3 bg-gray-300 rounded mb-1 w-1/2 mx-auto"></div>
                <div className="h-3 bg-gray-300 rounded mb-1 w-2/3 mx-auto"></div>
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                    <div className="h-4 w-12 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-16 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default BookCardSkeleton;
