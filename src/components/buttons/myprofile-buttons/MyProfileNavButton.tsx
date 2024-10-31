import React, {FC} from 'react';
import Link from "next/link";

interface MyProfileNavButtonProps {
    title: string;
    link: string;
    currentTab: boolean;
}

const MyProfileNavButton: FC<MyProfileNavButtonProps> = ({title, link, currentTab}) => {
    return (
        <Link href={`${link}`}
              className={`font-poppinsFont text-base p-2 ${currentTab ? "border-b-2 border-thistle text-thistle" : "hover:border-b-2 hover:border-thistle hover:text-thistle"}`}>
            {title}
        </Link>
    );
};

export default MyProfileNavButton;