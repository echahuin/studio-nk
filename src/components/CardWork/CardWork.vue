<template>
    <div >
      <div class="placeBox">
          <div class="imgBx">
            <img :src="images.link1" class="img-fluid">
            <img class="top" :src="images.link2"/>
          </div>
      </div>
      <div class="cont">
        <b-card class="card">
          <div class="head">
            <h1>{{contText.title}}</h1>
          </div>
          <div class="bod">
              {{contText.conte}}
          </div>
        </b-card>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CardWork',
  props: {
    contText: Object,
    images: Object
  }
}
</script>
<style scoped>
.cont {
  padding: 0;
  margin: 4rem;
  margin-top: 0rem;
}
.head h1 {
  color: aqua;
  font-weight: 800;
  font-size: 30px;
  font-family: 'Circular Std',sans-serif;
}
.placeBox {
 position: relative;
 max-width: 500px;
 height: 450px;
 margin: 2rem auto;
 background: rgb(255, 255, 255);
 margin-top: 30px;
}
.imgBx {
  position: relative;
  float: left;
}
.placeBox .imgBx {
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
}
.imgBx img{
    position: absolute;
    left: 0;
    transition: opacity 1.5s ease-in-out;
}
.placeBox .imgBx img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    transition: opacity 1.5s ease-in-out;
}
.imgBx img.top:hover {
  opacity: 0;
}
.card {
  margin: 0;
  padding: 0;
  border: white;
}
</style>
