import React from 'react';
import {IoMdClose} from "react-icons/io";
import {FaBookOpen} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const InfoBanner = () => {
    return (
        <div
            className="flex gap-x-5 justify-between w-150 rounded-lg p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <Image className="rounded-lg max-w-52" src={"/images/cover2.jpg"} alt="MainPageCover" width={300} height={600}/>
            <div className={"flex flex-col"}>
                <div className="mb-4 md:mb-0 md:me-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Find out more</h2>
                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                        Thank you for visiting our website! To find out more about how to add your own story or
                        edit someone else - click Learn more.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam lorem odio, convallis id dictum vulputate, convallis quis ante.
                        Quisque elementum massa eu nulla maximus, sed ultricies lacus facilisis.
                        Maecenas ex nunc, viverra ac eros non, hendrerit congue dolor.
                        Maecenas mattis nulla ac scelerisque finibus. Nunc eu scelerisque enim, ut pulvinar ex.
                        Ut sollicitudin eleifend lacus id tristique. Suspendisse mattis at dui et ullamcorper. </p>
                </div>
                <div className="flex justify-between mt-3 items-center flex-shrink-0">
                    <Link href="/about"
                          className="inline-flex items-center justify-center px-3 py-2 me-3 text-sm font-bold text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-500 border border-gray-200 rounded-lg focus:outline-none hover:bg-gradient-to-r hover:from-lime-400 hover:to-cyan-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <button className={"flex items-center"}>
                            <FaBookOpen className={"mr-3"}/>
                            Learn more
                        </button>
                    </Link>
                    {/*<button data-dismiss-target="#informational-banner" type="button"*/}
                    {/*        className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">*/}
                    {/*    <IoMdClose/>*/}
                    {/*    <span className="sr-only">Close banner</span>*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
};

export default InfoBanner;