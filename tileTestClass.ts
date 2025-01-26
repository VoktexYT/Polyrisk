const data = {
    "tiles":
        [
            {
                id: 1,
                name: "grassTile",
                src: {
                    key: "3d-tiles-last",
                    index: 0
                },
                type: "ground"
            },

            {
                id: 2,
                name: "waterTile",
                src: {
                    key: "3d-tiles-last",
                    index: 1
                },
                type: "fluid"
            }
        ]
}

interface TileProperties {
    id: number;
    name: string;
    src: { key: string; index: number };
    type: string;
}

class Tile {
    constructor(
        public id: number,
        public name: string,
        public src: { key: string, index: number },
        public type: string
    ) {}

    describe(): void {
        console.log(`[${this.id}]: ${this.name} | TYPE: ${this.type}`);
    }
}

abstract class TileType {
    constructor(public tile: Tile) {}

    abstract events(): void;
}

class GroundType extends TileType {
    events(): void {
        console.log("[GroundType] Events");
    }
}

class FluidType extends TileType {
    events(): void {
        console.log("[FluidType] Events");
    }
}

// Factory class responsible for creating tile instances based on type
class TileFactory {
    static createTile(tileProps: TileProperties): TileType {
        const tile = new Tile(tileProps.id, tileProps.name, tileProps.src, tileProps.type);

        switch (tile.type) {
            case "ground":
                return new GroundType(tile);
            case "fluid":
                return new FluidType(tile);
            default:
                throw new Error(`Unknown tile type: ${tile.type}`);
        }
    }
}

class TileMap {
    constructor(private map: number[]) {}

    getTileProperty(id: number): TileProperties | null {
        for (const property of data.tiles) {
            if (id === property.id) {
                return property;
            }
        }
        return null;
    }

    makeTiles(): TileType[] {
        const tileMap: TileType[] = [];

        for (const id of this.map) {
            const property = this.getTileProperty(id);

            if (property) {
                const tile = TileFactory.createTile(property);  // Using the factory to create the tile
                tileMap.push(tile);
            }
        }

        return tileMap;
    }
}

function main() {
    const map = [1, 2];
    const tileMapObject = new TileMap(map);
    const tileMap: TileType[] = tileMapObject.makeTiles();

    tileMap.forEach(tile => tile.events());
}

main();
