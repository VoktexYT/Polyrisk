/**
 * This function is used to generate random hex color
 * @returns Return a random hex color #FFFFFF for white
 */
export function getRandomHexColor(): number {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return  parseInt(color, 16);
}