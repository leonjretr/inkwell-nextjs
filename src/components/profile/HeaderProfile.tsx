import React from 'react';
import {FaUser} from "react-icons/fa";
import {IoIosArrowDown} from "react-icons/io";
import registerStore from "@/stores/registerStore";
// import NavDrawer from "@/components/drawer/NavDrawer";
// import {MdArrowDropDown} from "react-icons/md";

const HeaderProfile = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
        })
        if (res.ok) {
            registerStore.setAuthorizedTrue();
            console.log("Logout successful")
        } else {
            registerStore.setAuthorizedFalse();
        }
    }

    return (
        <div className={"relative group"}>
            <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="flex relative group items-center p-0.5 text-sm pe-1 font-semibold rounded-lg hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button">
                <FaUser className="text-3xl p-1 bg-gray-200 text-gray-700 me-2 rounded-lg"/>
                Bonnie Green
                <div className={"mt-0.5 mx-1.5"}>
                    <IoIosArrowDown/>
                </div>
            </button>
            {/*Dropdown*/}
            <div
                className="z-10 hidden font-poppinsFont group-hover:block absolute left-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 grid grid-rows-4 col-auto">
                    <li>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My
                            Profile
                        </button>
                    </li>
                    <li>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My
                            Favourites
                        </button>
                    </li>
                    <li>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My
                            Stories
                        </button>
                    </li>
                    <li>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-caribCurrent hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">My
                            Branches
                        </button>
                    </li>
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
    )
        ;
};

export default HeaderProfile;