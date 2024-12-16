import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    private logo: Phaser.GameObjects.Image | undefined;
    constructor() {
        super({ key: 'MainScene' });
    }

    getRandomHexColor(): number {
        const letters = '0123456789ABCDEF';
        let color = '';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return  parseInt(color, 16);
    }

    createMap() {
        const size = 50;
        const points = this.generateHexagonPoints(size);
        let addMargin = true;
        let num = 1;

        for (let y=100; y<2000; y += 40)
        {
            if (addMargin) {
                num = 1;
            } else {
                num = 0;
            }

            for (let x=100; x<2000; x += 150)
            {
                const hexagon = this.add.polygon(x + 75 * num, y, points, this.getRandomHexColor(), 1);
                hexagon.setStrokeStyle(2, 0x000000);
            }

            addMargin = !addMargin;
        }
    }

    create() {
        this.createMap();
        
        this.cameras.main.setBounds(0, 0, 1024, 1024);
        this.cameras.main.setZoom(1);
        this.cameras.main.centerOn(0, 0);
        const THIS = this;
        this.input.on('pointerdown', function () {
            var cam = THIS.cameras.main;
            cam.pan(500, 500, 2000, 'Power2');
            cam.zoomTo(4, 3000);
        }, this);
    }

    generateHexagonPoints(radius: number): number[] {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = Phaser.Math.DegToRad(60 * i);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            points.push(x, y);
        }
        return points;
    }

    update() {
        if (this.logo)
        {
            this.logo.x += 0.1;
        }
    }
}
