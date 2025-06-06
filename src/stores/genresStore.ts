import { IGenresData } from "@/lib/types";
import {makeAutoObservable, runInAction} from "mobx";
import {getGenres} from "@/queries/getGenres";


class GenreStore {
    genres: IGenresData | undefined = undefined;
    isLoading = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
        this.fetchGenres(); // auto-fetch once when the store is created
    }

    async fetchGenres() {
        this.isLoading = true;
        try {
            const data = await getGenres();
            runInAction(() => {
                this.genres = data;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}

const genreStore = new GenreStore();
export default genreStore;
