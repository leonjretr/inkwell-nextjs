import * as motion from "framer-motion/client";
import React, {FC} from 'react';

interface LoginSignButtonProps {
    openModal: () => void;
}

const LoginSignButton: FC<LoginSignButtonProps> = ({openModal}) => {
    return (
        <motion.button
            onClick={openModal}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            className={`m-1 h-10 w-20 rounded-lg text-sm font-interFont text-white bg-caribCurrent`}>
            Sign up
        </motion.button>
    );
};

export default LoginSignButton;