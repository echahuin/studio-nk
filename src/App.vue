<template>
  <div id="app">
     <loading-screen v-if="isLoading"></loading-screen>
      <div>
        <transition  name="bounce">
          <Nav v-show="activeNav" active="activeNav"/>
        </transition>
      </div>
      <div>
        <router-view/>
      </div>
  </div>
</template>

<script>
import Nav from './components/Nav/Nav'
import LoadingScreen from './components/Loading/Loading-screen'
export default {
  name: 'App',
  data () {
    return {
      isLoading: true,
      activeNav: Boolean
    }
  },
  components: {
    Nav,
    LoadingScreen
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    this.activeNav = false
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      var scrolled = event.path[1].scrollY - 1
      if (scrolled === 0) {
        this.activeNav = true
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
      if (this.isLoading === false) {
        this.activeNav = false
      } else {
        this.activeNav = true
      }
    }, 3000)
  }
}

</script>

<style>
.container {
  margin: 1rem;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
