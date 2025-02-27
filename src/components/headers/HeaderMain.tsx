"use client"
import React, {useEffect} from 'react';
import Logo from "@/components/logo/Logo";
import SearchBar from "@/components/search-bar/SearchBar";
import LoginSignButton from "@/components/buttons/LoginSignButton";
import Modal from "@/components/modals/Modal";
import SignUpButton from "@/components/buttons/SignUpButton";
import LoginModal from "@/components/modals/LoginModal";
import SignUpModal from "@/components/modals/SignUpModal";
import {useModalStore} from "@/stores/useModalStore";
import HeaderProfile from "@/components/profile/HeaderProfile";
import {checkAuth} from "@/queries/checkAuth";
import registerStore from "@/stores/registerStore";
import {observer} from "mobx-react-lite";

interface Response {
    message: string | undefined;
}

const HeaderMain = () => {
    const loginModalOpened = useModalStore((state) => state.isLoginModalOpened);
    const registerModalOpened = useModalStore((state) => state.isRegisterModalOpened);
    const setLoginModalOpened = useModalStore((state) => state.openLoginModal);
    const setLoginModalClosed = useModalStore((state) => state.closeLoginModal);
    const setRegisterModalOpened = useModalStore((state) => state.openRegisterModal);
    const setRegisterModalClosed = useModalStore((state) => state.closeRegisterModal);

    const [isAuth, setIsAuth] = React.useState<Response>({message: undefined});
    useEffect(() => {
        const checkAuthentication = async () => {
            const resData = await checkAuth()
                .catch((error) => {
                    console.error(error + "The error happened while trying to authorize user.")
                })
                .then();
            setIsAuth(resData)
        }
        checkAuthentication();
    }, [registerStore.isAuthorized]);


    useEffect(() => {
        if (loginModalOpened || registerModalOpened) {
            document.body.style.overflow = 'hidden';
            // document.body.classList.add('overflow-hidden');
        } else {
            document.body.style.overflow = 'unset';
            // document.body.classList.remove('overflow-hidden');
        }
    }, [registerModalOpened, loginModalOpened]);


    return (
        <div
            className={"bg-headerColor w-full h-20 flex justify-between items-center px-3 border-b border-gray-300"}>
            <Logo/>
            <SearchBar/>
            {isAuth.message == "Authorized" ? <HeaderProfile/> : <div>
                <LoginSignButton openModal={setLoginModalOpened}/>
                <SignUpButton openModal={setRegisterModalOpened}/>
            </div>}
            <>
                <Modal showModal={loginModalOpened} closeModal={setLoginModalClosed}>
                    <LoginModal closeModal={setLoginModalClosed}/>
                </Modal>
                <Modal showModal={registerModalOpened} closeModal={setRegisterModalClosed}>
                    <SignUpModal closeModal={setRegisterModalClosed}/>
                </Modal>
            </>
        </div>
    );
};

export default observer(HeaderMain);