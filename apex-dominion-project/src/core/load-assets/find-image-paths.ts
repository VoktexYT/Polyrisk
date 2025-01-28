/*
* This file is used to find all image in assets folder
* */

// Node
let fs = require("fs");
let path = require("path");

// Files
import {ASSETS_PATH} from "@/constants/const";

/*
* This function is used to find path of all images
* @return An array of all image file paths
* */
export default function findImageFilesPath(): string[] {
    let pngFiles: string[] = [];

    const files = fs.readdirSync(ASSETS_PATH);

    files.forEach((file: any) => {
        const filePath = path.join(ASSETS_PATH, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            pngFiles = pngFiles.concat(findImageFilesPath()); // Recursively search in subdirectories
        } else if (filePath.endsWith('.png')) {
            pngFiles.push(filePath);
        }
    });

    return pngFiles;
}



