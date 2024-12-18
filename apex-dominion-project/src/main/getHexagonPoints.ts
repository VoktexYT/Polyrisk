/**
 * This function is used to generate hexagon point with a custom radius
 * @param radius It the radius of the hexagon
 * @returns 6 points of hexagon shape
 */
export function getHexagonPoints(radius: number): number[] {
    const points = [];

    for (let i = 0; i < 6; i++) {
        const angle = Phaser.Math.DegToRad(60 * i);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push(x, y);
    }

    return points;
}