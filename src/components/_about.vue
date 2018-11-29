<template>
  <div class="principal">

    <Breadcrumb></Breadcrumb>
    <BannerMicro
      :texto="texto"
      :imagen="imagenBanner"
    ></BannerMicro>

    <div class="contenido">
      <div class="texto">
        <h1>¿Quiénes somos?</h1><br> <br>
        <p>
          Un Fab Lab (acrónimo del inglés Fabrication Laboratory) es un espacio de producción de objetos físicos a escala personal o local que agrupa máquinas controladas por ordenadores, capaces de fabricar casi cualquier cosa que imaginemos. Su particularidad reside en su tamaño y en su fuerte vinculación con la sociedad.
          <br><br>
          Los fablabs se mueven alrededor de dos movimientos sociotecnológicos, el DIY (do it yourself) o la autoproducción y el open source o el libre flujo de información y conocimiento.
          <br><br>
          Red Fab Lab
          El concepto de Fab Lab aparece en el seno del Media Lab en el MIT (Massachussets Institute of Technology). Esto ocurre a principios del siglo XXI, cuando en 2001 el CBA (Center for Bits and Atoms) recibe una subvención de la NSF (National Science Foundation) para establecer unas instalaciones únicas de fabricación digital transversales a varias disciplinas. Así se adquieren máquinas capaces de “construirlo casi todo”. Su director Neil A. Gershenfeld justifica esa financiación “haciendo lo que se hacía en el MIT, en lugar de solamente hablar de ello”. En 2002, surgen los primeros Fab Labs en India, Costa Rica, Noruega, Boston y Ghana, como unidades de producción a escala local.
          <br><br>
          Fab Lab 'Charter'
          Según la Fab Foundation, un Fab Lab se basa en 8 puntos clave. Estos se agrupan en su definición: misión, acceso y educación. Y la responsabilidad de los usuarios: seguridad, limpieza, operaciones, confidencialidad y negocio.
          <br><br>
          La misión de los fablabs es ser una red global de laboratorios locales que favorecen la creatividad proporcionando a los individuos el acceso herramientas de fabricación digital.
          <br><br>
          El acceso debe ser universal, permitiendo utilizar las herramientas para la fabricación de casi cualquier cosa siempre y cuando no haga daño a nadie. Sin embargo, se promueve el autoaprendizaje y la compartición, así el usuario debe aprender por si solo y debe compartir el uso del laboratorio con otros usuarios.
          <br><br>
          La educación se centra en que la enseñanza en un fablab se desarrolla sobre proyectos en progreso y el aprendizaje entre pares. Por lo tanto se insta a que los usuarios contribuyan a la documentación y la instrucción.
          <br><br>
          Al trabajar con máquinas es importante la seguridad, por lo tanto es responsabilidad de los usuarios saber trabajar sin hacer daño a las personas ni a las máquinas.
          <br><br>
          La limpieza de este espacio compartido también es responsabilidad de los usuarios, así se hace una llamamiento a dejar el laboratorio más limpio aún que antes de usarlo.
          <br><br>
          Las operaciones con el material del laboratorio es otro punto a tener en cuenta, esto hace que los usuarios sean responsables de contribuir al mantenimiento, la reparación y el seguimiento de las herramientas, las necesidades y los incidentes.
          La confidencialidad, aunque la propiedad intelectual pueda ser protegida los diseños y procesos desarrollados en los fablabs deben quedar accesibles al uso individual.
          <br><br>
          Las actividades comerciales pueden ser incubadas en los fablabs pero no pueden entrar en conflicto con el acceso abierto. Deberían crecer más allá del laboratorio en lugar de dentro, se espera que esos negocios beneficien a los inventores, laboratorios y redes que han contribuido a su éxito.

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
      texto: "Acerca de Kujana",
      imagenBanner: require("../assets/banners/about.jpg")
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
