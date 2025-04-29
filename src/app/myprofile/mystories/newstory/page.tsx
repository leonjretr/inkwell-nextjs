"use client"
import React, {useState} from 'react';
import RichEditor from "@/components/editor/RichEditor";
import TitleInput from '@/components/editor/TitleInput';
import TagsInput from '@/components/editor/TagsInput';
import DescriptionInput from '@/components/editor/DescriptionInput'
import PhotoUpload from '@/components/editor/PhotoUpload';
import GenresSelect from "@/components/editor/GenresSelect";

const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [tagsInput, setTagsInput] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        if (!genre) {
            alert('Please select a genre');
            return;
        }

        const tagsArray = tagsInput
            .split(',')
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('genre', genre);
        formData.append('tags', JSON.stringify(tagsArray)); // send array
        formData.append('content', content); // HTML text from editor

        if (photo) formData.append('photo', photo); // actual image file

        try {
            const res = await fetch('/api/stories', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('Failed to post story');

            alert('Story posted successfully!');
        } catch (error) {
            console.error(error);
            alert('Something went wrong.');
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
                    <TagsInput tags={tagsInput} setTags={setTagsInput}/>
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