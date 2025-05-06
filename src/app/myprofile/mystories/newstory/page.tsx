"use client"
import React, {useState} from 'react';
import RichEditor from "@/components/editor/RichEditor";
import TitleInput from '@/components/editor/TitleInput';
import TagsInput from '@/components/editor/TagsInput';
import DescriptionInput from '@/components/editor/DescriptionInput'
import PhotoUpload from '@/components/editor/PhotoUpload';
import GenresSelect from "@/components/editor/GenresSelect";
import { IStory } from '@/lib/types';
import toast from 'react-hot-toast';
import {NodeHtmlMarkdown} from "node-html-markdown";

const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [tagsInput, setTagsInput] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [content, setContent] = useState<string | undefined>('');

    // const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (title.trim().length < 2) return toast.error('Title must be at least 2 characters.');
        if (description.trim().length < 5) return toast.error('Description must be at least 50 characters.');
        if (!content || content.trim().length < 5){
            console.log(content)
            console.log("it's true")
            return toast.error('Story must be at least 750 characters');
        }

        const tagsArray = tagsInput
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        const formData = new FormData();

        const contentMarkdown = NodeHtmlMarkdown.translate(content);
        const data: IStory = {
            title,
            description,
            story_text: contentMarkdown, // formatted for your editor (e.g. blocks or HTML)
            // story_genres: selectedGenreId, // must be an existing genre ID
            // story_tags: tagsArray.map(tag => ({name: tag})), // new or existing tags
        };

        formData.append('data', JSON.stringify(data));
        if (photo) formData.append('files.story_avatar', photo);

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
                }),
            });

            await toast.promise(res, {
                loading: "Just a moment...",
                success: "Story posted successfully!🎉🎉",
                error: "Oops, something went wrong!😱😱"
            })
            // toast.success('Story created!');
            // router.push('/my-stories');
        } catch (err) {
            console.error(err);
            // toast.error('Failed to create story');
        }
    };

    return (
        <div className={"flex flex-col min-h-screen"}>
            <div className={"flex justify-center my-10 font-poppinsFont text-3xl font-semibold"}>
                Post a new story
            </div>
            <div className={"flex justify-center gap-x-32"}>
                <div className={"flex flex-col gap-y-5"}>
                    <TitleInput title={title} setTitle={setTitle}/>
                    <DescriptionInput description={description} setDescription={setDescription}/>
                    <TagsInput tagsInput={tagsInput} setTagsInput={setTagsInput}/>
                </div>
                <div className={"flex flex-col gap-y-5"}>
                    <PhotoUpload photo={photo} setPhoto={setPhoto}/>
                    <GenresSelect genre={genre} setGenre={setGenre}/>
                </div>
            </div>
            <div className={"flex"}>
                <RichEditor content={content} setContent={setContent}/>
            </div>
            <div className={"flex justify-center m-5"}>
                <button
                    onClick={handleSubmit}
                    className="w-max bg-fuchsia-500 p-3 font-poppins font-semibold text-white rounded-lg hover:bg-fuchsia-700 transition"
                >
                    Let&apos;s go!
                </button>
            </div>
        </div>
    );
};

export default Page;