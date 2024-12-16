import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    private logo: Phaser.GameObjects.Image | undefined;
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        this.logo = this.add.image(400, 300, 'logo');
    }

    update() {
        if (this.logo)
        {
            this.logo.x += 0.1;
        }
    // Game update logic here
    }
}
