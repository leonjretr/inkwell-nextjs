"use client"
import React, {useEffect, useState} from 'react';
import Logo from "@/components/logo/Logo";
import SearchBar from "@/components/search-bar/SearchBar";
import LoginSignButton from "@/components/buttons/LoginSignButton";
import Modal from "@/components/modals/Modal";
import SignUpButton from "@/components/buttons/SignUpButton";
import LoginModal from "@/components/modals/LoginModal";
import SignUpModal from "@/components/modals/SignUpModal";
import {useModalStore} from "@/stores/useModalStore";

const HeaderMain = () => {
    const loginModalOpened = useModalStore((state) => state.isLoginModalOpened);
    const registerModalOpened = useModalStore((state) => state.isRegisterModalOpened);
    const setLoginModalOpened = useModalStore((state) => state.openLoginModal);
    const setLoginModalClosed = useModalStore((state) => state.closeLoginModal);
    const setRegisterModalOpened = useModalStore((state) => state.openRegisterModal);
    const setRegisterModalClosed = useModalStore((state) => state.closeRegisterModal);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    useEffect(() => {
        if (loginModalOpened || registerModalOpened) {
            document.body.style.overflow = 'hidden';
            // document.body.classList.add('overflow-hidden');
        } else {
            document.body.style.overflow = 'unset';
            // document.body.classList.remove('overflow-hidden');
        }
    }, [registerModalOpened, loginModalOpened]);

    const handleEmailChange = (e:React.ChangeEvent<HTMLFormElement>) => {
        setLoginEmail(e.target.value);
    }
    const handlePasswordChange = (e:React.ChangeEvent<HTMLFormElement>) => {
        setLoginPassword(e.target.value);
    }

    return (
        <div className={"bg-headerColor w-full h-20 flex justify-between items-center px-3 border-b border-gray-300"}>
            <Logo/>
            <SearchBar/>
            <div>
                <LoginSignButton openModal={setLoginModalOpened}/>
                <SignUpButton openModal={setRegisterModalOpened}/>
            </div>

            <Modal showModal={loginModalOpened} closeModal={setLoginModalClosed}>
                <LoginModal closeModal={setLoginModalClosed}/>
            </Modal>
            <Modal showModal={registerModalOpened} closeModal={setRegisterModalClosed}>
                <SignUpModal closeModal={setRegisterModalClosed}/>
            </Modal>
        </div>
    );
};

export default HeaderMain;