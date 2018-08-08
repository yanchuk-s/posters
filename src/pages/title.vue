<template>
    <div>
        <v-text ref="text"
            @dragmove="moveText"
            @mouseover="cursordragOver"
            @mouseout="cursordragOut"
            :config="{
                x: `${titleDragX}`,
                y: `${titleDragY}`,
                text: `${text}`,
                fontSize: `${fontSize}`,
                fontFamily: `${fontFamily}`,
                fontStyle: `${fontStyle}`,
                fill: `${fontColor}`,
                opacity: `${opacity}`,
                draggable: true,
                rotation: `${rotation}`
            }">
        </v-text>
    </div>
</template>

<script>
export default{
  name: 'canvaTitle',
  props: {
    titleDragX: {
      type: Number,
      default: 50
    },
    titleDragY: {
      type: Number,
      default: 50
    },
    text: {
      type: String,
      default: 'Some text'
    },
    fontSize: {
      type: Number,
      default: 14
    },
    fontFamily: {
      type: String,
      default: 'Roboto'
    },
    fontStyle: {
      type: String,
      default: 'normal'
    },
    fontColor: {
      type: String,
      default: '#000'
    },
    opacity: {
      type: Number,
      default: 1
    },
    rotation: {
      type: Number,
      default: 0
    }
  },
  methods: {
    moveText () {
      this.titleDragX = this.$refs.text.getStage()._lastPos.x
      this.titleDragY = this.$refs.text.getStage()._lastPos.y
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
