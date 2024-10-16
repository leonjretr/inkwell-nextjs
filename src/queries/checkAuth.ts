import registerStore from "@/stores/registerStore";

export const checkAuth = async () => {
    const checkAuthorization = await fetch("/api/auth/check", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (checkAuthorization.ok) {
        registerStore.setAuthorizedTrue();
        return console.log("User authorized successfully");
    } else {
        registerStore.setAuthorizedFalse();
        console.error("User has not been authorized successfully. Try again");
    }
}