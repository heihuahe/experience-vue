<template>
  <div class="layout-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar class="navbar-container" />
      <router-view />
    </div>
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

<style lang="scss" scoped>
.layout-wrapper {
  @include clearfix;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  .sidebar-container {
    width: 200px;
    background: $mainYellow;
    color: $font333;
  }
  .main-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
