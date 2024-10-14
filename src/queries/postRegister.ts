import {IRegisterName, IRegisterStock} from "@/types/Registration";
import registerStore from "@/stores/registerStore";

export const postRegister = async (
    data: IRegisterStock & IRegisterName,
    closeModal: () => void,
) => {
    const res = await fetch("/api/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
        }),
    });
    const responseData = await res.json();
    console.log(responseData.user.user.id);
    const userId = responseData.user.user.id;
    // Handle response (saving JWT token)
    if (res.ok) {
        // After registration, make an additional request to update the user's name
        const updateRes = await fetch(`/api/auth/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                userId: userId,// Update the name field
            }),
        });

        const updateData = await updateRes.json();
        if (updateRes.ok) {
            console.log("User name updated successfully", updateData);
            registerStore.setRegistrationSuccessfulTrue();
            setTimeout(() => {
                closeModal();
                registerStore.setRegistrationSuccessfulFalse();
            }, 3000);
        } else {
            console.error("Failed to update user name", updateData);
            // registerStore.setRegistrationSuccessfulTrue();
            // setTimeout(() => {
            //     closeModal();
            //     registerStore.setRegistrationSuccessfulFalse();
            // }, 3000);
        }
    } else {
        registerStore.setUsernameTakenTrue();
        console.log("error is here")
        registerStore.setFetchError(responseData.error.message);
        console.error("Registration failed", responseData.error.message);
    }
};
