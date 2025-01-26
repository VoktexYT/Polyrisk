export interface TileSrcJson {
    [key: string]: string;
}

export interface TileDataJson {
    [key: string]: {
        type: string;
        key: string;
        index: number;
    }
}