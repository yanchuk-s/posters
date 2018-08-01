<template>
    <div>
        <v-text ref="description"
            @dragmove="moveDescr"
            @mouseover="cursordragOver"
            @mouseout="cursordragOut"
            :config="{
                x: `${descrDragX}`,
                y: `${descrDragY}`,
                text: `${text}`,
                fontSize: `${fontSize}`,
                fontFamily: `${fontFamily}`,
                fontStyle: `${fontStyle}`,
                fill: `${fontColor}`,
                opacity: `${opacity}`,
                draggable: true,
                rotation: `${rotation}`
                }"
            >
        </v-text>
    </div>
</template>

<script>
export default{
  name: 'canvaDescr',
  props: {
    descrDragX: {
      type: Number,
      default: 100
    },
    descrDragY: {
      type: Number,
      default: 100
    },
    text: {
      type: String,
      default: 'Some text description'
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
    moveDescr () {
      this.descrDragX = this.$refs.description.getStage()._lastPos.x
      this.descrDragY = this.$refs.description.getStage()._lastPos.y
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
