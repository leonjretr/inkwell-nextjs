import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"}
        className={"cursor-pointer select-none"}>
            <p className={"font-interFont text-xl font-extrabold"}>
                INKTELLS
            </p>
            <p className={"font-poppinsFont text-xs font-light"}>
                reimagine favourite books
            </p>
        </Link>
    );
};

export default Logo;