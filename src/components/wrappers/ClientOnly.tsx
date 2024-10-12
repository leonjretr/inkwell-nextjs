import {FC, ReactNode, useEffect, useState} from "react";

export const ClientOnly: FC<{ children: ReactNode }> = ({children}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Prevent server-side rendering
    }

    return <>{children}</>;
};
