<template>
  <div>
    dsdssd
    <q-layout-header v-model="header">
      <q-toolbar color="primary">
          <q-toolbar-title>
              <q-btn @click="leftDrawerOpen = !leftDrawerOpen" flat dense round icon="menu" color="white" />
          </q-toolbar-title>
          <q-btn flat round dense @click="openGithubLink">
              <i class="fab fa-github"></i>
          </q-btn>
      </q-toolbar>
      </q-layout-header>
        <q-layout-drawer
          v-model="leftDrawerOpen"
          :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
          >
          <q-list
              no-border
              link
              inset-delimiter
          >
              <q-list-header>Nav bar</q-list-header>
               <router-link class="nav-left-link" to="create">
                    <q-item @click.native="openURL('/create')">
                    <q-item-side icon="school" />
                    <q-item-main label="Create posters" />
                    </q-item>
               </router-link>
              <q-item @click.native="openURL('https://github.com/yanchuk-s/posters')">
              <q-item-side icon="code" />
              <q-item-main label="GitHub" sublabel="github.com/posters" />
              </q-item>
              <q-item @click.native="openURL('/create')">
              <q-item-side icon="record_voice_over" />
              <q-item-main label="Catalog" sublabel="Catalog posters" />
              </q-item>
          </q-list>
      </q-layout-drawer>
  </div>
</template>

<script>
export default{
  name: 'Header',
  data: () => ({
    leftDrawerOpen: false
  }),
  methods: {
    openGithubLink () {
      window.open('https://github.com/yanchuk-s/posters', '_blank')
    }
  }
}
</script>

<style>
.nav-left-link{
    text-decoration: none;
}
</style>
