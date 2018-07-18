<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="(poster, index) in posters" :key="index">
          <router-link to="edit">
            <div class="poster-item" @click="getPoster(poster.id)">
              <q-card-media>
                <img v-bind:src="poster.url">
                <q-card-title slot="overlay">
                  {{poster.title}}
                  <span slot="subtitle">Subtitle</span>
                </q-card-title>
              </q-card-media>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>

<script>
import GLOBAL from './GLOBAL.js'
export default {
  name: 'PageIndex',
  data () {
    return {
      posters: []
    }
  },
  methods: {
    getPoster (id) {
      console.log(id)
      GLOBAL.posterCheck(id)
    }
  },
  mounted: function () {
    this.posters = GLOBAL.posters
  }
}
</script>

<style lang="scss">
  .q-card-media{
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 20px;
    cursor: pointer;
    img{
      width: 100%;
      height: 300px;
      object-fit: fill;
    }
  }
</style>
