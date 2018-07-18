<template>
  <div>
    <div class="row">
      <div class="col-md-9">
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

           <v-stage ref="stage" :config="{
              width: `${canvaWidth}`,
              height: `${canvaHeight}`
           }">
              <v-layer ref="layer">
                <v-image ref="image"
                  :config="{
                    x: 0,
                    y: 0,
                    image: drawImg(),
                    width: `${canvaWidth}`,
                    height: `${canvaHeight}`,
                    opacity: `${canvaBgOpacity}`
                  }"
                >

                </v-image>
                 <v-text ref="text"
                 @dragmove="moveText"
                 @mouseover="cursordragOver"
                 @mouseout="cursordragOut"
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

                <v-text v-if="showDate" ref="dater"
                 @dragmove="movedate"
                 @mouseover="cursordragOver"
                 @mouseout="cursordragOut"
                 :config="{
                    x: `${dragDateX}`,
                    y: `${dragDateY}`,
                    text: `${datapicker}`,
                    fontSize: `${dateSize}`,
                    fontFamily: `${dateFamily}`,
                    fontStyle: `${dateStyle}`,
                    fill: `${dateColor}`,
                    opacity: `${dateOpacity}`,
                    draggable: true
                 }"></v-text>

                <v-text v-if="showTime" ref="time"
                 @dragmove="movetime"
                 @mouseover="cursordragOver"
                 @mouseout="cursordragOut"
                 :config="{
                    x: `${dragTimeX}`,
                    y: `${dragTimeY}`,
                    text: `${timepicker}`,
                    fontSize: '14',
                    fontFamily: 'Roboto',
                    fill: '#000',
                    draggable: true
                 }"></v-text>

              </v-layer>
            </v-stage>

      </div>
      <div class="col-md-3 option-section">
        <q-tabs>
          <!-- Tabs - notice slot="title" -->
          <q-tab default slot="title" name="tab-1" icon="text_format" />
          <q-tab slot="title" name="tab-2" icon="photo_size_select_actual" />
          <q-tab slot="title" name="tab-3" icon="alarm" />

          <!-- Targets -->
          <q-tab-pane name="tab-1">
            <div class="row">
              <div class="col-md-12">
                <span class="option-label">Text</span>
                <q-input
                  v-model="area"
                  type="text"
                  rows="7"
                />
              </div>
              <div class="col-md-12">
                <span class="option-label">Font Color</span>
                <q-color
                  color="amber-7"
                  v-model="fontColor"
                  />
              </div>
              <div class="col-md-12">
                <span class="option-label">Font Size</span>
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
                <span class="option-label">Font Opacity</span>
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
                <span class="option-label">Font Family</span>
                  <q-select
                    v-model="fontFamily"
                    :options="selectOptions"
                  />
              </div>
              <div class="col-md-12">
                <span class="option-label">Font Style</span>
                <q-radio v-model="fontStyle" val="normal" label="Normal" />
                <q-radio v-model="fontStyle" val="italic" label="Italic" />
              </div>
            </div>
          </q-tab-pane>
          <q-tab-pane name="tab-2">
            <div class="row">
              <div class="col-md-12">
                <span class="option-label">Poster Width</span>
                <span>{{canvaWidth}}px</span>
                <q-slider
                    v-model="canvaWidth"
                    :min="100"
                    :max="500"
                    :step="10"
                    label
                    snap
                  />
              </div>
              <div class="col-md-12">
                <span class="option-label">Poster Height</span>
                <span>{{canvaHeight}}px</span>
                <q-slider
                    v-model="canvaHeight"
                    :min="100"
                    :max="500"
                    :step="10"
                    label
                    snap
                  />
              </div>
              <div class="col-md-12">
                <span class="option-label">Background opacity</span>
                <q-slider
                    v-model="canvaBgOpacity"
                    :min="0.1"
                    :max="1"
                    :step="0.1"
                    label
                    snap
                  />
              </div>
              <div class="col-md-12">
                  <span class="option-label">Change background</span>
                  <div class="row">
                    <div class="col-md-6" v-for="(bg, index) in bgImages" :key="index">
                      <div class="background-img">
                        <img @click="changeBg(bg.url)"
                                v-bind:src="bg.url"
                                alt=""
                          >
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </q-tab-pane>
          <q-tab-pane name="tab-3">
            <div class="row">
                <div class="col-md-12">
                  <q-toggle @focus="datashow" class="picker" v-model="showDate" label="Show Date" />
                </div>
            </div>
              <div v-if="showDate" class="row data-options">
                <div class="col-md-12">
                  <span class="option-label">Date</span>
                   <q-datetime v-model="datapicker" type="date" />
                </div>
                  <div class="col-md-12">
                    <span class="option-label">Date Color</span>
                    <q-color
                      color="amber-7"
                      v-model="dateColor"
                      />
                  </div>
                  <div class="col-md-12">
                    <span class="option-label">Date Size</span>
                    <q-slider
                        v-model="dateSize"
                        :min="10"
                        :max="80"
                        :step="1"
                        label
                        snap
                      />
                  </div>
                  <div class="col-md-12">
                    <span class="option-label">Date Opacity</span>
                    <q-slider
                        v-model="dateOpacity"
                        :min="0.1"
                        :max="1"
                        :step="0.1"
                        label
                        snap
                      />
                  </div>
                  <div class="col-md-12">
                    <span class="option-label">Date Family</span>
                      <q-select
                        v-model="dateFamily"
                        :options="selectOptions"
                      />
                  </div>
                  <div class="col-md-12">
                    <span class="option-label">Date Style</span>
                    <q-radio v-model="dateStyle" val="normal" label="Normal" />
                    <q-radio v-model="dateStyle" val="italic" label="Italic" />
                  </div>
              </div>
              <div class="row">
                 <div class="col-md-12">
                  <q-toggle class="picker" v-model="showTime" label="Show Time" />
                </div>
              </div>
              <div class="row" v-if="showTime">
                <div class="col-md-12">
                  <q-datetime v-if="showTime" v-model="timepicker" type="time" />
                </div>
              </div>
          </q-tab-pane>
        </q-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import GLOBAL from './GLOBAL.js'
import { QInput } from 'quasar'

import Vue from 'vue'
import VueKonva from 'vue-konva'

Vue.use(VueKonva)
export default{
  name: 'create',
  components: {
    QInput
  },
  mounted: function () {
    this.bgImages = GLOBAL.posters
    // console.log(GLOBAL.checkPoster)
    let _this = this
    this.bgImages.forEach(function (item, i, arr) {
      if (item.id === GLOBAL.checkPoster) {
        // console.log(item.url)
        _this.background = item.url
      }
    })
  },
  data () {
    return {
      bgImages: [],
      background: 'https://orig00.deviantart.net/44da/f/2012/050/9/7/queen_poster_bg_by_doodlexartist-d4qbmor.jpg',
      dateStyle: 'normal',
      dateFamily: 'Roboto',
      dateOpacity: 1,
      dateColor: '#000',
      dateSize: '15',
      showDate: false,
      showTime: false,
      datapicker: new Date(),
      timepicker: null,
      canvaBgOpacity: 1,
      canvaWidth: 500,
      canvaHeight: 500,
      fontColor: '#6FD124',
      dragX: 50,
      dragY: 50,
      dragTimeX: 50,
      dragTimeY: 50,
      dragDateX: 50,
      dragDateY: 50,
      opened: false,
      input: '',
      fontSize: '10',
      fontFamily: 'Roboto',
      fontOpacity: '1',
      fontStyle: 'normal',
      area: 'Some Text',
      selectOptions: [
        {
          label: 'Roboto',
          value: 'Roboto'
        },
        {
          label: 'Colibri',
          value: 'Colibri'
        },
        {
          label: 'Gaegu',
          value: 'Gaegu'
        },
        {
          label: 'Coda Caption',
          value: 'Coda Caption'
        },
        {
          label: 'Knewave',
          value: 'Knewave'
        },
        {
          label: 'Inconsolata',
          value: 'Inconsolata'
        },
        {
          label: 'Indie Flower',
          value: 'Indie Flower'
        },
        {
          label: 'Acme',
          value: 'Acme'
        },
        {
          label: 'Gloria Hallelujah',
          value: 'Gloria Hallelujah'
        },
        {
          label: 'Skranji',
          value: 'Skranji'
        }
      ]
    }
  },
  methods: {
    datashow () {
      if (this.showDate) {
        this.$q.notify({
          message: `Date deleted`,
          timeout: 3000,
          type: 'negative',
          color: 'negative',
          textColor: 'white',
          icon: 'delete_forever',
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
      } else {
        this.$q.notify({
          message: `Date added`,
          timeout: 3000,
          type: 'positive',
          color: 'positive',
          textColor: 'white',
          icon: 'check',
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
      }
    },
    drawImg () {
      let imageObj = new Image()
      imageObj.src = this.background
      return imageObj
    },
    moveText () {
      this.dragX = this.$refs.text.getStage()._lastPos.x
      this.dragY = this.$refs.text.getStage()._lastPos.y
    },
    movetime () {
      this.dragTimeX = this.$refs.time.getStage()._lastPos.x
      this.dragTimeY = this.$refs.time.getStage()._lastPos.y
    },
    movedate () {
      this.dragDateX = this.$refs.dater.getStage()._lastPos.x
      this.dragDateY = this.$refs.dater.getStage()._lastPos.y
    },
    dragdate () {
      this.dragDateX = this.$refs.dater.getStage()._lastPos.x
      this.dragDateY = this.$refs.dater.getStage()._lastPos.y
    },
    cursordragOver () {
      document.body.style.cursor = 'pointer'
    },
    cursordragOut () {
      document.body.style.cursor = 'default'
    },
    changeBg (url) {
      this.background = url
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

<style lang="scss">
  .background-img{
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    img{
      cursor: pointer;
      width: 96%;
      margin-left: 2%;
      margin-right: 2%;
      height: 60px;
      object-fit: fill;
    }
  }
  .data-options{
    margin-bottom: 20px;
  }

  .picker{
    margin-bottom: 20px;
  }
  .q-tabs-scroller{
    width: 100%;
    .q-tab{
      width: 33.33333333%;
    }
  }
  .option-section{
    padding: 15px;
    .option-label{
      color: #b3b2b2;
      font-size: 14px;
      margin: 10px 0;
      display: block;
    }
  }
</style>
