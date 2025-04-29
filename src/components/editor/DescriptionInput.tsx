type Props = {
    description: string;
    setDescription: (value: string) => void;
};

export default function DescriptionInput({ description, setDescription }: Props) {
    return (
        <textarea
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        />
    );
}
