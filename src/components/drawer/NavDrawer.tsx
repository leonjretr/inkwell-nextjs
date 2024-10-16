import React from 'react';
import MenuButton from "@/components/drawer/MenuButton";
import {FaRegUserCircle, FaHeart, FaBook, FaSignOutAlt} from "react-icons/fa";
import {FaCodeBranch} from "react-icons/fa6";

interface NavDrawerProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const NavDrawer: React.FC<NavDrawerProps> = ({isOpen, setIsOpen}) => {
    return (
        <div className={`${isOpen && "fixed inset-0 z-30 bg-black bg-opacity-15 overscroll-hidden backdrop-blur-sm"}`}>
            <div
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-all transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-white w-64 dark:bg-gray-800`}
                >
                <h5 id="drawer-navigation-label"
                    className="text-base font-interFont font-semibold uppercase dark:text-gray-400">
                    Bonnie Green
                </h5>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" d="M1 1l6 6m0 0l6 6M7 7L1 13M7 7l6-6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <MenuButton name={"My Profile"} icon={<FaRegUserCircle/>}/>
                        <MenuButton name={"My Favourites"} icon={<FaHeart/>}/>
                        <MenuButton name={"My Stories"} icon={<FaBook/>}/>
                        <MenuButton name={"My Branches"} icon={<FaCodeBranch/>}/>
                        <MenuButton name={"Log out"} icon={<FaSignOutAlt/>}/>

                        {/* Other menu items */}
                    </ul>
                </div>
            </div>
        </div>
    )
        ;
};

export default NavDrawer;