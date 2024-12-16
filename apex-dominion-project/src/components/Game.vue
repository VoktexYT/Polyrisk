<template>
    <h1>{{ msg }}</h1>
    <div ref="gameContainer" class="game-container"></div>
</template>
  
<script lang="ts">
    import { Vue } from 'vue-class-component';
    import Phaser from 'phaser';

    import BootScene from '@/scenes/BootScene';
    import MainScene from '@/scenes/MainScene';
  
    export default class Game extends Vue {
        private game!: Phaser.Game;

        mounted() {
            this.createGame();
        }

        beforeDestroy() {
            this.destroyGame();
        }

        private createGame() {
            const config: Phaser.Types.Core.GameConfig = {
                type: Phaser.AUTO,
                width: 800,
                height: 600,
                parent: this.$refs.gameContainer as HTMLElement,
                scene: [BootScene, MainScene], // Add the scenes here
            };

            this.game = new Phaser.Game(config);
        }

        private destroyGame() {
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
  