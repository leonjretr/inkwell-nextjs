"use client"
import React, {FC} from 'react';
import HeaderMain from "@/components/headers/HeaderMain";
import Categories from "@/components/headers/Categories";
import Headroom from "react-headroom";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <>
            <HeaderMain/>
            <Headroom pinStart={36}>
                <Categories/>
            </Headroom>
            {children}
        </>
    );
};

export default Wrapper;