<template>
<div>
    <div class="container">
        <div class="row">
          <div class="container h100">
            <div class="contentBox h100">
              <div class="row">
                <span>We were {{isActive}} the only ones in Latin America and Argentina respectively</span>
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
  props: {
    isActive: Boolean
  },
  data () {
    return {
      dataCards: [
        {
          id: 1,
          images: {
            link1: 'https://static01.diariodenavarra.es/uploads/imagenes/bajacalidad/2016/11/18/_1pastorrocaforte_addb6b48.jpg?03b7d75b8e0f9b4dac3a181358b2c247',
            link2: 'https://www.epn.edu.ec/wp-content/uploads/2011/05/Internet-620x279.jpg'
          },
          contText: {
            title: 'Martin Alaimo',
            conte: 'User definition UX / UI website, eCommerce'
          }
        },
        {
          id: 2,
          images: {
            link1: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg',
            link2: 'https://k30.kn3.net/taringa/0/6/3/B/9/0/arispc/358.jpg'
          },
          contText: {
            title: 'Martin Alaimo',
            conte: 'User definition UX / UI website, eCommerce'
          }
        },
        {
          id: 3,
          images: {
            link1: 'https://img.freepik.com/vector-gratis/fondo-concepto-tecnologia-futuro-circuito-cyber-azul_42077-674.jpg?size=626&ext=jpg',
            link2: 'https://static01.diariodenavarra.es/uploads/imagenes/bajacalidad/2016/11/18/_1pastorrocaforte_addb6b48.jpg?03b7d75b8e0f9b4dac3a181358b2c247'
          },
          contText: {
            title: 'Martin Alaimo',
            conte: 'User definition UX / UI website, eCommerce'
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
  },
  methods: {
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>
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
