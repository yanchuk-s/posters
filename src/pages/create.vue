<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        main
       <div>{{fontSize}}</div>
       <div>{{fontColor}}</div>
       <div> {{fontStyle}}</div>
       <div>{{checked}}</div>
        <div>{{selection}}</div>
        <div>{{fontFamily}}</div>
        <div>{{area}}</div>
        <q-btn @click="showNot" color="primary" size="sm" label="notify" />
        <q-btn @click="showModal" color="primary" size="sm" label="modal" />
        <q-btn @click="showSheet" color="primary" size="sm" label="Sheet" />

          <q-modal v-model="opened">
            <h4>Basic Modal</h4>
            <q-btn
              color="primary"
              @click="opened = false"
              label="Close"
            />
          </q-modal>

           <v-stage ref="stage" :config="configKonva">
              <v-layer ref="layer">
                 <v-text ref="text"
                 @dragend="dragText"
                 @dragmove="moveText"
                 :config="{
                    x: `${dragX}`,
                    y: `${dragY}`,
                    text: `${area}`,
                    fontSize: `${fontSize}`,
                    fontFamily: `${fontFamily}`,
                    fontStyle: `${fontStyle}`,
                    fill: `${fontColor}`,
                    opacity: `${fontOpacity}`,
                    draggable: true
                 }"></v-text>
              </v-layer>
            </v-stage>

      </div>
      <div class="col-md-3">
       <div class="row">
         <div class="col-md-12">
           <q-color
            color="amber-7"
            float-label="Float Label"
            v-model="fontColor"
            />
         </div>
         <div class="col-md-12">
           <q-slider
              v-model="fontSize"
              :min="10"
              :max="80"
              :step="1"
              label
              snap
            />
         </div>

         <div class="col-md-12">
           <q-slider
              v-model="fontOpacity"
              :min="0.1"
              :max="1"
              :step="0.1"
              label
              snap
            />
         </div>

         <div class="col-md-12">
                <q-select
                  v-model="fontFamily"
                  :options="selectOptions"
                />
         </div>
         <div class="col-md-12">
           <q-radio v-model="fontStyle" val="normal" label="Normal" />
            <q-radio v-model="fontStyle" val="italic" label="Italic" />
         </div>
         <div class="col-md-12">
           <q-toggle v-model="checked" label="Toggle Label" />
          <q-input
            v-model="area"
            type="text"
            float-label="text"
            rows="7"
          />
         </div>
         <div class="col-md-12">
           <q-checkbox v-model="checked" label="Checkbox Label" />
         </div>
         <div class="col-md-12">
            <q-checkbox v-model="selection" val="one" label="One" />
            <br><br>
            <q-checkbox v-model="selection" val="two" label="Two" />
            <br><br>
            <q-checkbox v-model="selection" val="three" label="Three" />
         </div>
       </div>
      </div>
    </div>
  </div>
</template>
<script>
import { QInput } from 'quasar'

import Vue from 'vue'
import VueKonva from 'vue-konva'

Vue.use(VueKonva)
export default{
  name: 'create',
  components: {
    QInput
  },
  data () {
    return {
      fontColor: '#6FD124',
      configKonva: {
        width: 500,
        height: 500
      },
      dragX: 50,
      dragY: 50,
      opened: false,
      input: '',
      fontSize: '10',
      fontFamily: 'Roboto',
      fontOpacity: '1',
      fontStyle: 'normal',
      checked: false,
      selection: ['one', 'two', 'three'],
      area: 'Some Text',
      selectOptions: [
        {
          label: 'Roboto',
          value: 'Roboto'
        },
        {
          label: 'Colibri',
          value: 'Colibri'
        }
      ]
    }
  },
  methods: {
    moveText () {
      this.dragX = this.$refs.text.getStage()._lastPos.x
      this.dragY = this.$refs.text.getStage()._lastPos.y
    },
    dragText () {
      console.log('DRAG TEXT')
      console.log(this.$refs.text.getStage()._lastPos.x)
      console.log(this.$refs.text.getStage()._lastPos.y)
      this.dragX = this.$refs.text.getStage()._lastPos.x
      this.dragY = this.$refs.text.getStage()._lastPos.y
    },
    showNot () {
      this.$q.notify({
        message: `A text with your alert's awesome message`,
        timeout: 3000,
        type: 'negative',
        color: 'negative',
        textColor: 'white',
        icon: 'wifi',
        detail: 'Optional detail message.',
        position: 'top-right',
        actions: [
          {
            label: 'Dismiss',
            handler: () => {
              console.log('dismissed')
            }
          }
        ]
      })
    },
    showModal () {
      this.opened = !this.opened
    },
    showSheet () {
      this.$q.actionSheet({
        title: 'Article Actions',
        grid: true,
        dismissLabel: 'Quit',

        actions: [
          {
            label: 'Delete',
            color: 'negative',
            icon: 'delete',
            handler () {
              console.log('Deleted Article')
            }
          }
        ]
      })
    }
  }
}
</script>
