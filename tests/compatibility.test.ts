// JSON files
import tileData from "@/core/data/tile-data.json";
import tileSrc from "@/core/data/tile-src.json";
import * as jsonTypes from "@/core/data/types";

// JSON Structures
const TILE_DATA_JSON: jsonTypes.TileDataJson = tileData;
const TILE_SRC_JSON: jsonTypes.TileSrcJson = tileSrc;

describe('json-data-compatibilities', () => {
    it('should all indexs are a positive number', () => {
        for (const element of TILE_DATA_JSON.tiles) {
            const tileIndex = element.src.index;

            if (tileIndex < 0) {
                throw new Error(`Negative index at "${element.name}" in TILE_DATA_JSON`);
            }
        }
    });

    it('should tile keys are valid', () => {
        // Vérifier si une clé est valide
        const isValidKey = (key: string): boolean => {
            return Object.keys(TILE_SRC_JSON).includes(key);
        };

        // Vérification des clés
        for (const element of TILE_DATA_JSON.tiles) {
            const tileKey = element.src.key;

            // Si une clé est invalide, afficher un message clair
            if (!isValidKey(tileKey)) {
                throw new Error(
                    `Incorrect src.key: "${tileKey}" in "${element.name}". It doesn't exist in TILE_SRC_JSON.`
                );
            }
        }

        // Si aucune erreur n'est détectée, le test passe
        expect(true).toBe(true);
    });
});
