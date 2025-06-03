import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <div className={"bg-headerColor w-full h-24 flex justify-between items-center px-3 border-t border-gray-300"}>
            <div className={"font-poppinsFont font-medium"}>
                <h1> © Leonid Svietlychnyi — {date.getFullYear()}</h1>
            </div>
        </div>
    );
};

export default Footer;