import Phaser from "phaser";

import HexagonCollideTile from "./Collides";
import HexagonFluidTile from "./Fluids";
import HexagonRessourceTile from "./Ressources";
import HexagonStructureTile from "./Structures";
import HexagonTerrainTile from "./Terrains";


export const enum TileType {
    Fluid = "Fluid",
    Ressource = "Ressource",
    Structure = "Structure",
    Terrain = "Terrain",
    Collide = "Collide"
};


export type TileInstance<T extends TileType> = 
    T extends TileType.Collide ? HexagonCollideTile :
    T extends TileType.Fluid ? HexagonFluidTile :
    T extends TileType.Ressource ? HexagonRessourceTile :
    T extends TileType.Structure ? HexagonStructureTile :
    T extends TileType.Terrain ? HexagonTerrainTile : never;

const TileClassMap: { [key in TileType]: any } = {
    [TileType.Collide]: HexagonCollideTile,
    [TileType.Fluid]: HexagonFluidTile,
    [TileType.Ressource]: HexagonRessourceTile,
    [TileType.Structure]: HexagonStructureTile,
    [TileType.Terrain]: HexagonTerrainTile,
};


export class InterfaceTiles<T extends TileType> 
{
    constructor(private readonly tileType: T) {}

    public createInstance(noise: number): TileInstance<T> 
    {
        const TileClass = TileClassMap[this.tileType];

        if (!TileClass) 
        {
            throw new Error(`Unsupported tile type: ${this.tileType}`);
        }

        const TileInstance: TileInstance<T> = new TileClass();

        if (TileInstance instanceof HexagonCollideTile)
        {
            
        }

   

        return new TileClass() as TileInstance<T>;
    }
}