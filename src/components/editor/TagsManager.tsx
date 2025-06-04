import React from "react";

type Props = {
    tags: string[];
    setTags: (tags: string[]) => void;
};

export default function TagsManager({tags, setTags}: Props) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        const value = input.value.trim();

        if ((e.key === 'Enter' || e.key === ',') && value) {
            e.preventDefault();

            if (tags.includes(value.toLowerCase())) return;
            if (tags.length >= 5) return;

            setTags([...tags, value.toLowerCase()]);
            input.value = '';
        }
    };

    const removeTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <div className="space-y-2 w-full max-w-full">
            <label className="block text-sm font-medium font-interFont p-1">Tags (max 5)</label>
            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Type a tag and press Enter"
                className="w-full max-w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex flex-col flex-wrap gap-2 mt-2 overflow-hidden break-all">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-fuchsia-100 text-fuchsia-700 break-all px-3 py-1 w-max max-w-full min-w-0 rounded-lg text-sm flex items-center gap-2"
                    >
                        {tag}
                        <button
                            onClick={() => removeTag(index)}
                            className="text-fuchsia-500 hover:text-fuchsia-700"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            {tags.length >= 5 && (
                <p className="text-xs text-red-500">Maximum 5 tags allowed</p>
            )}
        </div>
    );
}
