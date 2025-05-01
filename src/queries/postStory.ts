import {IStory} from "@/lib/types";

export const postStory = async (data: IStory) => {
    const res = await fetch(`${process.env.STRAPI_API}/api/story`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer `
        },
        body: JSON.stringify({
            title: data.title,
            description: data.description,
            story_text: data.story_text,
            story_avatar: data.story_avatar,
            story_tags: data.story_tags,
            story_genres: data.story_genres,
        }),
    });

    if (res.ok) {
        console.log("Your story has been posted!");
    }
}