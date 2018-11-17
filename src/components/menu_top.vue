<template>
  <div id="menuTop">

    <div class="encabezado_menu">
      <a href="https://www.google.com.co/maps/dir/4.1595978,-73.637553/parque+malocas+villavicencio+google+maps/@4.1397162,-73.6370323,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3e2eb8ddd0940d:0x9b367c3b38d31b60!2m2!1d-73.5749169!2d4.1250804" target="_blank"><span>¿Cómo llegar? </span></a>

    </div>

    <div class="encabezado_icons">
      <!-- <Buscador /> -->
      <!-- <span><b>A</b></span>
      <span><b>A</b>-</span>
      <span><b>A</b>+</span> -->

      <a href="https://www.facebook.com/FabLabKujana/" target="_blank"><img src="../assets/facebook.svg"></a>
      <!-- <a href="https://twitter.com/marcela_amayag" target="_blank"><img src="../assets/twitter.svg"></a> -->
    </div>

  </div>
</template>

<script>
import Buscador from "./buscador.vue";
export default {
  components: {
    Buscador
  },
  name: "app"
};
</script>

<style scoped>
#menuTop {
  max-width: 1300px;
  width: 95%;
  height: 70px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.encabezado_menu {
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.encabezado_menu span {
  font-size: 14px;
  font-weight: 500;
  color: rgba(74, 74, 74, 0.87);
}
.encabezado_icons {
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.encabezado_icons img {
  height: 16px;
}
.encabezado_icons span {
  font-size: 16px;
  font-weight: 500;
  color: rgba(74, 74, 74, 0.87);
}
@media screen and (max-width: 600px) {
  #menuTop {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .encabezado_menu {
    display: none;
  }
}
</style>
