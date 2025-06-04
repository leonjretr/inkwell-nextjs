export const getMe = async () => {
    const getMyData = await fetch("/api/reqs/me", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache:"force-cache",
    });
    if (getMyData.ok) {
        return getMyData.json();
    } else {
        console.log("User data has not been fetched. Try again");
        return getMyData.json();
    }
}