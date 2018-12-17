<template>

  <div
    class="prensa"
    v-loading="loading"
    element-loading-text="Cargando Noticias.."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >

    <Breadcrumb></Breadcrumb>

    <div class="content">
      <div
        class="card"
        v-for="(noticia,index) in filterData"
        :key="index"
      >
        <img
          :src="noticia"
          class="image"
          @click="onClick(index)"
        >

      </div>
      <vue-gallery-slideshow
        :images="filterData"
        :index="index"
        @close="index = null"
      ></vue-gallery-slideshow>
    </div>
    <div class="content-videos">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/j8CUkpm5vek"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
      <iframe
        class="video"
        src="https://www.youtube.com/embed/TUg9XhiV7EM"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
      <iframe
        class="video"
        src="https://www.youtube.com/embed/txHkvyI1n3k"
        frameborder="0"
        allowfullscreen
      >
      </iframe>

    </div>

  </div>
</template>

<script>
import axios from "axios";
import BannerMicro from "./bannerMicro.vue";
import Breadcrumb from "./breadcrumb.vue";
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  components: { BannerMicro, Breadcrumb, VueGallerySlideshow },
  created() {
    axios
      .get("https://panel.fablabkujana.com/web/timeline")
      .then(response => {
        this.noticias = response.data.timeline;
        this.loading = false;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  data() {
    return {
      noticias: [],
      imagenBanner: require("../assets/banners/noticias.jpg"),
      loading: true,
      index: null
    };
  },
  methods: {
    onClick(i) {
      this.index = i;
    }
  },
  computed: {
    filterData: function() {
      let noticia = this.noticias.map(dato => {
        if (dato.imagenes[0]) {
          let image = dato.imagenes[0].nombre_imagen;
          return `https://panel.fablabkujana.com/imagen_timeline/${image}`;
        }
      });
      return noticia;
    }
  }
};
</script>

<style scoped>
.content {
  margin-top: 30px;
  padding-top: 30px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgb(233, 233, 233);
}
.card {
  width: 210px;
  height: 110px;
  margin: 13px;
  margin-bottom: 15px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.5s ease;
  background-color: aliceblue;
  opacity: 0.9;
}

.card:hover .image {
  background-color: transparent;
  opacity: 0.3;
}
.card:hover .middle {
  opacity: 1;
}
.image {
  width: 100%;
  transition: 0.8s ease;
}
.text {
  background-color: #4a39dd;
  color: white;
  font-size: 20px;
  padding: 16px 32px;
}
.content-videos {
  height: auto;
  width: 100%;
}
.video {
  margin: 12px;
  width: 365px;
  height: 235px;
  margin-top: 40px;
  margin-bottom: 10px;
}

@media screen and (max-width: 500px) {
  .card-col {
    width: 100%;
    max-width: 500px;
  }
  .card-contenedor-imagen {
    overflow: hidden;
    height: 210px;
  }
}
</style>
