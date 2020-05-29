<template>
  <div>
  <div class="container">
    <div class="row">
      <div class="card center-h center-v">
        <div class="title">
          <h3>{{title}}</h3>
        </div>
        <div class="cont">
          <span>{{content}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: [
    'id',
    'title',
    'content'
  ]
}
</script>
<style scoped>
.card {
  border: white;
  background: #ffffff;
  margin: 2rem;
  display: flex;
  height: 20rem;
  width: 45rem;
  box-shadow: 0 0 50px rgb(231, 235, 234);
  transition: .3s;
}
.card:hover {
  transform: scale(1.1);
}
.center-h {
  justify-content: center;
}
.center-v {
  align-items: center;
}
.child {
  background: #ffffff;
  padding: .2rem;
}
.title {
 align-self: center;
}
</style>
