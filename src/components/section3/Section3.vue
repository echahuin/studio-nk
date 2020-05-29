<template>
  <div id="cont3">
    <div class="jumbotron jumbotron-fluid height100p banner" id="home">
      <div class="container h100">
        <div class="contentBox h100">
          <div class="row">
            <h1><div class="aqua">We encourage </div>a positive</h1>
            <h1>change for people, companies</h1>
            <h1>and organizations</h1>
                <Card class="col-sm-6" v-for="(card, key) in cards" :key="key" :title="card.title" :content="card.content"/>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '../Card/Card'
export default {
  name: 'Section2',
  components: {
    Card
  },
  data () {
    return {
      cards: [
        {
          id: 1,
          title: 'Designed tutorials, develop',
          content: 'testing, and develop this web'
        },
        {
          id: 2,
          title: 'conteiner for this page web',
          content: 'loader while i am mode never day'
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
.row2 {
    margin: 1rem;
    display: flex;
}
</style>
