import toast from "react-hot-toast";

export const getGenres = async () => {
    const getData = await fetch("http://localhost:1337/api/genres", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: "force-cache"
    })
    if (!getData.ok) {
        toast.error("Something happened while fetching data...")
    }
    return await getData.json();
}