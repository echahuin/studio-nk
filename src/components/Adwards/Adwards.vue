<template>
  <div id="cont2">
     <div class="container">
         <div class="row">
            <h1>Adwards this content</h1>
         </div>
         <div class="row images">
          <div class="slider">
         <ul>
          <li>
          <img src="../../assets/contable.jpg" alt="">
         </li>
          <li>
          <img src="../../assets/estudio.jpg" alt="">
          </li>
          <li>
          <img src="../../assets/rice.png" alt="">
         </li>
          <li>
           <img src="../../assets/wine.jpg" alt="">
        </li><li>
            <img src="../../assets/yelp.jpg" alt="">
        </li><li>
            <img src="../../assets/logo.png" alt="">
         </li><li>
            <img src="../../assets/equip.jpg" alt="">
          </li><li>
            <img src="http://welltechnically.com/wp-content/uploads/2013/09/android-widescreen-wallpaper-14165-hd-wallpapers-700x300.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Adwards'
}
</script>

<style scoped>
.images {
     height: 50vh;
}
h1 {
    padding-top: 20%;
    padding-bottom: 15%;
    padding-left:  14%;
    font-weight: 800;
    color: rgb(0, 0, 0);
    font-size: 5rem;
}
.slider {
  width: 110%;
  margin: 10px;
  overflow: hidden;
}
.slider ul {
  display: flex;
  padding: 0;
  width: 100%;
  animation: cambio 5s infinite alternate linear;
}

.slider li {
  width: 20rem;
  list-style: none;
}

.slider img {
  width: 20rem;
}

@keyframes cambio {
  0% {margin-left: 5;}
  20% {margin-left: 5;}
  25% {margin-left: -10%;}
  45% {margin-left: -10%;}
  50% {margin-left: -10%;}
  70% {margin-left: -20%;}
  75% {margin-left: -20%;}
  100% {margin-left: -10%;}
}
</style>
