<template>
  <div class="principal">

    <Breadcrumb></Breadcrumb>
    <BannerMicro
      :texto="texto"
      :imagen="imagenBanner"
    ></BannerMicro>

    <div class="contenido">
      <div class="texto">
        <h1>Pueblito Llanero</h1>
        <br>
        <p>
          La experiencia Fab Lab Kujana dentro del Pueblito Llanero busca acercar a sus visitantes a distintos proyectos de innovación, desarrollados de primera mano por el equipo de profesionales que conforma el FabLab.
          La maloca está equipada con herramientas tecnológicas pensadas para el reconocimiento de problemas, como también el desarrollo de sus posibles soluciones, utilizando los conocimientos desde diferentes áreas de ingeniería y marketing.<br><br>

          Nuevamente la innovación, la ciencia y la tecnología son foco de aprendizaje para los niños, niñas y jóvenes que participan de esta experiencia, siendo partícipes de la mesa de Ideación y conociendo de igual manera los prototipos y productos desarrollados.
        </p>
      </div>
    </div>

  </div>

</template>

<script>
import BannerMicro from "./bannerMicro.vue";
import Breadcrumb from "./breadcrumb.vue";

export default {
  components: { BannerMicro, Breadcrumb },
  name: "app",
  data() {
    return {
      texto: "Kujana",
      imagenBanner: require("../assets/banners/pueblito.jpg")
    };
  }
};
</script>

<style scoped>
h2 {
  font-size: 30px;
  font-weight: 600;
  color: #37474f;
}
p {
  font-size: 10pt;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0.2px;
}
h3 {
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
  letter-spacing: 0.2px;
}
.principal {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  padding: 12px;
}

.contenido {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.texto {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 400px;
  box-shadow: 0 0 10px 0 rgba(94, 92, 92, 0.22);
  padding: 28px;
  margin-right: 20px;
}
.google_maps {
  display: flex;
  min-width: 400px;
}

@media screen and (max-width: 900px) {
  .texto {
    margin-right: 0px;
    margin-bottom: 15px;
  }
  .google_maps {
    flex: 1;
    height: 400px;
  }
  .banner {
    height: 280px;
  }
}
@media screen and (max-width: 490px) {
  .banner_text {
    padding: 10px;
    height: 40px;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
  }
  .contenido {
    flex-direction: column;
  }
  .texto {
    width: 100%;
    min-width: 100px;
    box-sizing: border-box;
  }
  .google_maps {
    min-width: 100px;
    width: 100%;
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #37474f;
  }
}
</style>
