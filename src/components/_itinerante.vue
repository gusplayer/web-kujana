<template>
  <div class="principal">

    <Breadcrumb></Breadcrumb>
    <BannerMicro
      :texto="texto"
      :imagen="imagenBanner"
    ></BannerMicro>

    <div class="contenido">
      <div class="texto">
        <h1>Kujana: Itinerante</h1><br><br>
        <p>
          Los medios disponibles de atención y participación que tienen los ciudadanos para presentar Peticiones, Quejas , Reclamos, Sugerencias y Denuncias, son:<br><br>

          <b>HORARIO DE ATENCIÓN AL PÚBLICO:</b> De lunes a viernes en días hábiles laborales de 8:00 a.m. a 12:00 m. y de 2:00 p.m. a 6:00 p.m.
          <br><br>

          <b>PORTAL WEB INSTITUCIONAL:</b> www.fablabkujana.com
          <br><br>

          <b>CORREO ELECTRÓNICO INSTITUCIONAL:</b> contactanos@fablabkujana.com
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
      texto: "Kujana Itinerante",
      imagenBanner: require("../assets/banners/kujanitos.png")
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
