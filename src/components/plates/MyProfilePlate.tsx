import React, {FC, useEffect, useState} from 'react';
import Image from "next/image";
import * as motion from "framer-motion/client";
import {IStoryData2} from "@/lib/types";
import {getStoriesByAuthor} from "@/queries/getStoriesByAuthor";

interface MyProfilePlateProps {
    authorName: string | undefined;
    authorId:number;
}

const MyProfilePlate: FC<MyProfilePlateProps> = ({authorName, authorId}) => {

    const [stories, setStories] = useState<IStoryData2>();

    useEffect(() => {
        if(!authorId) return;
        const getData = async () => {
            const result = await getStoriesByAuthor(authorId);
            setStories(result);
        }
        getData();
    }, [authorId]);

    return (
        <div className={"px-10 pt-10"}>
            <div className={"flex justify-between w-full bg-thistle p-5 rounded-2xl"}>
                <div className={"flex"}>
                    <div className={"flex flex-col"}>
                        <Image className={"rounded-xl border-2 border-white"} alt={"Author"}
                               src={"/images/user.jpg"}
                               height={"150"}
                               width={"150"}/>
                    </div>
                    <div className={"flex flex-col text-white font-poppinsFont mx-6"}>
                        <div className={"text-5xl font-bold"}>{authorName}</div>
                        {/*<div className={"text-3xl font-medium mt-1.5"}> Renowned author</div>*/}
                        <div className={"flex gap-x-3 items-center mt-1 text-lg font-medium"}>
                            <div>{stories?.data.length} stories</div>
                        </div>
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <a href={"/myprofile/mystories/newstory"}>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            className={"w-max h-max p-3 rounded-lg bg-white text-black font-poppinsFont font-semibold"}>
                            Post a story!
                        </motion.button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default MyProfilePlate;