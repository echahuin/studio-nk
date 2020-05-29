<template>
  <div>
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <img  class="navbar-brand" src="../../assets/logo.png" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                  <a href="#home"><router-link class="nav-link"  to="/">Home</router-link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cont1">Opcion 1</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cont2">Opcion 2</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cont3">Opcion 3</a>
                </li>
                <li class="nav-item">
                  <a ><router-link class="nav-link" to="/work">Work</router-link></a>
                </li>
              </ul>
            </div>
      </div>
    </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  props: {
    activeNav: Boolean
  }
}
</script>
<style scoped>
img {
  height: 3.5rem;
  width: 3.5rem;
}
p
{
    font-size: 1.15rem;
}
.navbar{
    height: 10rem !important;
    background: rgb(255, 255, 255) !important;
    transition: 2.8s;
}
.navbar-light .navbar-nav .nav-link{
  margin: 0.5rem;
  border-bottom: 1px solid rgb(148, 255, 255);
}
.navbar-light .navbar-nav .nav-link:hover{
   color: rgb(0, 0, 0);
}
.navbar-light .navbar-nav .nav-link:focus{
    color: rgb(148, 255, 255);
}
a {
  text-decoration: none;
}
</style>
