import Phaser from "phaser";

import HexagonCollideTile from "./Collides";
import HexagonFluidTile from "./Fluids";
import HexagonRessourceTile from "./Ressources";
import HexagonStructureTile from "./Structures";
import HexagonTerrainTile from "./Terrains";

import { TileType } from "../Const";


const TileClasses = {
    [TileType.Collide]: HexagonCollideTile,
    [TileType.Fluid]: HexagonFluidTile,
    [TileType.Ressource]: HexagonRessourceTile,
    [TileType.Structure]: HexagonStructureTile,
    [TileType.Terrain]: HexagonTerrainTile
};

export type TileInstance<T extends TileType> = InstanceType<typeof TileClasses[T]>;

export class TileManager<T extends TileType> {
    constructor(private readonly scene: Phaser.Scene, private readonly noise: number) {}

    public createInstance(noise: number): TileInstance<T> {
        
    }
}
