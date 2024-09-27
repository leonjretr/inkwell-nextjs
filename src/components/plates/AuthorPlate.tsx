import React, {FC} from 'react';
import Image from "next/image";

interface AuthorPlateProps {
    authorName: string;
}

const AuthorPlate: FC<AuthorPlateProps> = ({authorName}) => {
    return (
        <div className={"p-10"}>
            <div className={"flex w-full bg-thistle p-5 rounded-2xl"}>
                <Image className={"rounded-full border-2 border-white"} alt={"Author"}
                       src={"/images/bradpitt.jpg"}
                       height={"115"}
                       width={"115"}/>
                <div className={"flex flex-col text-white font-poppinsFont mx-3"}>
                    <div className={"text-3xl font-bold"}> {authorName}</div>
                    <div className={"text-base font-medium"}> Renowned Russian writer</div>
                    <div className={"flex gap-x-3 items-center"}>
                        <div className={"text-base font-medium"}>33 story</div>
                        <div className={"text-base font-medium"}>120 subscribers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorPlate;