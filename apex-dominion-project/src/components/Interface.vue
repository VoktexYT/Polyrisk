<template>
    <div class="interface" :style="dynamicSize">
        <h1 id="title">Un simple menu</h1>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';


    export default class Interface extends Vue {
        @Prop(String) readonly width!: string;
        @Prop(String) readonly height!: string;

        get dynamicSize()
        {
            return {
                width: this.width,
                height: this.height,
            }
        }
    };


</script>

<style scoped>
.interface
{
    position: absolute;
    pointer-events: none;
}

#title
{
    text-align: center;
    background-color: white;
}
</style>
