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
    story_avatar: string;
    story_tags: string[];
    story_genres:string[];
}