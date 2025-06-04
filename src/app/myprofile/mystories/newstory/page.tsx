"use client"
import React, {useState} from 'react';
import BlockNote from '@/components/editor/BlockNote';
import {IStory} from "@/lib/types";
import toast from 'react-hot-toast';
import TitleInput from '@/components/editor/TitleInput';
import PhotoUpload from '@/components/editor/PhotoUpload';
import DescriptionInput from '@/components/editor/DescriptionInput';
import GenresSelect from '@/components/editor/GenresSelect';
import {getMe} from "@/queries/getMe";
import TagsManager from "@/components/editor/TagsManager";
import {useRouter} from "next/navigation";


const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState<number>();
    const [tags, setTags] = useState<string[]>([]);
    const [photo, setPhoto] = useState<File | null>(null);
    const [blocks, setBlocks] = useState<string>(" ");

    const router = useRouter();

    const handleSubmit = async () => {
        if (title.trim().length < 2) return toast.error('Title must be at least 2 characters.');
        if (description.trim().length < 5) return toast.error('Description must be at least 50 characters.');
        if (!blocks) {
            return toast.error('Story must be at least 750 characters');
        }
        if (!genre) {
            return toast.error("Sorry, you haven't assigned any genre")
        }

        await getMe()
            .catch((error) => {
                console.error(error + "The error happened while trying to authorize user.")
            })
            .then();

        const data: IStory = {
            title,
            description,
            story_text: blocks,
            genre: genre,
            tags: JSON.stringify(tags),
        };


        try {
            const res = fetch("/api/reqs/post-story", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: data.title,
                    description: data.description,
                    story_text: data.story_text,
                    genre: data.genre,
                    tags: data.tags,
                }),
            }).finally(() => router.push('/myprofile/mystories'));

            await toast.promise(res, {
                loading: "Just a moment...",
                success: "Story posted successfully!🎉🎉",
                error: "Oops, something went wrong!😱😱"
            })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className={"flex justify-center font-poppinsFont text-2xl font-bold m-5"}>
                Create new story
            </div>
            <div className={"flex justify-center gap-x-32"}>
                <div className={"flex flex-col gap-y-5"}>
                    <TitleInput title={title} setTitle={setTitle}/>
                    <DescriptionInput description={description} setDescription={setDescription}/>
                    <TagsManager tags={tags} setTags={setTags}/>
                </div>
                <div className={"flex flex-col gap-y-5"}>
                    <PhotoUpload photo={photo} setPhoto={setPhoto}/>
                    <GenresSelect genre={genre} setGenre={setGenre}/>
                </div>
            </div>
            <div className="flex w-full justify-center p-7">
                <BlockNote setBlocks={setBlocks}/>
            </div>
            <div className={"flex justify-center m-5"}>
                <button
                    onClick={handleSubmit}
                    className="w-max bg-fuchsia-500 p-3 font-poppins font-semibold text-white rounded-lg hover:bg-fuchsia-700 transition"
                >
                    Publish!
                </button>
            </div>
        </div>
    );
};

export default Page;