<template>
    <div>
        <v-image ref="image"
            :config="{
            x: 0,
            y: 0,
            image: drawImg(),
            width: `${width}`,
            height: `${height}`,
            opacity: `${opacity}`,
            }"
        >
        </v-image>
    </div>
</template>
<script>
export default{
  name: 'canvaBackground',
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    opacity: {
      type: Number,
      default: 1
    },
    background: {
      type: String,
      default: 'http://4.bp.blogspot.com/-EAf9GFumnH4/VEofl7dE0WI/AAAAAAAABCQ/3bjCVL24UMs/s1600/10735611_1713629975528968_1094024815_n.jpg'
    }
  },
  methods: {
    drawImg () {
      let imageObj = new Image()
      imageObj.src = this.background
      return imageObj
    }
  }
}
</script>
