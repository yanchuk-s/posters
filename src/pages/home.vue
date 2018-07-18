<template>
    <div>
        <h1>HOME</h1>
    </div>
</template>

<style>
</style>

<script>
import Vue from 'vue'
import VueKonva from 'vue-konva'
Vue.use(VueKonva)
export default {
  name: 'Home',
  data: () => ({
    modelHex: '#C7044B',

    // and the other types of models:
    modelHexa: '#F0FF1CBF',
    modelRgb: { r: 112, g: 204, b: 55 },
    modelRgba: { r: 138, g: 36, b: 138, a: 64 },
    configKonva: {width: 200, height: 200},
    configCircle: {x: 100, y: 100, radius: 70, fill: 'red', stroke: 'black', strokeWidth: 4}
  })
}
</script>
