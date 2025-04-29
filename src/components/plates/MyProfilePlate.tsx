import React, {FC} from 'react';
import Image from "next/image";
import * as motion from "framer-motion/client";

interface MyProfilePlateProps {
    authorName: string;
}

const MyProfilePlate: FC<MyProfilePlateProps> = ({authorName}) => {
    return (
        <div className={"px-10 pt-10"}>
            <div className={"flex justify-between w-full bg-thistle p-5 rounded-2xl"}>
                <div className={"flex"}>
                    <div className={"flex flex-col"}>
                        <Image className={"rounded-xl border-2 border-white"} alt={"Author"}
                               src={"/images/bradpitt.jpg"}
                               height={"150"}
                               width={"150"}/>
                    </div>
                    <div className={"flex flex-col text-white font-poppinsFont mx-6"}>
                        <div className={"text-5xl font-bold"}>{authorName}</div>
                        <div className={"text-3xl font-medium mt-1.5"}> Renowned Russian writer</div>
                        <div className={"flex gap-x-3 items-center mt-1 text-lg font-medium"}>
                            <div>33 story</div>
                            <div>120 subscribers</div>
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