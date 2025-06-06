export interface AuthResponse {
    jwt: string;
    user: {
        id: number;
        username: string;
        email: string;
    };
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRegisterStock {
    username: string;
    email: string;
    password: string;
}

export interface IRegisterName {
    name: string;
}

export interface IStory {
    title: string;
    description: string;
    story_text: string;
    story_avatar?: string;
    tags?: string;
    genre: number | undefined;
}

export interface IUser {
    id: number;
    name: string | null;
    username: string | null;
    email: string;
}

export interface IGenre {
    id: number | undefined;
    genre_id: number;
    name: string;
    locale: string | null;
}

export interface IGenresData {
    data: IGenre[];
}

export interface IStoryData {
    data: IStory[];
}

export interface IStory2 {
    id:number;
    title: string;
    description: string;
    story_text: string;
    story_avatar?: string;
    tags: string;
    genre: number | undefined;
    author: IUser2;
    createdAt: string;
}
export interface IStoryData2 {
    data: IStory2[];
}
export interface IUser2 {
    id: number;
    name: string;
    username: string;
    email: string;
}