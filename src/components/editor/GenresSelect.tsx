import {useEffect, useState} from "react";
import {IGenresData} from "@/lib/types";
import {getGenres} from "@/queries/getGenres";

type Props = {
    genre: number | undefined;
    setGenre: (value: number | undefined) => void;
};

export default function GenresSelect({genre, setGenre}: Props) {
    const [genres, setGenres] = useState<IGenresData>();
    useEffect(() => {
        const getData = async () => {
            const result = await getGenres();
            setGenres(result);

        }
        getData();
    }, []);


    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">Select Genre</label>
            <select
                value={genre}
                onChange={(e) => setGenre(Number(e.target.value))}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                required>
                <option value="">-- Select Genre --</option>
                {genres?.data.map((g) => (
                    <option key={g.id} value={g.id} onChange={() => console.log(g.id)}>
                        {g.name}
                    </option>
                ))}
            </select>
        </div>
    );
}



// const genresList = [
//     'Horror',
//     'Detective',
//     'Thriller',
//     'Adventures',
//     'Thriller',
//     'Horror',
//     'Historical',
//     'Young Adult',
//     'Drama',
//     'Adventure',
//     'Poetry',
// ];
