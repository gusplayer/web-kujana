<template>
  <div class="general">
    <!-- <PopUpNews></PopUpNews> -->

    <br>
    <div
      class="banner"
      v-loading="loading"
      element-loading-text="Cargando Contenido..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <bannerTop></bannerTop>
    </div>

    <!-- <radio></radio> -->

    <!-- <div class="botones_banner" v-loading="loading">
      <a :href="botones.url" v-for="botones in botones_banner.data" :key="botones.key" class="botones_banner_movil" target="_blank">
        <img :src="`https://intranet.meta.gov.co/web_urls_navegacion/${botones.imagen}`">
      </a>
    </div> -->

    <div
      class="botones_banner"
      v-loading="loading"
    >
      <!-- <a class="botones_banner_movil">
        <img src="../assets/botones/b1.png">
      </a> -->
      <el-popover
        placement="top-start"
        width="350"
        trigger="hover"
        class="botones_banner_movil"
      >
        <div
          class="popover"
          style="background-color: #EEEEEE; padding: 15px"
        >
          <h2>Ideación</h2>
          <br>
          <p>Desde Fab Lab Kujana orientamos la fase de Ideación a una simple pregunta, <br><br><b>¿Cómo se genera una idea?</b> <br><br>A través de la experiencia previa de los participantes y la identificación de problemas sociales, buscamos crear soluciones innovadoras a través de las herramientas de la Ciudadela del Saber y el emprendimiento TIC.
            Integramos diversas áreas de conocimiento para reconocer oportunidades de negocio, creando y formando ideas enfocadas en mercados y clientes específicos hasta llegar a la resolución de un problema.
          </p>
          <br>
          <img
            src="../assets/botones/b1.png"
            width="100%"
          >
        </div>
        <el-button
          style="padding: 0px; border-radius: 0px"
          slot="reference"
        >
          <img src="../assets/botones/b1.png">
        </el-button>
      </el-popover>

      <el-popover
        placement="top-start"
        width="350"
        trigger="hover"
        class="botones_banner_movil"
      >
        <div style="background-color: #EEEEEE; padding: 15px">
          <h2>Diseño</h2>
          <br>
          <p>La apropiación social de ciencia, tecnología e innovación (ASCTI), es una estrategia indispensable para que podamos reducir brechas sociales en el departamento del Meta, es por ello que la secretaría de TIC, ciencia y tecnología, propende por implementar procesos innovadores, científicos y tecnológicos en las aulas, construyendo y diseñando proyectos mediante el uso de las herramientas y metodologías de FabLab Kujana.
            <br><br>
            El diseño va más allá de las dimensiones, el aspecto, la forma y el color, también se analiza su funcionalidad, la utilidad, la operatividad, la eficiencia y su interacción con el usuario, permitiendo validar hipótesis, pero principalmente facilitando que la comunidad educativa, afiance conocimientos, resiliencia y capacidad para mejorar constantemente.

          </p>
          <br>
          <img
            src="../assets/botones/b2.png"
            width="100%"
          >
        </div>
        <el-button
          style="padding: 0px; border-radius: 0px"
          slot="reference"
        >
          <img src="../assets/botones/b2.png">
        </el-button>
      </el-popover>

      <el-popover
        placement="top-start"
        width="350"
        trigger="hover"
        class="botones_banner_movil"
      >
        <div style="background-color: #EEEEEE; padding: 15px">
          <h2>Prototipado</h2>
          <br>
          <p>Prototipar hace referencia a la acción y al proceso de creación de un modelo y las posteriores pruebas del producto. Esta actividad se centra en el uso de herramientas tecnológicas para proyectar soluciones a través de mecanismos que permitan validar e indicar el potencial del proyecto innovador.
            <br><br>
            En esta etapa se genera un acercamiento al desarrollo de soluciones de forma práctica y lúdica, aprovechando herramientas de impresión 3D, el desarrollo de software, aplicaciones web y móviles, facilitando el desarrollo de competencias de validación de las diversas variables que influyen en una solución final y su aceptación por usuarios y clientes.

          </p>
          <br>
          <img
            src="../assets/botones/b3.png"
            width="100%"
          >
        </div>
        <el-button
          style="padding: 0px; border-radius: 0px"
          slot="reference"
        >
          <img src="../assets/botones/b3.png">
        </el-button>
      </el-popover>

      <el-popover
        placement="top-start"
        width="350"
        trigger="hover"
        class="botones_banner_movil"
      >
        <div style="background-color: #EEEEEE; padding: 15px">
          <h2>Socialización</h2>
          <br>
          <p>Los participantes validan los prototipos, realizan un pitch y presentan una solución a los problemas sociales a través del uso de la ciencia, la tecnología y la innovación.
            Además de divulgar los resultados y presentar los productos, se expone la recopilación gráfica que evidencia el trabajo realizado en las anteriores fases de Ideación, Diseño y Prototipado, con el objetivo de compartir experiencias y conocimientos.

          </p>
          <br>
          <img
            src="../assets/botones/b4.png"
            width="100%"
          >
        </div>
        <el-button
          style="padding: 0px; border-radius: 0px"
          slot="reference"
        >
          <img src="../assets/botones/b4.png">
        </el-button>
      </el-popover>
      <!-- <a class="botones_banner_movil">
        <img src="../assets/botones/b2.png">
      </a>
      <a class="botones_banner_movil">
        <img src="../assets/botones/b3.png">
      </a>
      <a class="botones_banner_movil">
        <img src="../assets/botones/b4.png">
      </a> -->
    </div>

    <div class="botones_banner_responsive">
      <a
        :href="botones.url"
        v-for="botones in botones_banner.data"
        :key="botones.key"
        class="botones_banner_accion"
        target="_blank"
      >
        <div>
          <span>{{botones.titulo}}</span>
        </div>
      </a>
    </div>

    <div class="contenido">
      <div
        class="noticias"
        v-loading="loadingNoticias"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >

        <div
          class="noticias_contenedor"
          v-for="noticia in noticias.slice(0, 7)"
          :key="noticia.idTimeline"
        >

          <div
            class="noticias_contenedor_foto"
            v-if="noticia.imagenes[0]"
            :style="coverImagen(noticia)"
          >
          </div>
          <!-- <div class="card-contenedor-imagen-web">
            <img
              v-if="noticia.imagenes[0]"
              :src="`https://panel.fablabkujana.com/imagen_timeline/${noticia.imagenes[0].nombre_imagen}`"
              class="card-image-web"
            >
            <img
              v-else
              src="../assets/sinimagen.jpg"
              class="card-image-web"
            >
          </div> -->

          <!-- <div
            class="
            noticias_contenedor_foto"
            v-else
            :style="setStyle"
          >
          </div> -->

          <div class="noticias_contenedor_texto">
            <h2>{{ noticia.titulo }}</h2>
            <div
              :id="`setText${noticia.idTimeline}`"
              class="noticias_contenedor_p"
            >
              <p v-html="contarPalabras(noticia.contenido)+'...'"></p>
            </div>
            <div class="notcicias_bottom">

              <router-link :to="{ name: 'noticia',
                                            params: {
                                              id: noticia.idTimeline,
                                              contenido: noticia.contenido,
                                              titulo: noticia.titulo,
                                              imagen: noticia.imagenes
                                            }
                                          }">
                <el-button plain>Seguir Leyendo</el-button>
              </router-link>
              <span class="noticia_fecha">{{noticia.fecha}}</span>
            </div>
          </div>
        </div>

        <div class="card">
          <el-col
            :span="8"
            v-for="noticia in noticias.slice(0, 6)"
            :key="noticia.key"
            class="card-col"
          >
            <router-link :to="{ name: 'noticia',
                                   params: {
                                     id: noticia.idTimeline,
                                     contenido: noticia.contenido,
                                     titulo: noticia.titulo,
                                     imagen: noticia.imagenes
                                   }
                                 }">
              <el-card :body-style="{ padding: '0px' }">
                <div class="card-contenedor-imagen">
                  <img
                    v-if="noticia.imagenes[0]"
                    :src="`https://panel.fablabkujana.com/imagen_timeline/${noticia.imagenes[0].nombre_imagen}`"
                    class="card-image"
                  >
                  <img
                    v-else
                    src="../assets/sinimagen.jpg"
                    class="card-image"
                  >
                </div>

                <div style="padding: 14px;">
                  <span class="card-titulo">{{noticia.titulo}}</span>
                  <div class="card-bottom card-clearfix">
                    <time class="card-fecha">{{noticia.fecha}}</time>

                    <el-button
                      type="text"
                      class="card-button"
                    >Ver más</el-button>

                  </div>
                </div>
              </el-card>
            </router-link>
          </el-col>
        </div>

      </div>
      <div class="lateral">
        <!-- <iframe class="lateral_video" v-if="video_youtube" :src="`https://www.youtube.com/embed/${video_youtube.data.url}`" frameborder="0" allowfullscreen>
        </iframe> -->
        <iframe
          class="lateral_video"
          v-if="video_youtube"
          src="https://www.youtube.com/embed/j8CUkpm5vek"
          frameborder="0"
          allowfullscreen
        >
        </iframe>

        <iframe
          class="lateral_video"
          v-if="video_youtube"
          src="https://www.youtube.com/embed/TUg9XhiV7EM"
          frameborder="0"
          allowfullscreen
        >
        </iframe>

        <!-- https://youtu.be/j8CUkpm5vek -->
        <br>

        <br>
        <div class="lateral_line">
          <p></p>
        </div>

        <!-- <div style="display:flex; flex-direction: column-reverse; margin: 0px; padding: 2px; border: 0">
          <div class="lateral_cuadros" v-for="servicio in servicios.urls" :key="servicio.id">
            <a :href="servicio.url" target="_blank" style="width:100%">
              <img :src="`https://intranet.meta.gov.co/web_img_urls/${servicio.imagen}`" width="100%" style="width:100%">
            </a>
          </div>
        </div> -->

        <div style="display:flex; flex-direction: column-reverse; margin: 0px; padding: 0px; border: 0">
          <div class="lateral_cuadros">
            <a
              href="http://fabacademy.org/archives/2015/sa/labs/medellin/index.html"
              target="_blank"
              style="width:100%"
            >
              <img
                src="../assets/laterales/BL_1.jpg"
                width="100%"
                style="width:100%"
              >
            </a>
          </div>
        </div>

        <div style="display:flex; flex-direction: column-reverse; margin: 0px; padding: 0px; border: 0">
          <div class="lateral_cuadros">
            <a
              href="http://fab.pe"
              target="_blank"
              style="width:100%"
            >
              <img
                src="../assets/laterales/BL_2.jpg"
                width="100%"
                style="width:100%"
              >
            </a>
          </div>
        </div>

        <div style="display:flex; flex-direction: column-reverse; margin: 0px; padding: 0px; border: 0">
          <div class="lateral_cuadros">
            <a
              href="http://fablab.veritas.cr"
              target="_blank"
              style="width:100%"
            >
              <img
                src="../assets/laterales/BL_3.jpg"
                width="100%"
                style="width:100%"
              >
            </a>
          </div>
        </div>

        <div style="display:flex; flex-direction: column-reverse; margin: 0px; padding: 0px; border: 0">
          <div class="lateral_cuadros">
            <a
              href="http://www.fabfoundation.org"
              target="_blank"
              style="width:100%"
            >
              <img
                src="../assets/laterales/BL_4.jpg"
                width="100%"
                style="width:100%"
              >
            </a>
          </div>
        </div>

        <div style="display:flex; flex-direction: column-reverse; margin: 0px; padding: 0px; border: 0">
          <div class="lateral_cuadros">
            <a
              href="http://www.fablab.uchile.cl"
              target="_blank"
              style="width:100%"
            >
              <img
                src="../assets/laterales/BL_5.jpg"
                width="100%"
                style="width:100%"
              >
            </a>
          </div>
        </div>

        <div style="display:flex; flex-direction: column-reverse; margin: 0px; padding: 0px; border: 0">
          <div class="lateral_cuadros">
            <a
              href=" https://www.fablabmaya.org"
              target="_blank"
              style="width:100%"
            >
              <img
                src="../assets/laterales/BL_6.jpg"
                width="100%"
                style="width:100%"
              >
            </a>
          </div>
        </div>

        <br>
        <div class="lateral_line">
          <p></p>
        </div>

        <div
          class="social_botones_cuadro"
          style="width:100%; max-height:400px"
        >
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDZTQ3bguPo4RYBvTODt8Nps&key=AIzaSyBocvLGZd1i7uxy95idGFnPq1FJsrGFrWo"
            allowfullscreen
          ></iframe>
        </div>

      </div>
    </div>

    <!-- <div class="social_botones">

      <div class="social_botones_cuadro">

        <div class="fb-page" data-href="https://www.facebook.com/GobMeta/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-width="500" style="width:100%">
          <blockquote cite="https://www.facebook.com/GobMeta/" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/GobMeta/">Cargando Facebook...</a>
          </blockquote>
        </div>

      </div>

      <div class="social_botones_cuadro">
        <a class="twitter-timeline" href="https://twitter.com/marcela_amayag">Cargando Twitter...</a>
      </div>

      <div class="social_botones_cuadro">
        <iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpSytf-8tPo4RNiqM54NzV0M&key=AIzaSyBocvLGZd1i7uxy95idGFnPq1FJsrGFrWo" allowfullscreen></iframe>
      </div>

    </div> -->
  </div>
</template>

<script>
import bannerTop from "./banner.vue";
import PopUpNews from "./popupnews.vue";

// import radio from "./radio";
import axios from "axios";
export default {
  components: { bannerTop, PopUpNews },
  created() {
    axios
      .get("https://intranet.meta.gov.co/web/url_navegacion/listado")
      .then(response => {
        this.botones_banner = response.data;
      });

    axios
      .get("https://intranet.meta.gov.co/web/urls_externas/listado")
      .then(response => {
        this.servicios = response.data;
      });
  },
  mounted() {
    axios.get("https://intranet.meta.gov.co/web/url_youtube").then(response => {
      this.video_youtube = response.data;
    });

    setTimeout(() => {
      this.loading = false;
    }, 4000);

    setTimeout(() => {
      axios
        .get("https://intranet.meta.gov.co/api/cantidad/noticias")
        .then(response => {
          this.cantidadNoticias = response.data;
        });

      axios
        .get("https://panel.fablabkujana.com/api/noticias")
        .then(response => {
          this.noticias = response.data.timeline;
        });
      this.loadingNoticias = false;
    }, 1000);
  },
  data() {
    return {
      input: "",
      noticias: [],
      botones_banner: [],
      servicios: [],
      video_youtube: null,
      errors: [],
      cantidadNoticias: "",
      loading: true,
      loadingNoticias: true,
      ideacion: "Algo de ideacion"
    };
  },
  methods: {
    setcontenido(noticia) {
      setTimeout(() => {
        document.getElementById(`setText${noticia.idTimeline}`).innerHTML =
          noticia.contenido;
      }, 100);
    },
    contarPalabras(value) {
      if (value) {
        return value.substr(0, 150);
      }
    },
    coverImagen(value) {
      if (value.imagenes[0])
        return `background-image:url('https://panel.fablabkujana.com/imagen_timeline/${
          value.imagenes[0].nombre_imagen
        }'); background-size:cover`;
    },
    //     coverImagen(value) {
    //   if (value.imagenes[0])
    //     return `background-image:url('https://intranet.meta.gov.co/imagen_timeline/${
    //       value.imagenes[0].nombre_imagen
    //     }'); background-size:cover`;
    // },
    videoYoutube(urlVideo) {
      let index;
      if (urlVideo.includes("?v=")) {
        index = urlVideo.indexOf("?v=") + 3;
      } else {
        index = urlVideo.indexOf(".be/") + 4;
      }
      let idYoutube = urlVideo.substring(index);
      return idYoutube;
    }
  },
  computed: {
    setStyle() {
      let image = require("../assets/sinimagen.jpg");
      return `background-image:url('${image}'); background-size:cover`;
    }
  }
};
</script>

<style scoped>
.general {
  max-width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}
.menu {
  width: 100%;
  display: flex;
  background-color: white;
}
.banner {
  width: 100%;
}
.botones_banner {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.botones_banner img {
  width: 100%;
}
.botones_banner_responsive a {
  display: none;
  transition: 1s;
}

.botones_banner_accion {
  min-width: 199px;
  width: 100%;
  height: 128px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #9b9b9b;
  box-shadow: 0 1px 4px 0 rgba(118, 118, 118, 0.38);
  margin: 5px;
  transition: 1s;
}
.botones_banner_accion a:hover {
  transform: scale(1.05);
}
.botones_banner_accion a img:hover {
  transform: scale(1.05);
  filter: saturate(5);
}
.botones_banner_accion div {
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
}
.botones_banner_accion img {
  padding: 0px;
}
.botones_banner_movil {
  min-width: 199px;
  width: 100%;
  /* height: 128px; */
  display: flex;
  flex: 1;
  background-color: #f8f8f8;
  border-color: #f1f1f1;
  box-shadow: 0 1px 4px 0 rgba(164, 160, 160, 0.9);
  margin: 5px;
}
.botones_banner_movil {
  transition: 1s;
}
.botones_banner_movil:hover {
  transform: scale(1.03);
  filter: grayscale(1);
}
.botones_banner_regalias {
  background-color: #f5f5f5;
}
.botones_banner_regalias div {
  color: #393939;
}
.botones_banner_calendario {
  background-color: #3fbef6;
}
.botones_banner_liquidacion {
  background-color: #818a89;
}

.contenido {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.noticias {
  display: flex;
  flex-direction: column;
}
.noticias_contenedor {
  max-width: 755px;
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  border: 1px solid #d1dbe5;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.noticias_contenedor_bottom {
  display: flex;
  height: 150px;
}
.noticias_contenedor_img {
  max-width: 50%;
  max-height: 100%;
}
.noticias_contenedor_texto {
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.noticias_contenedor_foto {
  width: 450px;
  height: auto;
  padding: 0px;
}

.noticias_contenedor h2 {
  font-size: 12pt;
  font-weight: 400;
  line-height: 1.3;
}
.noticias_contenedor_p p {
  font-size: 10pt;
  line-height: 1.3;
  color: gray;
}
.noticias_bottom {
  display: flex;
  width: 200px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.noticia_fecha {
  font-size: 9pt;
  color: gray;
  align-self: flex-end;
  margin-left: 90px;
}
/*.noticias_contenedor button{
  	width: 110px;
  	height: 45px;
  	border: solid 1px #009d3d;
    background-color: white;
    margin-top: 20px;
    font-size: 14px;
	  font-weight: 500;
	  color: #393939;
    font-size: 12px;
  	font-weight: 500;
  	color: #128f2e;
}*/
.popover {
  width: 100%;
}
.card {
  display: none;
}

.card-contenedor-imagen-web {
  overflow: hidden;
  height: 170px;
  width: 450px;
  height: auto;
  padding: 0px;
}
.card-image-web {
  overflow: hidden;
  height: 100%;
}
.lateral {
  max-width: 384.1px;
  width: 100%;
  background-color: #f6f7f9;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.lateral_video {
  width: 100%;
  height: 235px;
  margin-bottom: 10px;
}
.lateral h2 {
  font-size: 22px;
  font-weight: 300;
  color: #4f6983;
  display: flex;
  align-self: center;
  margin-bottom: 5px;
}
.lateral_line {
  width: 100%;
  height: 1px;
  border: solid 1px rgba(155, 155, 155, 0.62);
  margin-bottom: 25px;
}
.lateral_line_boton {
  width: 100%;
  height: 45px;
  background-color: #f1f1f1;
  border: solid 1px rgba(155, 155, 155, 0.96);
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 500;
  color: #393939;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 60px;
}
.lateral_line_boton img {
  margin-right: 75px;
  height: 20px;
}
.lateral_cuadros {
  width: 100%;
  min-width: 40%;
  background-color: #ffffff;
  padding: 8px 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
}
.lateral_cuadros a {
  transition: 1s;
}
.lateral_cuadros a:hover {
  filter: grayscale(90%);
  transform: scale(1.05);
}
.lateral_cuadros img {
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(118, 118, 118, 0.38);
  width: 100%;
}
.social_botones_google_maps {
  display: flex;
  min-width: 300px;
  height: 350px;
  margin-bottom: 15px;
}
.social_botones {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.social_botones_cuadro {
  display: flex;
  flex: 1;
  /* max-width: 32%; */
  min-width: 300px;
  height: 500px;
  max-height: 500px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow: auto;
  margin-right: 0px;
}
.social_botones_cuadro2 {
  display: flex;
  height: 500px;
  max-width: 385px;
  min-width: 300px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow: auto;
  padding: 90px 40px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.social_botones_cuadro2 h2 {
  font-size: 22px;
  color: #4f6983;
  font-weight: 300;
  margin-bottom: 60px;
}
.social_botones_cuadro2 p {
  color: #393939;
  text-align: center;
}
.el-button--primary {
  width: 100%;
}
@media screen and (max-width: 1100px) {
  .botones_banner {
    flex-wrap: wrap;
    display: none;
  }
  .botones_banner_responsive {
    display: flex;
    flex-wrap: wrap;
  }
  .botones_banner_accion {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 90px;
  }
  .botones_banner_accion img {
    display: none;
  }
  .botones_banner_accion div {
    padding: 0px;
    text-align: center;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    display: flex;
    flex: 1;
    margin-bottom: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card-time {
    font-size: 13px;
    color: #999;
  }

  .card-bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .card-button {
    padding: 0;
    float: right;
  }

  .card-clearfix:before,
  .card-clearfix:after {
    display: table;
    content: "";
  }

  .card-clearfix:after {
    clear: both;
  }
  .card-col {
    display: flex;
    max-width: 380px;
    min-width: 250px;
    width: 100%;
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
  }
  .card-contenedor-imagen {
    overflow: hidden;
    height: 170px;
  }
  .card-image {
    width: 100%;
    display: block;
  }
  .card-titulo {
    font-size: 11 pt;
  }
  .card-fecha {
    font-size: 13px;
    color: #999;
  }
  .lateral {
    flex: 1;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
  }
  .lateral_line_boton {
    max-width: 49%;
    min-width: 360px;
  }
  .lateral_cuadros {
    max-width: 49%;
    min-width: 360px;
  }
  .social_botones_cuadro2 {
    flex: 1;
    max-width: 100%;
    margin-top: 0px;
    display: none;
  }
  .social_botones_cuadro {
    flex: 1;
    max-width: 48%;
    margin-bottom: 15px;
  }
  .noticias {
    width: 100%;
    max-width: 1000px;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .noticias_contenedor {
    width: 100%;
    max-width: 1000px;
    display: none;
  }
  .noticias_contenedor img {
    height: 220px;
    width: 300px;
  }
}
@media screen and (max-width: 500px) {
  .botones_banner {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: space-between;
    margin-top: 30px;
  }
  .botones_banner_responsive {
    display: none;
    flex-wrap: wrap;
  }
  .botones_banner_movil {
    width: 40vw;
    min-width: 40vw;
    height: auto;
    background: #ffffff;
  }
  .botones_banner_movil img {
    max-width: 100%;
  }
  .botones_banner_accion {
    justify-content: space-between;
    padding: 20px;
    height: 60px;
  }
  .botones_banner_accion img {
    display: inline;
    max-width: 40px;
    max-height: 40px;
  }
  .botones_banner_accion div {
    display: inline;
    text-align: left;
    font-size: 14px;
  }
  .lateral_line_boton {
    max-width: 100%;
    min-width: 0px;
  }
  .lateral_line_boton img {
    margin-right: 15px;
  }
  .lateral_cuadros {
    max-width: 100%;
    min-width: 0px;
  }
  .social_botones_cuadro {
    max-width: 100%;
    margin-right: 0px;
    min-width: 250px;
  }
  .social_botones_cuadro2 {
    height: 300px;
    padding: 30px 40px;
  }
  .noticias_contenedor img {
    max-height: auto;
    max-width: 100%;
  }
  .noticias_contenedor {
    display: none;
  }
  .noticias_card {
    display: run-in;
  }
  .card-col {
    width: 100%;
    max-width: 500px;
  }
  .card-contenedor-imagen {
    overflow: hidden;
    height: 190px;
  }
}
</style>
