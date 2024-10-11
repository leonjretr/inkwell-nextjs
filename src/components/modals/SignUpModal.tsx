import React, {FC} from 'react';

interface SignUpModalProps {
    closeModal: () => void;
}

const SignUpModal: FC<SignUpModalProps> = ({closeModal}) => {
    return (
        <>
            {/*Header*/}
            <div
                className="flex items-center justify-between py-2 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold font-interFont text-gray-900 dark:text-white">
                    Sign in to Inkwell
                </h3>
                <button
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeModal}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>

            {/*Body*/}
            <div className="py-2">
                <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-left text-sm font-medium font-interFont text-gray-900 dark:text-white">
                            Your email
                        </label>
                        <input
                            type="email" name="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="johndoe@gmail.com" required/>
                    </div>
                    <div>
                        <label htmlFor="password"
                               className="block mb-2 text-left text-sm font-medium font-interFont text-gray-900 dark:text-white">
                            Your password
                        </label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                               required/>
                    </div>
                    <div className="flex justify-between font-interFont">
                        <div className="flex items-center">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                       required/>
                            </div>
                            <label htmlFor="remember"
                                   className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                            Lost Password?</a>
                    </div>
                    <button type="submit"
                            className="w-full text-white bg-caribCurrent font-interFont hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Login to your account
                    </button>
                    <div className="text-sm font-interFont text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                        Create account</a>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUpModal;