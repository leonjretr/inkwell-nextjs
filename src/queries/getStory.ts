export const getStory = async (storyId: number) => {
    const res = await fetch(`http://localhost:1337/api/stories?filters[id][$eq]=${storyId}&populate=*`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error("Failed to fetch story by id");
    }

    return await res.json();
};
