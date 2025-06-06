import React from 'react';

const StoryPlateSkeleton = () => {
    return (
        <div className="p-10 animate-pulse">
            <div className="flex justify-between w-full bg-thistle p-5 rounded-2xl">
                {/* Left Section */}
                <div className="flex">
                    {/* Image + Button */}
                    <div className="flex flex-col">
                        <div className="w-[150px] h-[150px] rounded-lg border-2 border-white bg-gray-300" />
                        <div className="h-10 mt-2 rounded-lg bg-white w-full" />
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col text-white font-poppinsFont mx-6 w-full">
                        <div>
                            <div className="h-10 bg-gray-300 rounded w-[300px]" />
                            <div className="h-7 bg-gray-300 rounded w-[200px] mt-3" />
                            <div className="flex gap-x-3 mt-3">
                                <div className="h-5 w-24 bg-gray-300 rounded" />
                                <div className="h-5 w-24 bg-gray-300 rounded" />
                                <div className="h-5 w-24 bg-gray-300 rounded" />
                            </div>
                        </div>

                        {/*/!* Rating *!/*/}
                        {/*<div className="flex mt-14 items-end">*/}
                        {/*    <div className="flex items-center">*/}
                        {/*        <div className="text-6xl text-yellow-400"><CiStar /></div>*/}
                        {/*        <div className="h-10 w-16 bg-gray-300 rounded ml-2" />*/}
                        {/*    </div>*/}
                        {/*    <div className="h-6 w-36 bg-gray-300 rounded ml-4 mb-1" />*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/* Right Section: Share */}
                <div className="flex flex-col items-start">
                    <div className="h-7 w-40 bg-gray-300 rounded mb-4" />
                    <div className="flex flex-col gap-y-2">
                        <div className="h-10 w-10 bg-gray-300 rounded-full" />
                        <div className="h-10 w-10 bg-gray-300 rounded-full" />
                        <div className="h-10 w-10 bg-gray-300 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryPlateSkeleton;
