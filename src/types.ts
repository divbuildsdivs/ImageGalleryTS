export interface ImageInfo {
    url?: string;
    description? :string;
    title: string;
}

export interface NatureImageData {
    [category: string]: ImageInfo[];
}