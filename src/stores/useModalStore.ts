import {create} from "zustand";

interface ModalStateProps {
    isLoginModalOpened: boolean;
    isRegisterModalOpened: boolean;
    openLoginModal: () => void;
    closeLoginModal: () => void;
    openRegisterModal: () => void;
    closeRegisterModal: () => void;
}

export const useModalStore = create<ModalStateProps>((set) => ({
    isLoginModalOpened: false,
    isRegisterModalOpened: false,

    openLoginModal: () => set(() => ({isLoginModalOpened: true})),
    closeLoginModal: () => set(() => ({isLoginModalOpened: false})),

    openRegisterModal: () => set(() => ({isRegisterModalOpened: true})),
    closeRegisterModal: () => set(() => ({isRegisterModalOpened: false})),
}))