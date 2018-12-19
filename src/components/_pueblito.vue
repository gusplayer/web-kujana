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

      <div
        class="botones_banner"
        v-loading="loading"
      >
        <div class="botones_banner_movil">

          <div class="popover-img">
            <img
              src="../assets/botones/b1.png"
              width="100%"
            >
          </div>

          <div class="popover-text">
            <h2>Ideación</h2>
            <br>
            <p>Desde Fab Lab Kujana orientamos la fase de Ideación a una simple pregunta, <br><br><b>¿Cómo se genera una idea?</b> <br><br>A través de la experiencia previa de los participantes y la identificación de problemas sociales, buscamos crear soluciones innovadoras a través de las herramientas de la Ciudadela del Saber y el emprendimiento TIC.
              Integramos diversas áreas de conocimiento para reconocer oportunidades de negocio, creando y formando ideas enfocadas en mercados y clientes específicos hasta llegar a la resolución de un problema.
            </p>
          </div>
        </div>

        <div class="botones_banner_movil">

          <div class="popover-text">
            <h2>Diseño</h2>
            <br>
            <p>La apropiación social de ciencia, tecnología e innovación (ASCTI), es una estrategia indispensable para que podamos reducir brechas sociales en el departamento del Meta, es por ello que la secretaría de TIC, ciencia y tecnología, propende por implementar procesos innovadores, científicos y tecnológicos en las aulas, construyendo y diseñando proyectos mediante el uso de las herramientas y metodologías de FabLab Kujana.
              <br><br>
              El diseño va más allá de las dimensiones, el aspecto, la forma y el color, también se analiza su funcionalidad, la utilidad, la operatividad, la eficiencia y su interacción con el usuario, permitiendo validar hipótesis, pero principalmente facilitando que la comunidad educativa, afiance conocimientos, resiliencia y capacidad para mejorar constantemente.

            </p>
          </div>
          <div class="popover-img">
            <img
              src="../assets/botones/b2.png"
              width="100%"
            >
          </div>
        </div>

        <div class="botones_banner_movil">

          <div class="popover-img">
            <img
              src="../assets/botones/b4.png"
              width="100%"
            >
          </div>

          <div class="popover-text">
            <h2>Socialización</h2>
            <br>
            <p>Los participantes validan los prototipos, realizan un pitch y presentan una solución a los problemas sociales a través del uso de la ciencia, la tecnología y la innovación.
              Además de divulgar los resultados y presentar los productos, se expone la recopilación gráfica que evidencia el trabajo realizado en las anteriores fases de Ideación, Diseño y Prototipado, con el objetivo de compartir experiencias y conocimientos.

            </p>
          </div>

        </div>

        <div class="botones_banner_movil">

          <div class="popover-text">
            <h2>Prototipado</h2>
            <br>
            <p>Prototipar hace referencia a la acción y al proceso de creación de un modelo y las posteriores pruebas del producto. Esta actividad se centra en el uso de herramientas tecnológicas para proyectar soluciones a través de mecanismos que permitan validar e indicar el potencial del proyecto innovador.
              <br><br>
              En esta etapa se genera un acercamiento al desarrollo de soluciones de forma práctica y lúdica, aprovechando herramientas de impresión 3D, el desarrollo de software, aplicaciones web y móviles, facilitando el desarrollo de competencias de validación de las diversas variables que influyen en una solución final y su aceptación por usuarios y clientes.

            </p>
          </div>
          <div class="popover-img">
            <img
              src="../assets/botones/b3.png"
              width="100%"
            >
          </div>
        </div>

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
  flex-direction: column;
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

.botones_banner {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-direction: column;
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
.popover-img {
  width: 50%;
  background-color: #f8f8f8;
}
.popover-text {
  width: 50%;
  background-color: #eeeeee;
  padding: 15px;
}

@media screen and (max-width: 700px) {
  .botones_banner_movil {
    min-width: 199px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #f8f8f8;
    border-color: #f1f1f1;
    box-shadow: 0 1px 4px 0 rgba(164, 160, 160, 0.9);
    margin: 5px;
  }
  .popover-img {
    width: 100%;
    background-color: #f8f8f8;
  }
  .popover-text {
    width: 100%;
    background-color: #eeeeee;
    padding: 15px;
  }
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
