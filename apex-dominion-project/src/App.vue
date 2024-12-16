<template>
  <Game />
   <!-- <Interface></Interface> -->
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Game from '@/components/Game.vue';
  import Interface from '@/components/Interface.vue';

  @Options({
    components: {
      Game,
    },
  })

  export default class App extends Vue { };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
  }
</style>
