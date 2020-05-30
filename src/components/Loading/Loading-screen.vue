<template>
  <div id="loading"><span>Cargando..</span><div class="lds-ripple"><div></div><div></div></div></div>
</template>
<script>
export default {
  name: 'Loading-screen'
}
</script>
<style>
body {
  margin: 0;
}
#loading {
  background-color: #16e4f3;
  color: white;
  font-size: 32px;
  padding-top: 50vh;
  height: 100vh;
  text-align: center;
  align-items: center;
  align-self: center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
