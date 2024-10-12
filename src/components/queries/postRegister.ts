import {IRegisterName, IRegisterStock} from "@/types/Registration";
import registerStore from "@/stores/registerStore";

export const postRegister = async (
    data: IRegisterStock & IRegisterName,
    setCookie: (name: "jwt", value: string, options?: object) => void,
    closeModal: () => void,
) => {
    const res = await fetch("http://localhost:1337/api/auth/local/register", {
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

    // Handle response (saving JWT token)
    if (res.ok && responseData.jwt) {
        // Store JWT in a cookie
        setCookie('jwt', responseData.jwt, {
            secure: true,
            sameSite: 'strict',
            path: '/', // Make cookie accessible across your app
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Expires in 7 days
        })
        // After registration, make an additional request to update the user's name
        const userId = responseData.user.id; // Get the registered user ID
        const updateRes = await fetch(`http://localhost:1337/api/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${responseData.jwt}`, // Send the JWT token
            },
            body: JSON.stringify({
                name: data.name, // Update the name field
            }),
        });

        const updateData = await updateRes.json();
        if (updateRes.ok) {
            console.log("User name updated successfully", updateData);
            closeModal();
        } else {
            console.error("Failed to update user name", updateData);
            closeModal();
        }
    } else {
        registerStore.setUsernameTakenTrue();
        registerStore.setFetchError(responseData.error.message);
        console.error("Registration failed", responseData.error.message);
    }
};
