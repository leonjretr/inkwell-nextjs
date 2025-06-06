import React, {FC} from 'react';
import Image from "next/image";
import * as motion from "framer-motion/client";

interface UserPlateProps {
    authorName: string | undefined;
    storiesNumber: number | undefined;
}

const UserPlate: FC<UserPlateProps> = ({authorName, storiesNumber}) => {
    return (
        <div className={"p-10"}>
            <div className={"flex w-full bg-thistle p-5 rounded-2xl"}>
                <div className={"flex flex-col"}>
                    <Image className={"rounded-xl border-2 border-white"} alt={"Author"}
                           src={"/images/bradpitt.jpg"}
                           height={"150"}
                           width={"150"}/>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        className={"h-10 mt-2 rounded-lg text-sm font-poppinsFont font-medium w-full bg-white"}>
                        Share!
                    </motion.button>
                </div>
                <div className={"flex flex-col text-white font-poppinsFont mx-6"}>
                    <div className={"text-5xl font-bold"}> {authorName}</div>
                    <div className={"text-3xl font-medium mt-1.5"}> Renowned writer</div>
                    <div className={"flex gap-x-3 items-center mt-1 text-lg font-medium"}>
                        <div>{storiesNumber ? storiesNumber : "0"} stories</div>
                        {/*<div>120 subscribers</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPlate;