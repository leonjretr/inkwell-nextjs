import React from 'react';
import {IoMdClose} from "react-icons/io";
import {FaBookOpen} from "react-icons/fa6";
import Link from "next/link";

const InfoBanner = () => {
    return (
        <div
            className="fixed bottom-0 start-0 z-50 flex flex-col justify-between w-full p-4 border-b border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="mb-4 md:mb-0 md:me-4">
                <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">Find out more</h2>
                <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    Thank you for visiting our website! To find out more about how to add your own story or
                    edit someone else - click Learn more </p>
            </div>
            <div className="flex items-center flex-shrink-0">
                <Link href="/about"
                      className="inline-flex items-center justify-center px-3 py-2 me-3 text-sm font-bold text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-500 border border-gray-200 rounded-lg focus:outline-none hover:bg-gradient-to-r hover:from-lime-400 hover:to-cyan-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <button className={"flex items-center"}>
                        <FaBookOpen className={"mr-3"}/>
                        Learn more
                    </button>
                </Link>
                <button data-dismiss-target="#informational-banner" type="button"
                        className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                    <IoMdClose/>
                    <span className="sr-only">Close banner</span>
                </button>
            </div>
        </div>
    );
};

export default InfoBanner;