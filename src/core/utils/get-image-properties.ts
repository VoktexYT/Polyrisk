/*
* The code in this file is used to get image properties
* */
import tileSrcJson from "../data/tile-src.json";
import {TileSrcProperties} from "../data/types";


/*
* This function is used to get property in tile-src.json with a key
* */
export function getImagePropertyByKeySrc(keySrc: string): TileSrcProperties | null {
    let sourcePropertiesFound: TileSrcProperties | null = null;

    tileSrcJson.sources.forEach((source: TileSrcProperties) => {
        if (source.key == keySrc) {
            sourcePropertiesFound = source;
            return;
        }
    });

    return sourcePropertiesFound;
}
