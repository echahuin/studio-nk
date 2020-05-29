<template>
<div id="cont2">
    <div class="jumbotron jumbotron-fluid height100p banner" id="home">
      <div class="container h100">
        <div class="contentBox h100">
          <div class="row">
            <h1>Nominated in 2016, 2017, 2018 </h1>
            <h1> as <div class="aqua">the best agency of the year. {{ count }}</div></h1>
            <span>We were the only ones in Latin America and Argentina respectively (Awwwards 16, ´17 — CSS Design Awards ´16, ´17, ´18)</span>
            <div>
              <Adwards :count="count"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Adwards from '../Adwards/Adwards'
export default {
  name: 'Section2',
  components: {
    Adwards
  },
  data: function () {
    return {
      count: 10,
      imgs: [
        {
          id: 1,
          uri: ''
        },
        {
          id: 2,
          uri: ''
        },
        {
          id: 3,
          uri: ''
        },
        {
          id: 4,
          uri: ''
        },
        {
          id: 5,
          uri: ''
        },
        {
          id: 6,
          uri: ''
        }
      ]
    }
  }
}
</script>
<style scoped>
.aqua {
 color: aqua;
}
h1 {
  font-weight: 800;
  color: rgb(40, 43, 44);
  font-size: 4rem;
}
.height100p {
    height: 100vh;
}
.h100 {
    height: 100%;
    margin: 1rem;
}
.jumbotron {
  background: rgb(255, 255, 255) !important;
}
</style>
