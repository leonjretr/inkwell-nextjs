import React, {useEffect} from 'react';
import {FaUser} from "react-icons/fa";
import {IoIosArrowDown} from "react-icons/io";
import registerStore from "@/stores/registerStore";
import Link from "next/link";
import {IUser2} from "@/lib/types";

const HeaderProfile = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [myData, setMyData] = React.useState<IUser2>();
    useEffect(() => {
        const getData = async() => {
            const getMyData = await fetch("/api/reqs/me", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await getMyData.json();
            setMyData(res.data);
        }
        getData();
    }, [])


    const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
        })
        if (res.ok) {
            registerStore.setAuthorizedFalse();
            console.log("Logout successful")
        } else {
            console.log("Logout was not successful")
            registerStore.setAuthorizedTrue();
        }
    }

    return (

        <div className={"relative group"}>
            <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="flex relative group items-center p-0.5 text-sm pe-1 font-semibold rounded-lg hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button">
                <FaUser className="text-3xl p-1 bg-gray-200 text-gray-700 me-2 rounded-lg"/>
                {myData ? myData?.email : "Loading..."}
                <div className={"mt-0.5 mx-1.5"}>
                    <IoIosArrowDown/>
                </div>
            </button>
            {/*Dropdown*/}
            <div
                className="z-10 hidden font-poppinsFont group-hover:block absolute left-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 grid grid-rows-4 col-auto">
                    <li>
                        <Link href={"/myprofile"}
                              className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href={"/myprofile/myfavourites"}
                              className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My
                            Favourites
                        </Link>
                    </li>
                    <li>
                        <Link href={"/myprofile/mystories"}
                              className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My
                            Stories
                        </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link href={"/myprofile/mybranches"}*/}
                    {/*          className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My*/}
                    {/*        Branches*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link href={"/myprofile/settings"}*/}
                    {/*        className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">*/}
                    {/*        Settings*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li>
                        <button
                            onClick={(event) => handleLogout(event)}
                            className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">Log
                            out
                        </button>
                    </li>
                </ul>
            </div>

            {/*Drawer*/}

            {/*<NavDrawer*/}
            {/*    isOpen={drawerOpen}*/}
            {/*    setIsOpen={setDrawerOpen}/>*/}
        </div>
    );
};

export default HeaderProfile;