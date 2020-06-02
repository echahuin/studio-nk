<template>
  <div>
    <div class="container">
       <div class="row">
         <Section1 scrollanimation/>
       </div>
       <div class="row">
         <Carrusel scrollanimation/>
       </div>
       <div class="row">
         <Adwards v-scrollanimation/>
        </div>
        <div class="row">
         <section3 v-scrollanimation/>
      </div>
    </div>
  </div>
</template>
<script>
import Section1 from '../components/Section1/Section1'
import Carrusel from '../components/Carrusel/Carrusel'
import Section3 from '../components/section3/Section3'
import Adwards from '../components/Adwards/Adwards'
export default {
  name: 'Home',
  components: {
    Carrusel,
    Section1,
    Adwards,
    Section3
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform:translateY(0px);
}
</style>
