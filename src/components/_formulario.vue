<template>
  <div class="principal">

    <Breadcrumb></Breadcrumb>
    <!-- <BannerMicro
      :texto="texto"
      :imagen="imagenBanner"
    ></BannerMicro> -->

    <div class="contenido">
      <iframe
        class="iframeForm"
        src="https://docs.google.com/forms/d/e/1FAIpQLSevooELIXM_Amlxb1X1_2EiH8Aa_wDZ4ja-EV7Ymcbj8T63NA/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Cargando...</iframe>

    </div>

  </div>

</template>

<script>
import BannerMicro from "./bannerMicro.vue";
import Breadcrumb from "./breadcrumb.vue";

export default {
  components: { BannerMicro, Breadcrumb },
  name: "formulario",
  data() {
    return {
      texto: "Buzón de contacto",
      imagenBanner: require("../assets/banners/contacto.jpg")
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
  align-items: flex-start;
  justify-content: space-between;
  height: 2000px;
}
.iframeForm {
  width: 800px;
  height: 2000px;
}

@media screen and (max-width: 800px) {
  .banner {
    height: 280px;
  }
  .contenido {
    display: flex;
    justify-content: space-between;
    height: 100vh;
  }
  .iframeForm {
    height: 3000px;
    width: 350px;
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
