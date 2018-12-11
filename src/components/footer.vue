<template>
  <div>

    <div class="uper_footer">
      <div class="uper_footer_content">
        <!-- <a v-for="feet in footers.data" :key="feet.id">
          <img :src="`https://intranet.meta.gov.co/footer_img/${feet.imagen}`">
        </a> -->
        <a>
          <img src="../assets/logo.png">
        </a>
        <a>
          <img src="../assets/ciente_logo.jpg">
        </a>

      </div>
    </div>

    <div>
      <div class="footer">
        <div class="footer_content">
          <div class="footer_politicas">
            <h5>Politicas</h5>
            <!-- <router-link to="/condiciones">
              <p>Condiciones de uso</p>
            </router-link> -->
            <router-link to="/privacidad">
              <p>Políticas de privacidad y condiciones de uso</p>
            </router-link>
          </div>
          <div class="footer_ayuda">
            <h5>Social Media</h5>
            <div class="footer_siguenos_icons">
              <a
                href="https://www.facebook.com/FabLabKujana"
                target="_blank"
              ><img
                  src="../assets/social/facebook.png"
                  width="32px"
                >Facebook</a>
              <a
                href="https://twitter.com/FablabKujana"
                target="_blank"
              ><img
                  src="../assets/social/twitter.png"
                  width="32px"
                >Twitter</a>
              <a
                href="https://www.instagram.com/fablabkujana/"
                target="_blank"
              ><img
                  src="../assets/social/Instagram.png"
                  width="32px"
                >Instagram</a>
              <a
                href="https://www.youtube.com/channel/UC2049ju5b7Iy_P2lKLt8Fvg"
                target="_blank"
              ><img
                  src="../assets/social/youtube.png"
                  width="32px"
                >Youtube</a>
            </div>
          </div>
          <div class="footer_popular">
            <h5>Accesibilidad</h5>
            <router-link to="/sitemap">
              <p>Mapa de sitio</p>
            </router-link>

          </div>
          <div class="footer_contacto">
            <h5>Horarios</h5>
            <!-- <span class="footer_mail">oficinaatencionalciudadano@meta.gov.co</span>
             <span class="footer_mail">notificacionesjudiciales@meta.gov.co</span> -->
            <span class="footer_direccion">
              Lunes a viernes <br><br>
              8:00 AM a 11:30 AM <br> 14:00 PM a 16:30 PM
              <br>

            </span>
          </div>
          <div class="footer_siguenos">
            <h5>Contacto</h5>

            <span class="footer_siguenos_pbx">contactanos@fablabkujana.com
              <br><br>
              Dirección: Dirección Pueblito Llanero , Parque Las Malocas -Catama
              <br><br>Villavicencio, Colombia.</span>

          </div>
        </div>
      </div>

      <div class="line">
        <p></p>
      </div>

      <div class="dark">
        <div class="light">
          <img
            class="light_img_foster"
            src="../assets/foster.png"
            height="55px"
          >
          <img
            class="light_img_lacharme"
            src="../assets/lacharme.png"
            height="26px"
          >
          <img
            class="light_img_parque"
            src="../assets/parque.png"
            height="38px"
          >
        </div>

        <div class="light copyright">

          <p>Desarrollado por
            <a
              href="http://fosterapps.com/"
              target="_blank"
            >
              FosterApps.com
            </a>
          </p>
          <p>
            - Copyright © FABLAB KUJANA
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("https://intranet.meta.gov.co/web/footer/listado")
      .then(response => {
        this.footers = response.data;
      });
  },
  data() {
    return {
      footers: []
    };
  }
};
</script>

<style scoped>
.uper_footer {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.26);
}
.uper_footer_content {
  max-width: 1200px;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.uper_footer_content img {
  height: 66px;
  width: auto;
  margin-left: 50px;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 65px 0;
}
.footer p {
  font-size: 15px;
  letter-spacing: 0.2px;
  color: #4a4a4a;
}
.footer h5 {
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.2px;
  color: #4f6983;
  margin-bottom: 10px;
}
.footer_mail {
  font-size: 15px;
  letter-spacing: 0.2px;
  color: #128f2e;
  line-height: 35px;
}
.footer_direccion {
  font-size: 14px;
  color: #6487ab;
  line-height: 1.6;
  margin-top: 15px;
}
.footer_content {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.footer_politicas {
  max-width: 200px;
  width: 100%;
  line-height: 35px;
}
.footer_ayuda {
  width: 170px;
  line-height: 35px;
}
.footer_popular {
  width: 200px;
  line-height: 35px;
}
.footer_contacto {
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}
.footer_siguenos {
  width: 250px;
}
.footer_siguenos_icons {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 52px;
  margin-top: 0px;
}
.footer_siguenos_icons a {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.footer_siguenos_icons img {
  margin-right: 20px;
}
.footer_siguenos_pbx {
  width: 236px;
  height: 88px;
  font-size: 14px;
  color: #6487ab;
  line-height: 1.6;
}
.line {
  width: 100%;
  height: 1.5px;
  background-color: #e4f1fd;
}
.subfooter {
  width: 100%;
  height: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.subfooter_content {
  width: 1200px;
  height: 55px;
  padding: 0 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.subfooter_content_left {
  width: 520px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  color: #6487ab;
}
.subfooter_content_left a {
  font-size: 16px;
  color: #6487ab;
}
.subfooter_content_right {
  font-size: 16px;
  font-weight: 300;
  text-align: right;
  color: #6487ab;
}
.dark {
  max-width: 1200px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
}
.light {
  color: gray;
  font-size: 14px;
  font-weight: 300;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.light a {
  color: gray;
  font-weight: 600;
}
.light img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  margin-right: 25px;
}
@media screen and (max-width: 1100px) {
  .uper_footer {
    width: 100%;
    height: auto;
  }

  .uper_footer_content img {
    height: 50px;
    width: auto;
    margin: 10px;
  }
  .footer_content {
    flex-wrap: wrap;
  }
  .dark {
    flex-direction: row;
    margin-bottom: 20px;
  }
  .light {
    margin: 0 auto;
  }
}
@media screen and (max-width: 500px) {
  .uper_footer {
    width: 100%;
    height: auto;
  }
  .uper_footer_content {
    width: auto;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  }
  .uper_footer_content img {
    margin: 5px;
    max-height: 40px;
    height: 100%;
    width: auto;
  }
  .footer_content {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
  .footer_content div {
    margin: 10px;
    padding-left: 30px;
  }
  .footer_siguenos div {
    padding-left: 0px;
    margin-left: 0px;
  }
  .footer_mail {
    font-size: 13px;
  }
  .light {
    margin: 0 30px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    text-align: left;
  }
  .copyright {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: flex-start;
  }

  .light_img_foster {
    height: 38px;
  }
  .light_img_lacharme {
    height: 15px;
  }
  .light_img_parque {
    height: 42px;
  }
}
</style>
