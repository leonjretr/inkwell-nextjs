import * as motion from "framer-motion/client";
import React, {FC} from 'react';

interface LoginSignButtonProps {
    text: string;
    textColor:string;
    bgColor: string;
    hoverColor?: string;
}

const LoginSignButton: FC<LoginSignButtonProps> = ({text, bgColor, hoverColor, textColor}) => {
    return (
        <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            className={`m-1 h-10 w-20 rounded-lg text-sm font-interFont ${textColor} ${bgColor} ${hoverColor} `}>
            {text}
        </motion.button>
    );
};

export default LoginSignButton;