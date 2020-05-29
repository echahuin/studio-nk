<template>
<div id="home">
  <div class="jumbotron jumbotron-fluid height100p banner">
    <div class="container h100">
      <div class="contentBox h100">
        <div>
          <span v-scrollanimation>We’re a design studio with headquarters in Buenos Aires.</span>
          <h1 v-scrollanimation><div class="aqua">We create</div> innovative</h1>
          <h1 v-scrollanimation>digital products and</h1>
          <h1 v-scrollanimation>future-oriented brands.</h1>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Section1'
}
</script>
<style>
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
.aqua {
 color: aqua;
}
span {
  color: rgb(82, 86, 90);
}
.contentBox {
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    z-index: 10;
}
.contentBox h1 {
    width: 1000px;
    max-width: 100%;
    font-weight: 800;
    color: rgb(40, 43, 44);
    font-size: 4rem;
}
.contentBox p {
    color: rgb(0, 0, 0);
    font-size: 1.3rem;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform:translateY(0px);
}
</style>
