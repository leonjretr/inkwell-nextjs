"use client";
import React from "react";

const MyProfilePlateNavPartSkeleton = () => {
    return (
        <div className="animate-pulse">
            {/* Profile Plate Skeleton */}
            <div className="flex items-center gap-4 px-14 py-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col space-y-2">
                    <div className="w-32 h-4 bg-gray-300 rounded"></div>
                    <div className="w-24 h-3 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Tabs Skeleton */}
            <div className="flex mt-3 px-14 gap-x-4">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="h-10 w-32 bg-gray-300 rounded-md"
                    />
                ))}
            </div>
        </div>
    );
};

export default MyProfilePlateNavPartSkeleton;
