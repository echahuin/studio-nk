<template>
<div id="cont1">
  <div class="jumbotron jumbotron-fluid height100p banner">
    <div class="container h100">
      <div class="contentBox text-center h100">
         <img src="../../assets/pc.jpg" alt="imagen de uuna pc">
         <img class="top" src="../../assets/coffe.jpg" alt="imagen de uuna pc">
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Carrusel'
}
</script>

<style>
.bodyImg {
  position: relative;
  float: left;
}
.height100p {
    height: 100vh;
}
.h100 {
    height: 100%;
    margin: .5rem;
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
    float: left;
    justify-content: left;
    align-items: center;
    text-align: left;
    z-index: 10;
}
.contentBox img {
  width: 60rem;
  position: absolute;
  left: 0;
  transition: opacity 1.5s ease-in-out;

}
.contentBox img.top:hover {
  opacity: 0;
}
</style>
