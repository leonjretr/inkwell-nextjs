type Props = {
    title: string;
    setTitle: (value: string) => void;
};

export default function TitleInput({ title, setTitle }: Props) {
    return (
        <input
            type="text"
            placeholder="Story Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            required={true}
        />
    );
}