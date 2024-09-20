import React from 'react';
import Logo from "@/components/logo/Logo";
import SearchBar from "@/components/search-bar/SearchBar";
import LoginSignButton from "@/components/buttons/LoginSignButton";

const HeaderMain = () => {
    return (
        <div className={"bg-headerColor w-full h-20 flex justify-between items-center px-3 border-b border-gray-300"}>
            <Logo/>
            <SearchBar/>
            <div className={""}>
                <LoginSignButton text={"Login"} textColor={"text-black"} bgColor={"bg-gray-50"} hoverColor={"hover:bg-gray-200"}/>
                <LoginSignButton text={"Sign Up"} textColor={"text-white"} bgColor={"bg-caribCurrent"}/>
            </div>
        </div>
    );
};

export default HeaderMain;