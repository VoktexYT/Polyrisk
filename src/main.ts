import 'phaser';
import Center = Phaser.Scale.Center;
import LoadScene from "./core/scenes/loads/sandbox-load-scene.ts";
import MainScene from "./core/scenes/games/sandbox-game-scene.ts";


document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');

    if (app)
    {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.WEBGL,
            width: 1920,
            height: 1080,
            parent: 'app',

            scene: [LoadScene, MainScene],
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Center.CENTER_BOTH
            },
            fps: {
                target: 60,
                forceSetTimeOut: true
            },
            render: {
                // pixelArt: false,
                // antialias: true,
                // premultipliedAlpha: false,
            }
        };

        new Phaser.Game(config);
    }

    console.log("Hello World");
})