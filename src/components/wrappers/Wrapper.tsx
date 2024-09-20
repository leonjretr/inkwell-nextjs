"use client"
import React, {FC} from 'react';
import Headroom from "react-headroom";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <>
            <Headroom pinStart={36}>
                {children}
            </Headroom>
        </>
    );
};

export default Wrapper;