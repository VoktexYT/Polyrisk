/*
* For this .json file : apex-dominion-project/src/core/data/tile-data.json
* */
export type TileDataProperties = {
    noiseRange: number[];
    name: string;
    src: {
        key: string;
        index: number;
    };
    category: string;
}

export interface TileDataJson {
    tiles: TileDataProperties[];
};

/*
* For this .json file : apex-dominion-project/src/core/data/tile-src.json
* */
export type TileSrcProperties = {
    key: string;
    config: {
        frameWidth: number;
        frameHeight: number;
    }
    src: string;
}
export interface TileSrcJson {
    "sources": TileSrcProperties[]
};


/*
* Different keywords using in json
 */
const KEYWORDS: [{name: string, src: string}] = [
    {
        name: "ASSETS",
        src: "assets"
    }
];

export function replaceKeywordSrc(src: string)
{
    KEYWORDS.forEach((keyword) => {
        src = src.replace(`[${keyword.name}]`, keyword.src);
    });

    return src;
}
