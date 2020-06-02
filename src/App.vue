<template>
  <div id="app">
    <loadingScreen v-if="isLoading"></loadingScreen>
    <div v-else>
       <div>
        <transition  name="bounce">
          <Nav v-if="activeNav"/>
        </transition>
      </div>
      <div>
         <router-view/>
       </div>
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
    this.activeNav = true
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      console.log(event)
      var scrolled = event.path[1].scrollY
      console.log(scrolled)
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
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
