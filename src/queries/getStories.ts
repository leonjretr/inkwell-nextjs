import toast from "react-hot-toast";

export const getStories = async () => {
    const getData = await fetch("http://localhost:1337/api/stories?populate=*", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: "no-store"
    })
    const result = await getData.json();
    console.log("Fetched stories from API:", result);

    if (!getData.ok) {
        toast.error("Something happened while fetching data...")
    }
    return result;
}