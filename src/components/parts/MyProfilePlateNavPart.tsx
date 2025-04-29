"use client"
import React from 'react';
import MyProfilePlate from "@/components/plates/MyProfilePlate";
import MyProfileNavButton from "@/components/buttons/myprofile-buttons/MyProfileNavButton";
import {usePathname} from "next/navigation";

const MyProfilePlateNavPart = () => {
    const tabs = [
        {title: "My Profile", link: "/myprofile", current: false},
        {title: "My Stories", link: "/myprofile/mystories", current: false},
        {title: "My Branches", link: "/myprofile/mybranches", current: false},
        {title: "My Favourites", link: "/myprofile/myfavourites", current: false},
        // {title: "Settings", link: "/myprofile/settings", current: false},
    ];
    const pathname = usePathname();
    if (pathname === "/myprofile") {
        tabs.map((tab, index) => {
            tab.current = index === 0;
        })
    } else if (pathname === "/myprofile/mystories") {
        tabs.map((tab, index) => {
            tab.current = index === 1;
        })
    } else if (pathname === "/myprofile/mybranches") {
        tabs.map((tab, index) => {
            tab.current = index === 2;
        })
    } else if (pathname === "/myprofile/myfavourites") {
        tabs.map((tab, index) => {
            tab.current = index === 3;
        })
    }

    // else if (pathname === "/myprofile/settings") {
    //     tabs.map((tab, index) => {
    //         tab.current = index === 4;
    //     })
    // }

    return (
        <>
            <MyProfilePlate authorName={"John Greene"}/>
            <div className="flex mt-3 px-14 gap-x-4">
                {tabs.map((tab, index) => (
                    <MyProfileNavButton title={tab.title} linkTab={tab.link} key={index} currentTab={tab.current}/>
                ))}
            </div>
        </>
    );
};

export default MyProfilePlateNavPart;