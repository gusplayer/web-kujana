<template>

  <div
    class="prensa"
    v-loading="loading"
    element-loading-text="Cargando Busqueda.."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >

    <Breadcrumb></Breadcrumb>

    <center>
      <h2>Buscador</h2><br>
      <p>Escribe una palabra relacionada, el sistema buscara en noticias y documentos. </p>
      <br>
      <center>
        <el-input
          class="input-buscador"
          placeholder="Escribe aquí lo que quieres buscar"
          prefix-icon="el-icon-search"
          v-model="search"
        ></el-input>

      </center>
    </center><br><br>

    <div
      class="contenedor"
      v-if="search != ''"
    >

      <div
        class="contenedor-paginas"
        v-show="filterDataPages.length"
      >
        <p><b>Páginas encontradas en la busqueda</b></p>
        <br>
        <router-link
          v-for="(page , index) in filterDataPages"
          :key="index"
          :to="page.path"
          class="router-paginas"
        >
          <p>{{page.breadcrumb}} <b>{{page.titulo}}</b> </p>
        </router-link>
      </div>

      <div
        class="noticias"
        v-if="search != ''"
        v-show="filterData.length"
      >
        <br>
        <br>
        <p><b>Resultados encontrados en noticias</b></p><br>
        <div class="card">
          <el-col
            :span="8"
            v-for="(noticia,index) in filterData"
            :key="index"
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
      <div
        class="documentos"
        v-if="search != ''"
      >
        <br><br>
        <p><b>Buscar  en documentos </b></p><br>
        <el-button
          type="primary"
          icon="el-icon-search"
          v-on:click="searchDocs"
        >Buscar " {{search}} " en documentos</el-button>
        <br>
        <div
          class="secciones_docs"
          v-for="(archivo, index) in docs.archivos"
          :key="index"
        >
          <i class="el-icon-document"></i>
          <div class="secciones_docs_descarga">
            <p>{{archivo.nombre}}</p>
            <el-button
              type="primary"
              v-on:click="getContentFile(archivo.id)"
            >Descarga</el-button>
          </div>
        </div>
      </div>
    </div>
    <a
      id='downfile'
      download='descarga'
      style="display:none;"
    />

  </div>

</template>

<script>
import axios from "axios";
import BannerMicro from "./bannerMicro.vue";
import Breadcrumb from "./breadcrumb.vue";
export default {
  components: { BannerMicro, Breadcrumb },
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

    if (this.$route.params.search) {
      this.search = this.$route.params.search;
      this.searchDocs();
    }
  },
  data() {
    return {
      noticias: [],
      texto: null,
      imagenBanner: require("../assets/prensa.jpg"),
      search: "",
      loading: true,
      docs: "",
      paginas: [
        {
          titulo: "Inicio",
          path: "/",
          breadcrumb: " "
        },
        {
          titulo: "Quienes somos",
          path: "/about",
          breadcrumb: "Inicio > ",
          tags: "quienes somos nosotros"
        },
        {
          titulo: "Mapa del sitio",
          path: "/sitemap",
          breadcrumb: "Inicio > Quiénes somos > ",
          tags: "quienes somos nosotros"
        },
        {
          titulo: "Documentación",
          path: "/documentacion",
          breadcrumb: "Inicio > Quiénes somos > ",
          tags: "quienes somos nosotros"
        },
        {
          titulo: "Pueblito Llanero",
          path: "/pueblito",
          breadcrumb: "Inicio > Experiencia > ",
          tags: "quienes somos nosotros"
        },
        {
          titulo: "Kujana Itinerante",
          path: "/itinerante",
          breadcrumb: "Inicio > Experiencia > ",
          tags: "quienes somos nosotros"
        },
        {
          titulo: "Noticias",
          path: "/prensa",
          breadcrumb: "Inicio > ",
          tags: "quienes somos nosotros"
        },
        {
          titulo: "Galería multimedia",
          path: "/galeria",
          breadcrumb: "Inicio > Noticias > ",
          tags: "quienes somos nosotros"
        },
        {
          titulo: "Contáctanos",
          path: "/contacto",
          breadcrumb: "Inicio > ",
          tags: "quienes somos nosotros"
        }
      ]
    };
  },
  methods: {
    searchDocs() {
      axios
        .post("https://panel.fablabkujana.com/api/documentos/buscar", {
          documento: this.search
        })
        .then(response => {
          this.docs = response.data;
        });
    },

    getContentFile(idfile) {
      console.log("si entra");
      let json = {
        id: idfile,
        contrasena: ""
      };
      axios
        .post("https://panel.fablabkujana.com/web/archivo", json, {
          responseType: "arraybuffer"
        })
        .then(response => {
          let image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          let base64 = `data:${response.headers[
            "content-type"
          ].toLowerCase()};base64,${image}`;
          var dlnk = document.getElementById("downfile");
          dlnk.href = base64;
          dlnk.click();
        });
    }
  },
  computed: {
    filterData: function() {
      let algo = this.noticias.filter(dato => {
        if (dato.titulo != null) {
          let tittle = dato.titulo.toUpperCase();
          return tittle.includes(this.search.toUpperCase());
        }
      });
      return algo.slice(0, 42);
    },
    filterDataPages: function() {
      let algo = this.paginas.filter(dato => {
        let tittle = dato.titulo.toUpperCase();
        return tittle.includes(this.search.toUpperCase());
      });
      return algo;
    }
  }
};
</script>

<style scoped>
.contenedor_blog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.contenedor_buscador {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-bottom: -5px;
}
.contenedor {
  display: flex;
  flex-direction: column;
}
.contenedor-paginas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-bottom: 15px;
  background-color: #e4eaf1;
}
.router-paginas {
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  color: rgb(44, 44, 44);
  padding: 10px;
  margin-bottom: 14px;
  width: 400px;
  font-weight: 400;
  cursor: pointer;
  transition: 1s;
}
.input-buscador {
  width: 400px;
}
.router-paginas b {
  font-weight: 700;
  color: rgb(0, 102, 255);
}
.router-paginas:hover {
  background-color: #f3f2f2;
  box-shadow: 0 2px 4px 0 rgba(252, 186, 45, 0.5);
  color: rgb(44, 44, 44);
  font-weight: 400;
  transform: scale(1.05);
}
.router-paginas:hover b {
  font-weight: 700;
  color: rgb(19, 99, 3);
}

.noticias {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(235, 236, 236);
}
.documentos {
  display: flex;
  flex: 1;
  background-color: rgb(214, 214, 214);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.secciones_docs {
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
}
.secciones_docs_descarga {
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  width: 100%;
}
.buscador {
  width: 500px;
}
.time {
  font-size: 15px;
  color: #999;
}
.el-col {
  padding: 5px;
  margin-bottom: 20px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.card {
  display: flex;
  flex: 1;
  margin-bottom: 30px;
  justify-content: center;
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

@media screen and (max-width: 700px) {
  .input-buscador {
    width: 100%;
    max-width: 400px;
  }
  .contenedor-paginas {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-bottom: 10px;
  }
  .router-paginas {
    padding: 10px;
    margin-bottom: 14px;
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    cursor: pointer;
    transition: 1s;
  }

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
