<template>
  <div>
    <div class="row">
      <div class="col-md-8 canva-div">
        <q-btn @click="saveimg" color="primary" size="sm" label="Save" />
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

           <v-stage id="stage" ref="stage" :config="{
              width: `${canvaWidth}`,
              height: `${canvaHeight}`
           }">
              <v-layer id="layer" ref="layer">
                <v-image ref="image"
                  :config="{
                    x: 0,
                    y: 0,
                    image: drawImg(),
                    width: `${canvaWidth}`,
                    height: `${canvaHeight}`,
                    opacity: `${canvaBgOpacity}`,
                  }"
                >
                </v-image>

                <v-image v-if="showPhoto" ref="oatherImage"
                 @dragmove="moveImg"
                 @mouseover="cursordragOver"
                 @mouseout="cursordragOut"
                  :config="{
                    x: `${dragImgX}`,
                    y: `${dragImgY}`,
                    image: drawPhoto(),
                    width: `${photoWidth}`,
                    height: `${photoHeight}`,
                    opacity: `${photoOpacity}`,
                    rotation: `${rotatePhoto}`,
                    draggable: true
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
                    draggable: true,
                    rotation: `${rotateTitle}`
                 }"></v-text>

                 <v-text v-if="showDescr" ref="description"
                 @dragmove="moveDescr"
                 @mouseover="cursordragOver"
                 @mouseout="cursordragOut"
                 :config="{
                    x: `${dragDescrX}`,
                    y: `${dragDescrY}`,
                    text: `${description}`,
                    fontSize: `${descrfontSize}`,
                    fontFamily: `${descrfontFamily}`,
                    fontStyle: `${descrfontStyle}`,
                    fill: `${descrfontColor}`,
                    opacity: `${descrfontOpacity}`,
                    draggable: true,
                    rotation: `${rotateDescr}`
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
      <div class="col-md-4 option-section">
        <q-tabs>
          <q-tab default slot="title" name="tab-1" icon="text_format" />
          <q-tab slot="title" name="tab-4" icon="description" />
          <q-tab slot="title" name="tab-2" icon="photo_size_select_actual" />
          <q-tab slot="title" name="tab-5" icon="add_photo_alternate" />
          <q-tab slot="title" name="tab-3" icon="alarm" />

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
                <span class="option-label">Rotate Font</span>
                  <q-knob
                    v-model="rotateTitle"
                    :min="0"
                    :max="360"
                    color="primary"
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
                <span class="option-label">Upload Background</span>
                <q-uploader id="imgLoad" @add="addimg" @remove:cancel="deleteImg" />
              </div>
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
                    <div class="col-md-3" v-for="(bg, index) in bgImages" :key="index">
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
          <q-tab-pane name="tab-4">
            <div class="row">
                <q-checkbox @focus="descrshow" class="descr-check" v-model="showDescr" label="Add Description" />
                <div v-if="showDescr" class="description-style">
                  <div class="row">
                    <div class="col-md-12">
                      <q-input
                        v-model="description"
                        type="textarea"
                        float-label="Description"
                        :max-height="100"
                        rows="7"
                      />

                    </div>
                    <div class="col-md-12">
                      <span class="option-label">Description Font Color</span>
                      <q-color
                        color="amber-7"
                        v-model="descrfontColor"
                        />
                    </div>
                    <div class="col-md-12">
                      <span class="option-label">Description Font Size</span>
                      <q-slider
                          v-model="descrfontSize"
                          :min="10"
                          :max="80"
                          :step="1"
                          label
                          snap
                        />
                    </div>

                    <div class="col-md-12">
                      <span class="option-label">Rotate Font</span>
                        <q-knob
                          v-model="rotateDescr"
                          :min="0"
                          :max="360"
                          color="primary"
                        />
                    </div>

                    <div class="col-md-12">
                      <span class="option-label">Description Font Opacity</span>
                      <q-slider
                          v-model="descrfontOpacity"
                          :min="0.1"
                          :max="1"
                          :step="0.1"
                          label
                          snap
                        />
                    </div>
                    <div class="col-md-12">
                      <span class="option-label">Description Font Family</span>
                        <q-select
                          v-model="descrfontFamily"
                          :options="selectOptions"
                        />
                    </div>
                    <div class="col-md-12">
                      <span class="option-label">Description Font Style</span>
                      <q-radio v-model="descrfontStyle" val="normal" label="Normal" />
                      <q-radio v-model="descrfontStyle" val="italic" label="Italic" />
                    </div>
                  </div>
                </div>
              </div>
          </q-tab-pane>
          <q-tab-pane name="tab-5">
            <div class="row">
              <div class="col-md-12">
                  <q-toggle class="picker" v-model="showPhoto" label="Show Image" />
              </div>
              <div class="col-md-12">
                <span class="option-label">Upload Image</span>
                <q-uploader id="imgLoad" @add="addPhoto" @remove:cancel="deleteImg" />
              </div>
              <div class="col-md-12">
                  <span class="option-label">Change Image</span>
                  <div class="row">
                    <div class="col-md-3" v-for="(img, index) in oatherImages" :key="index">
                      <div class="background-img oather-img">
                        <img @click="changeImage(img.url)"
                            v-bind:src="img.url"
                            alt=""
                          >
                      </div>
                    </div>
                  </div>
              </div>
            <div v-if="imagestyle" class="imagestyle">
              <div class="col-md-12">
                <span class="option-label">Img Weight</span>
                <span>{{photoWidth}}px</span>
                <q-slider
                    v-model="photoWidth"
                    :min="50"
                    :max="500"
                    :step="10"
                    label
                    snap
                  />
              </div>
               <div class="col-md-12">
                <span class="option-label">Img Height</span>
                <span>{{photoHeight}}px</span>
                <q-slider
                    v-model="photoHeight"
                    :min="50"
                    :max="500"
                    :step="10"
                    label
                    snap
                  />
              </div>
               <div class="col-md-12">
                  <span class="option-label">Photo Opacity</span>
                  <q-slider
                      v-model="photoOpacity"
                      :min="0.1"
                      :max="1"
                      :step="0.1"
                      label
                      snap
                    />
                </div>
                <div class="col-md-12">
                  <span class="option-label">Rotate Font</span>
                    <q-knob
                      v-model="rotatePhoto"
                      :min="0"
                      :max="360"
                      color="primary"
                    />
                </div>
              </div>
            </div>
          </q-tab-pane>
        </q-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { QInput, date } from 'quasar'

import Vue from 'vue'
import VueKonva from 'vue-konva'
import GLOBAL from './GLOBAL'

Vue.use(VueKonva)

export default{
  name: 'create',
  components: {
    QInput
  },
  mounted: function () {
    this.oatherImages = GLOBAL.oatherImages
  },
  data () {
    return {
      oatherImages: [],
      imagestyle: false,
      showPhoto: true,
      rotatePhoto: 0,
      photoOpacity: 1,
      photoWidth: 100,
      photoHeight: 100,
      rotateDescr: 0,
      rotateTitle: 0,
      bgImages: [
        { url: 'http://4.bp.blogspot.com/-EAf9GFumnH4/VEofl7dE0WI/AAAAAAAABCQ/3bjCVL24UMs/s1600/10735611_1713629975528968_1094024815_n.jpg' },
        { url: 'https://alternativemovieposters.com/wp-content/uploads/2012/12/sunshinebg.jpg' },
        { url: 'https://kimherringe.com.au/wp-content/uploads/2015/07/poster-bg-1.jpg' },
        { url: 'https://img00.deviantart.net/737f/i/2010/334/d/f/poster_bg_by_angelingz-d33z441.jpg' },
        { url: 'https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/8/-/8-487_star_wars_intro_ma.jpg' },
        { url: 'https://t.motionelements.com/stock-video/video-backgrounds/me8527070-confetti-color-bg-white-hd-a0360-poster.jpg' },
        { url: 'http://c.cdnv2.artofthetitle.com/assets/sm/upload/7i/yd/qy/th/cosmos_research_03.jpg' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Big_Ben_scaffolding_2017.jpg' }
      ],
      background: 'http://4.bp.blogspot.com/-EAf9GFumnH4/VEofl7dE0WI/AAAAAAAABCQ/3bjCVL24UMs/s1600/10735611_1713629975528968_1094024815_n.jpg',
      oatherPhoto: '',
      dateStyle: 'normal',
      dateFamily: 'Roboto',
      dateOpacity: 1,
      dateColor: '#000',
      dateSize: '15',
      showDate: false,
      showTime: false,
      showDescr: true,
      datapicker: this.dateformat(),
      timepicker: undefined,
      canvaBgOpacity: 1,
      canvaWidth: 500,
      canvaHeight: 500,
      fontColor: '#6FD124',
      descrfontColor: '#6FD124',
      dragX: 50,
      dragY: 50,
      dragImgX: 0,
      dragImgY: 0,
      dragDescrX: 80,
      dragDescrY: 80,
      dragTimeX: 50,
      dragTimeY: 50,
      dragDateX: 50,
      dragDateY: 50,
      opened: false,
      input: '',
      fontSize: '22',
      descrfontSize: '14',
      fontFamily: 'Roboto',
      descrfontFamily: 'Roboto',
      fontOpacity: '1',
      descrfontOpacity: '1',
      fontStyle: 'normal',
      descrfontStyle: 'normal',
      area: 'Some Text',
      description: 'Description',
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
    changeImage (url) {
      console.log(url)
      this.oatherPhoto = url
      this.imagestyle = true
    },
    dateformat () {
      let timeStamp = Date.now()
      let formattedString = date.formatDate(timeStamp, 'YYYY:MMMM:DD')
      return formattedString
    },
    deleteImg () {
      this.background = 'http://4.bp.blogspot.com/-EAf9GFumnH4/VEofl7dE0WI/AAAAAAAABCQ/3bjCVL24UMs/s1600/10735611_1713629975528968_1094024815_n.jpg'
    },
    addimg () {
      let img = document.getElementsByClassName('q-item-image')[0]
      let imgURL = img.src
      console.log(img)
      console.log(imgURL)
      this.background = imgURL
      this.bgImages.push({
        url: imgURL
      })
    },
    addPhoto () {
      let img = document.getElementsByClassName('q-item-image')[0]
      let imgURL = img.src
      console.log(img)
      console.log(imgURL)
      this.oatherPhoto = imgURL
      this.imagestyle = true
    },
    saveimg () {
      let self = document.createElement('a')
      self.setAttribute('id', 'frames_download_link')
      self.setAttribute('target', '_blank')
      console.log(self)

      // let canv = document.getElementById('stage')
      // let canvasLayer = document.getElementsByTagName('canvas')[0]
      console.log(this.$refs.stage.getStage().toDataURL('image/png'))

      // self.downloadButton.addEventListener('click', function () {
      //   document.getElementsByTagName('body')[0].appendChild(self)
      //   self.click()
      //   self.remove()
      // })

      // var dataUrl = canv.toDataURL('image/png')
      // self.setAttribute('download', 'image -' + new Date() * 1)
      // // console.log(self)
      // // console.log(dataUrl)
      // self.setAttribute('href', canv)
      // self.click()
      // self.remove()
    },
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
    descrshow () {
      if (this.showDescr) {
        this.$q.notify({
          message: `Description deleted`,
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
          message: `Description added`,
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
    drawPhoto () {
      let addImg = new Image()
      addImg.src = this.oatherPhoto
      return addImg
    },
    moveImg () {
      this.dragImgX = this.$refs.oatherImage.getStage()._lastPos.x
      this.dragImgY = this.$refs.oatherImage.getStage()._lastPos.y
    },
    moveText () {
      this.dragX = this.$refs.text.getStage()._lastPos.x
      this.dragY = this.$refs.text.getStage()._lastPos.y
    },
    moveDescr () {
      this.dragDescrX = this.$refs.description.getStage()._lastPos.x
      this.dragDescrY = this.$refs.description.getStage()._lastPos.y
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
  .imagestyle{
    width: 100%;
  }
  .canva-div{
    z-index: 999;
  }
  .descr-check{
    margin-top: 10px;
    margin-bottom: 20px;
  }
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
  .oather-img{
    img{
      object-fit: contain;
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
