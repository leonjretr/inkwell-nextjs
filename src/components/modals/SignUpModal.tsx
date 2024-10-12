import React, {FC, useEffect, useState} from 'react';
import {postRegister} from "@/components/queries/postRegister";
import {validEmail, validPassword} from "@/regex/loginRegex";
import {useCookies} from "react-cookie";
import {observer} from "mobx-react-lite";
import registerStore from "@/stores/registerStore";

interface SignUpModalProps {
    closeModal: () => void;
}

const SignUpModal: FC<SignUpModalProps> = observer(({closeModal}) => {
    const [registerName, setRegisterName] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passWeak, setPassWeak] = useState(false);
    const [passNotMatch, setPassNotMatch] = useState(false);

    const [cookies, setCookie] = useCookies(['jwt']);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setPassWeak(false);
        setPassNotMatch(false);
        setEmailErr(false);
        registerStore.setUsernameTakenFalse();

        if (validEmail.test(registerEmail) && validPassword.test(registerPassword)) {
            if (repeatedPassword === registerPassword) {
                console.log("it posts data")
                try {
                    postRegister({
                        username: registerUsername,
                        name: registerName,
                        email: registerEmail,
                        password: registerPassword
                    }, setCookie)
                        .catch((error) => {
                            console.error("Error during registration:", error);
                        })
                } catch (error: any) {
                    console.error("Error during registration:", error);
                }
            } else {
                setPassNotMatch(true);
            }
        } else if (!validEmail.test(registerEmail) && !validPassword.test(registerPassword)) {
            setEmailErr(true);
            setPassWeak(true);
        } else if (!validEmail.test(registerEmail)) {
            setEmailErr(true);
        } else if (!validPassword.test(registerPassword)) {
            setPassWeak(true);
        }
    }

    return (
        <>
            {/*Header*/}
            <div
                className="flex items-center justify-between py-2 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold font-interFont text-gray-900 dark:text-white">
                    Create Inktells account
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
                <form onSubmit={handleSubmit}
                      className="space-y-4" action="#">
                    <div className={"flex space-x-3"}>
                        <div className={"w-full"}>
                            <label htmlFor="name"
                                   className="block mb-2 w-full text-left text-sm font-medium font-interFont text-gray-900 dark:text-white">
                                Your name*
                            </label>
                            <input
                                id="name"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterName(e.target.value)}
                                value={registerName}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="John" required/>
                        </div>
                        <div className={"w-full"}>
                            <label htmlFor="username"
                                   className="block mb-2 text-left text-sm font-medium font-interFont text-gray-900 dark:text-white">
                                Create unique username*
                            </label>
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterUsername(e.target.value)}
                                value={registerUsername}
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Doe" required/>
                            {registerStore.isUsernameTaken && (
                                <div className={"mt-1 ml-0.5 text-xss text-left font-light text-red-600 font-interFont"}>
                                    {registerStore.fetchError}
                                </div>)}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-left text-sm font-medium font-interFont text-gray-900 dark:text-white">
                            Your email*
                        </label>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterEmail(e.target.value)}
                            value={registerEmail}
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="johndoe@gmail.com" required/>
                        {emailErr && <div className={"mt-1 ml-0.5 text-xss text-left font-light text-red-600 font-interFont"}>
                            Enter correct email address.
                        </div>}
                        {registerStore.isUsernameTaken && (
                            <div className={"mt-1 text-xss ml-0.5 text-left font-light text-red-600 font-interFont"}>
                                {registerStore.fetchError}
                            </div>)}
                    </div>
                    <div className={"flex space-x-3"}>
                        <div className={"w-full"}>
                            <label htmlFor="password"
                                   className="block mb-2 text-left text-sm font-medium font-interFont text-gray-900 dark:text-white">
                                Create password*
                            </label>
                            <input value={registerPassword}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterPassword(e.target.value)}
                                   id="password" placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   required/>
                            {passWeak && <div className={"mt-1 ml-0.5 text-xss text-left font-light text-red-600 font-interFont"}>
                                Your password is not secure enough.
                            </div>}
                        </div>
                        <div className={"w-full"}>
                            <label htmlFor="password"
                                   className="block mb-2 text-left text-sm font-medium font-interFont text-gray-900 dark:text-white">
                                Repeat your password
                            </label>
                            <input value={repeatedPassword} id="password" placeholder="••••••••"
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                            {passNotMatch && <div className={"mt-1 ml-0.5 text-left text-xss font-light text-red-600 font-interFont"}>
                                Passwords do not match. Try again.
                            </div>}
                        </div>
                    </div>
                    <button type="submit"
                            className="w-full text-white bg-caribCurrent font-interFont hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Create account
                    </button>
                    <div className="text-sm font-interFont text-gray-500 dark:text-gray-300">
                        Registered? <a className="text-blue-700 hover:underline dark:text-blue-500">
                        Sign in</a>
                    </div>
                </form>
            </div>
        </>
    );
});

export default SignUpModal;