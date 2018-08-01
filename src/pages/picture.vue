<template>
    <div>
        <v-image ref="oatherImage"
            @dragmove="moveImg"
            @mouseover="cursordragOver"
            @mouseout="cursordragOut"
            :config="{
                x: `${pictureDragX}`,
                y: `${pictureDragY}`,
                image: drawPhoto(),
                width: `${width}`,
                height: `${height}`,
                opacity: `${opacity}`,
                rotation: `${rotation}`,
                draggable: true
                }"
            >
        </v-image>
    </div>
</template>

<script>
export default{
  name: 'canvaPicture',
  props: {
    pictureDragX: {
      type: Number,
      default: 100
    },
    pictureDragY: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    opacity: {
      type: Number,
      default: 1
    },
    rotation: {
      type: Number,
      default: 0
    },
    picture: {
      type: String,
      default: ''
    }
  },
  methods: {
    drawPhoto () {
      let addImg = new Image()
      addImg.src = this.picture
      return addImg
    },
    moveImg () {
      this.pictureDragX = this.$refs.oatherImage.getStage()._lastPos.x
      this.pictureDragY = this.$refs.oatherImage.getStage()._lastPos.y
    },
    cursordragOver () {
      document.body.style.cursor = 'pointer'
    },
    cursordragOut () {
      document.body.style.cursor = 'default'
    }
  }
}
</script>
