import {TileDataProperties} from "../../data/types";

export default abstract class TileCategory {
    constructor(private category: TileDataProperties) {}

    abstract event(callback: () => {}): void;
    public get getCategory(): TileDataProperties {
        return this.category;
    }
}