type Props = {
    tagsInput: string;
    setTagsInput: (value: string) => void;
};

export default function TagsInput({ tagsInput, setTagsInput }: Props) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">Tags (comma separated)</label>
            <input
                type="text"
                placeholder="magic, adventure, dragons"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
        </div>
    );
}
