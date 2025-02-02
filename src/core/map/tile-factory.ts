/*
*
* This file is used to generate tile object with his category (Ex: Tile() with Ground() category)
* #Fourth step in map creation
*
* */
import Tile from "@/core/tiles/tile";

// categories
import Fluid from "@/core/tiles/categories/fluid";
import Ground from "@/core/tiles/categories/ground";
import Collide from "@/core/tiles/categories/collide";
import TileCategory from "@/core/tiles/categories/tile-category";

import {FLUID_CATEGORY, GROUND_CATEGORY, COLLIDE_CATEGORY} from "@/constants/tiles";

class TileFactory {
    public constructor(private tile: Tile) {}

    public get getFactoryTile(): TileCategory | null {
        switch (this.tile.property.category) {
            case FLUID_CATEGORY:
                return new Fluid(this.tile);
            case GROUND_CATEGORY:
                return new Ground(this.tile);
            case COLLIDE_CATEGORY:
                return new Collide(this.tile);
            default:
                return null;
        }
    }
}