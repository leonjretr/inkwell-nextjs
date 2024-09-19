import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className={"flex flex-col justify-center m-5"}>
            <div className={"text-base text-black font-semibold"}>
                Hello! My name is Leonid and this is my first Next project
            </div>
            <div className={"flex mt-5 gap-x-3"}>
                <Link href={"/contact"}>
                    <button className={"w-36 h-14 rounded-lg bg-white hover:bg-emerald-200"}>
                        Go to contact page
                    </button>
                </Link>
                <Link href={"/"}>
                    <button className={"w-36 h-14 rounded-lg bg-white hover:bg-emerald-200"}>
                        Go to about page
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page;