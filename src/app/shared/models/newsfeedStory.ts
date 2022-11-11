export interface NewsfeedStory {
    publisherName: string | undefined;
    publisherTime?: string;
    publisherImg: string | undefined;
    content: Content;
    comment?: Comment[];
    likedIdList?: LikedIdList[];
    _id?: string;
}

export interface Content {
    image?: string;
    text?: string;
    video?: string;
}

export interface LikedIdList {
    userId: string;
    _id: string;
}

export interface Comment {
    content: Content;
    publisherName: string | undefined;
    publisherTime?: string;
    _id?: string;
}


export interface LikeList {
    publisherName: string;
    publisherTime: string;
    publisherImg: string | undefined;
    content: Content;
    _id: string;
}