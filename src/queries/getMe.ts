export const getMe = async () => {
    const getMyData = await fetch("/api/reqs/me", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (getMyData.ok) {
        return getMyData.json();
    } else {
        console.log("User data has not been fetched. Try again");
        return getMyData.json();
    }
}