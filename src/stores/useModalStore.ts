import {create} from "zustand";

interface ModalState {
    isLoginModalOpened: boolean;
    isRegisterModalOpened: boolean;
    loginEmail:string;
    loginPassword:string;
    registerEmail:string;
    registerPassword:string;
}
interface ModalAction {
    openLoginModal: () => void;
    closeLoginModal: () => void;
    openRegisterModal: () => void;
    closeRegisterModal: () => void;

    setLoginEmail: (email: string) => void;
    setLoginPassword: (password: string) => void;

    setRegisterEmail: (email: string) => void;
    setRegisterPassword: (password: string) => void;
}

export const useModalStore = create<ModalState & ModalAction>((set) => ({
    isLoginModalOpened: false,
    isRegisterModalOpened: false,
    loginEmail:" ",
    loginPassword:" ",
    registerEmail:" ",
    registerPassword:" ",

    openLoginModal: () => set(() => ({isLoginModalOpened: true})),
    closeLoginModal: () => set(() => ({isLoginModalOpened: false})),

    openRegisterModal: () => set(() => ({isRegisterModalOpened: true})),
    closeRegisterModal: () => set(() => ({isRegisterModalOpened: false})),

    setLoginEmail: (loginEmail) => set(() => ({loginEmail:loginEmail})),
    setLoginPassword: (loginPassword) => set(() => ({loginPassword: loginPassword})),

    setRegisterEmail: () => set(() => ({isRegisterModalOpened: true})),
    setRegisterPassword: () => set(() => ({isRegisterModalOpened: false})),
}))