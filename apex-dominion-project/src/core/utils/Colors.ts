import { MAX_HEX_COLOR } from "../../constants/Const";

/**
 * This function is used to generate random hex color
 * @returns Return a random hex color #FFFFFF for white
 */
export function getRandomHexColor(): number {
    const BASE = 16;

    let randomNumber = Math.floor(Math.random() * parseInt(MAX_HEX_COLOR, BASE));

    let hexColor = randomNumber.toString(BASE).padStart(6, "0")

    return  parseInt(hexColor, BASE);
}