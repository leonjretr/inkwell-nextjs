import React, {FC} from 'react';
import Image from "next/image";
import * as motion from "framer-motion/client";
import {CiStar} from "react-icons/ci";

interface StoryPagePlaqueProps {
    storyName: string;
}

const StoryPagePlate: FC<StoryPagePlaqueProps> = ({storyName}) => {
    return (
        <div className={"p-10"}>
            <div className={"flex justify-between w-full bg-thistle p-5 rounded-2xl"}>
                <div className={"flex"}>
                    <div className={"flex flex-col"}>
                        <Image className={"rounded-lg border-2 border-white"} alt={"Author"}
                               src={"/images/cover2.jpg"}
                               height={"150"}
                               width={"150"}/>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            className={"h-10 mt-2 rounded-lg text-sm font-poppinsFont font-medium w-full bg-white"}>
                            Add to favorites
                        </motion.button>
                    </div>
                    <div className={"flex flex-col text-white font-poppinsFont mx-6"}>
                        <div>
                            <div className={"text-5xl font-bold"}> {storyName}</div>
                            <div className={"text-3xl font-medium"}>John Smollett</div>
                            <div className={"mt-3 flex gap-x-3 items-center text-lg font-medium"}>
                                <div>4231 views</div>
                                <div>120 ratings</div>
                                <div>3 reviews</div>
                            </div>
                        </div>
                        <div className={"flex mt-14 items-end"}>
                            <div className={"flex items-center"}>
                                <div className={"text-6xl text-yellow-400"}><CiStar/></div>
                                <div className={"font-interFont text-6xl"}>4,3</div>
                            </div>
                            <div className={"font-interFont italic text-3xl mx-3 mb-1"}>average rating</div>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col items-start"}>
                    <div className={"text-2xl text-white font-interFont"}>Share the story!</div>
                    <div className={"flex flex-col text-5xl text-yellow-400"}>
                        {/*{bookCards.map((bookCard) => (*/}
                        {/*    <div key={bookCard.id}>*/}
                        {/*        {bookCard.tags.map((tag, index) => (*/}
                        {/*            <TagBadge key={index} tagTitle={tag}/>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryPagePlate;