<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        main
       <div>{{selectedValue}}</div>
       <div>{{modelHex}}</div>
       <div> {{option}}</div>
       <div>{{checked}}</div>
        <div>{{selection}}</div>
        <div>{{select}}</div>
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

          <canvas id="myCanvas" width="600px" height="600px"></canvas>

          <div class="row">
            <div class="col-3">
              <q-card-media>
                <img src="~assets/mountains.jpg">
                <q-card-title slot="overlay">
                  Title
                  <span slot="subtitle">Subtitle</span>
                </q-card-title>
              </q-card-media>
            </div>
            <div class="col-3">
              <q-card-media>
                <img src="~assets/mountains.jpg">
                <q-card-title slot="overlay">
                  Title
                  <span slot="subtitle">Subtitle</span>
                </q-card-title>
              </q-card-media>
            </div>
            <div class="col-3">
              <q-card-media>
                <img src="~assets/mountains.jpg">
                <q-card-title slot="overlay">
                  Title
                  <span slot="subtitle">Subtitle</span>
                </q-card-title>
              </q-card-media>
            </div>
          </div>
      </div>
      <div class="col-md-3">
       <div class="row">
         <div class="col-md-12">
           <q-color
            color="amber-7"
            float-label="Float Label"
            v-model="modelHex"
            />
         </div>
         <div class="col-md-12">
           <q-slider
              v-model="selectedValue"
              :min="0"
              :max="10"
              :step="2"
              label
              snap
            />
         </div>
         <div class="col-md-12">
                <q-select
                  v-model="select"
                  :options="selectOptions"
                />
         </div>
         <div class="col-md-12">
           <q-radio v-model="option" val="opt1" label="Option 1" />
            <q-radio v-model="option" val="opt2" label="Option 2" />
            <q-radio v-model="option" val="opt3" label="Option 3" />
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
         <div class="col-md-12">

         </div>
       </div>
      </div>
    </div>
  </div>
</template>
<script>

import { QInput } from 'quasar'
export default{
  name: 'create',
  components: {
    QInput
  },
  mounted () {
    var _this = this
    setInterval(function () {
      _this.drawCanv()
    }, 300)
  },
  data () {
    return {
      opened: false,
      input: '',
      selectedValue: null,
      modelHex: '#6FD124',
      select: '',
      option: '',
      checked: false,
      selection: ['one', 'two', 'three'],
      area: '',
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ]
    }
  },
  methods: {
    drawCanv () {
      var canvas = document.getElementById('myCanvas')
      var context = canvas.getContext('2d')
      var imageObj = new Image()
      let _this = this
      imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0)
        context.font = '40pt Colibri'
        context.fillStyle = _this.modelHex
        context.fillText('Hello World!', 10, 100)
      }
      imageObj.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
      console.log(this.modelHex)
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
