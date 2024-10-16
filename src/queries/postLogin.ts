import registerStore from "@/stores/registerStore";
import {ILogin} from "@/types/ILogin";

export const postLogin = async (
    data: ILogin,
    closeModal: () => void,
) => {
    const res = await fetch("/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identifier: data.email,
            password: data.password,
        }),
    });

    const responseData = await res.json();
    // Handle response (saving JWT token)
    if (res.ok) {
        console.log("You have been successfully logged in!");
        registerStore.setLoginSuccessfulTrue();
        setTimeout(() => {
            closeModal();
        }, 3000);
    } else {
        console.error("Failed to update user name", responseData);
        registerStore.setLoginSuccessfulFalse();
        // registerStore.setRegistrationSuccessfulTrue();
        // setTimeout(() => {
        //     closeModal();
        //     registerStore.setRegistrationSuccessfulFalse();
        // }, 3000);
    }
};
