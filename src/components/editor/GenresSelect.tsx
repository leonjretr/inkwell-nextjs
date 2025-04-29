type Props = {
    genre: string;
    setGenre: (value: string) => void;
};

const genresList = [
    'Fantasy',
    'Science Fiction',
    'Romance',
    'Mystery',
    'Thriller',
    'Horror',
    'Historical',
    'Young Adult',
    'Drama',
    'Adventure',
    'Poetry',
];

export default function GenresSelect({ genre, setGenre }: Props) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">Select Genre</label>
            <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            >
                <option value="">-- Select Genre --</option>
                {genresList.map((g) => (
                    <option key={g} value={g}>
                        {g}
                    </option>
                ))}
            </select>
        </div>
    );
}
