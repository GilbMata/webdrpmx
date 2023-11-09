<template>
  <div id="app">
    <!-- Top -->
    <page-preloader></page-preloader>
    <top-nav></top-nav>

    <!-- Content  -->
    <div class="content">
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <!-- Content  -->

    <!-- Bottom -->
    <bottom-nav></bottom-nav>

    <!-- Go to top anchor -->
    <go-to-top-button></go-to-top-button>
  </div>
</template>

<script>
import pagePreloader from './components/global/PagePreloader'
import topNav from './components/global/TopNav'
import bottomNav from './components/global/BottomNav'
import goToTopButton from './components/global/GoToTopButton'
export default {
  components: {
    pagePreloader,
    topNav,
    bottomNav,
    goToTopButton
  },
  created(){
    // Grab app lang or set default
    let userAppLang = localStorage.getItem('drp.app.lang')
    if( userAppLang )
      this.$store.commit('setAppLang', userAppLang)
  }
}
</script>

<style lang="scss">
@import '@/styles/app';
</style>
