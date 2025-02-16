<template>
    <div ref="gameContainer" class="game-container">
        <Interface :width="width" :height="height" />
    </div>
</template>
  
<script lang="ts">
    import { Vue, Options } from 'vue-class-component';
    import Interface from './Interface.vue';

    import Phaser from 'phaser';

    import LoadScene from '../core/scenes/loads/sandbox-load-scene';
    import MainScene from '../core/scenes/games/sandbox-game-scene';

    @Options({
        components: {
            Interface,
        },
    })
  
    export default class Game extends Vue
    {
        private game!: Phaser.Game;
        width: string = "";
        height: string = "";

        mounted() {
            this.createGame();
        }

        beforeDestroy() {
            this.destroyGame();
        }

        private createGame() {
            const config: Phaser.Types.Core.GameConfig = {
                type: Phaser.WEBGL,
                width: 1920,
                height: 1080,
                parent: this.$refs.gameContainer as HTMLElement,
                scene: [LoadScene, MainScene],
                scale: {
                    mode: Phaser.Scale.FIT
                },
                fps: {
                    target: 60,
                    forceSetTimeOut: true
                },
                render: {
                    pixelArt: false,
                    antialias: true,
                    premultipliedAlpha: false,
                }
            };

            this.game = new Phaser.Game(config);
            this.game.scale.on('resize', () => {
                this.width = this.game.canvas.style.width;
                this.height = this.game.canvas.style.height;
            });
        }

        private destroyGame()
        {
            if (this.game) {
                this.game.destroy(true);
            }
        }
}
</script>
  
<style scoped>
    .game-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
  