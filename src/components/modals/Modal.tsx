import React, {FC} from "react";

interface LoginModalProps {
    showModal: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}

const Modal: FC<LoginModalProps> = ({showModal, closeModal, children}) => {
    if (!showModal) return null;
    return (
        <div
            className="fixed inset-12 flex place-items-center justify-center z-50 overflow-y-auto overflow-x-hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50 overscroll-hidden backdrop-blur-sm"
                 onClick={closeModal}></div>
            <div className="bg-white relative text-center p-4 rounded-xl z-10 break-all w-full max-w-md max-h-full">
                {children}
            </div>
        </div>
    );
};

export default Modal;