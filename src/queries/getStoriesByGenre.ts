export const getStoriesByGenre = async (genre: string) => {
    const res = await fetch(`http://localhost:1337/api/stories?filters[genre][name][$eqi]=${genre}&populate=*`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error("Failed to fetch stories by genre");
    }

    return await res.json();
};
