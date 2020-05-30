<template>
<div>
<div class="container">
     <div class="row">
      <div class="container h100">
        <div class="contentBox h100">
          <div class="row">
            <span>We were the only ones in Latin America and Argentina respectively</span>
            <h1><div class="aqua">We do </div>lots of stuff.</h1>
        </div>
      </div>
  </div>
  <div class="row">
    <CardWork class="col-sm-6" v-for="(card, key) in dataCards" :key="key" :images="card.images" :contText="card.contText"/>
  </div>
  </div>
</div>
</div>
</template>
<script>
import CardWork from '../components/CardWork/CardWork'
export default {
  name: 'Work',
  components: {
    CardWork
  },
  data () {
    return {
      dataCards: [
        {
          id: 1,
          images: {
            link1: 'https://lh3.googleusercontent.com/proxy/BurkxbIgzTCFdE9H6q7-a8O_j9XNDi_3bq2Yp5Qb7TfoqzjIce26Ee27XNqY5GyWQjrJv8yUmgVevY71FE3mh76Etj4wygXqJAkN_naZG_Htxfx27V2fzBd7rBVr7JxwE7P_HkYn7P3xDG0UzbIz',
            link2: 'https://www.desnivel.com/images/2016/06/descanso-en-el-camino_web.jpg'
          },
          contText: {
            title: 'Agora',
            conte: 'Digital brand identity, animation'
          }
        },
        {
          id: 2,
          images: {
            link1: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg',
            link2: 'https://static01.diariodenavarra.es/uploads/imagenes/bajacalidad/2016/11/18/_1pastorrocaforte_addb6b48.jpg?03b7d75b8e0f9b4dac3a181358b2c247'
          },
          contText: {
            title: 'Martin Alaimo',
            conte: 'User definition UX / UI website, eCommerce'
          }
        },
        {
          id: 3,
          images: {
            link1: 'https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg',
            link2: 'https://lh3.googleusercontent.com/proxy/yfMXmDmy0N92kxTOmlu27z-0mX1ou1qBUu54Xht3RAVDT9WwsyqxzLYTrAF5f1Kg0MRJWXQucX9KiDVM1k4nIs85HCW7lyk4lvd3qEj6Ztg0QqfOH5l_gBTnIg'
          },
          contText: {
            title: 'Voy en Auto',
            conte: 'Situation diagnostic, branding for user'
          }
        },
        {
          id: 4,
          images: {
            link1: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/gallery/5ab105745cafe8eb5eadc7ae/myanmar.jpg',
            link2: 'https://i.ytimg.com/vi/n_KrxgXrU4w/maxresdefault.jpg'
          },
          contText: {
            title: 'Fresco',
            conte: 'Branding Namig, Social media, content Website'
          }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenido {
  display: flex;
}
.contenido-uno {
  padding-top: 5rem;
}
button {
  color: var(--text-color);
  background-color: var(--bg-color);
  height: var(--height);
}
.container {
  padding-top: 5rem !important;
}
.aqua {
 color: aqua;
}
h1 {
  font-weight: 800;
  color: rgb(40, 43, 44);
  font-size: 4rem;
}
.height100p {
    height: 50vh;
}
.h100 {
    height: 100%;
    margin: 1rem;
}
.jumbotron {
  background: rgb(255, 255, 255) !important;
}
</style>
