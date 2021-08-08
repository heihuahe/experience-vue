<template>
  <div>
    <Navbar />
    <Sidebar />
    1118888 {{ TITLE }}
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Navbar, Sidebar } from './components'

@Component({
  components: {
    Navbar,
    Sidebar
  }
})
export default class Layout extends Vue {
  private TITLE = 'kkkkk'
}
</script>
