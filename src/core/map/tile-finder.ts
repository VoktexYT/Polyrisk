/*
*
* This file is used to identify a tile with noise range value and his properties
* #Second and Third step in map creation
*
* */
import tileDataJson from "@/core/data/tile-data.json";
import tileSrcJson from "@/core/data/tile-src.json";
import {TileDataProperties, TileSrcProperties} from "@/core/data/types";

/*
* This function is used to return the tile name using the noise range
* @param noiseRange The noise in procedural 2D map
* @return The tile name (ex: grass for noise range [0.1, 0.2])
* */
export function getTileNameByNoiseRange(noiseRange: [number, number]): TileDataProperties | null {
    let objectFound: TileDataProperties | null = null;

    tileDataJson.tiles.forEach((tileProperties: TileDataProperties): void => {
        let isSameNoiseRange: boolean = (
            tileProperties.noiseRange[0] == noiseRange[0] &&
            tileProperties.noiseRange[1] == noiseRange[1]
        );

        if (isSameNoiseRange) {
            objectFound = tileProperties;
            return;
        }
    });

    return objectFound;
}

/*
* This function is used to return source of tile image with key src
* Ex: key: "3d-tiles" => "@/assets/3d-tiles.png"
* @param keySrc The key source
* @return The source path of tile (key source) image
* */
function getTileImageSourceByKeySrc(keySrc: string): string {
    let imageSource: string = "";

    tileSrcJson.sources.forEach((element: TileSrcProperties): void => {
        if (keySrc == element.key) {
            imageSource = element.src;
            return;
        }
    })

    return imageSource;
}
