<template>
  <q-layout view="lHh Lpr lFf">
    <Header></Header>
    <div class="container">
    <q-page-container>
      <router-view />
    </q-page-container>
    </div>
   <!-- Expandable -->
   <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
        class="fixed"
        style="right: 18px; bottom: 18px"
        color="purple"
        icon="keyboard_arrow_up"
        direction="up"
        >
        <q-fab-action
          color="primary"
          @click="someMethod"
          icon="mail"
        />

        <q-fab-action
          color="secondary"
          @click="someMethod"
          icon="alarm"
        />
      </q-fab>
    </q-page-sticky>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Header from 'pages/Header'
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  },
  components: {
    Header
  }
}
</script>

<style>
.container{
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
}
</style>
