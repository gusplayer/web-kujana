<template>
  <div class="principal">

    <Breadcrumb></Breadcrumb>
    <!-- <BannerMicro
      :texto="texto"
      :imagen="imagenBanner"
    ></BannerMicro> -->

    <div class="contenido">
      <div class="texto">
        <h1>Condiciones de uso</h1>
        <br>
        <br>
        <p>
          Conscientes de la importancia que tiene la protección y el buen manejo de la información personal suministrada los titulares de la información, LA AGENCIA DE VIAJES Y TURISMO AVIATUR S.A.S., - en adelante AVIATUR, quien actúa como responsable de la información recibida, ha diseñado la presente política y procedimientos que en conjunto permiten hacer un uso adecuado de sus datos personales.

          Conforme a lo dispuesto en el artículo 15 de la Constitución Política de Colombia, el cual desarrolla el derecho fundamental al hábeas data, referido al derecho que tienen todos los ciudadanos de conocer, actualizar, rectificar los datos personales que existan sobre ella en bases de datos y en archivos tanto de bases públicas como privadas, lo cual se relaciona indefectiblemente con el manejo y tratamiento de la información que los receptores de información personal deben tener en cuenta. Dicho derecho se ha desarrollado mediante la expedición de la Ley Estatutaria 1581 de 2012 y el Decreto Reglamentario 1377 de 2013, con base en los cuales AVIATUR en calidad de RESPONSABLE de los datos personales que recibe, maneja y trata la información y procede así a expedir la presente política de tratamiento de datos personales, la cual se pone en conocimiento del público para que conozcan la manera como AVIATUR trata su información. Lo dispuesto en la presente política de tratamiento de datos personales es de obligado cumplimiento por parte de AVIATUR, sus administradores, trabajadores, contratistas y terceros con los que AVIATUR entable relaciones de cualquier índole.

          Objetivo

          Con la implementación de ésta política, se pretende garantizar la reserva de la información y la seguridad sobre el tratamiento que se le dará a la misma a todos los clientes, proveedores, empleados y terceros de quienes AVIATUR ha obtenido legalmente información y datos personales conforme a los lineamientos establecidos por la ley regulatoria del derecho al Habeas Data. Asimismo, a través de la expedición de la presente política se da cumplimiento a lo previsto en el literal K del artículo 17 de la referida ley.
        </p>
      </div>

      <!-- <div class="google_maps">
        <iframe
          width="100%"
          height="400px"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDZTQ3bguPo4RYBvTODt8Nps&key=AIzaSyBocvLGZd1i7uxy95idGFnPq1FJsrGFrWo"
          allowfullscreen
        ></iframe>
      </div> -->
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
