<template>

  <div
    class="prensa"
    v-loading="loading"
    element-loading-text="Cargando Noticias.."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >

    <Breadcrumb></Breadcrumb>

    <div class="content">
      <div
        class="card"
        v-for="(noticia,index) in filterData"
        :key="index"
      >
        <img
          :src="noticia"
          class="image"
          @click="onClick(index)"
        >

      </div>
      <vue-gallery-slideshow
        :images="filterData"
        :index="index"
        @close="index = null"
      ></vue-gallery-slideshow>
    </div>
    <div class="content-videos">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/j8CUkpm5vek"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
      <iframe
        class="video"
        src="https://www.youtube.com/embed/TUg9XhiV7EM"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
      <iframe
        class="video"
        src="https://www.youtube.com/embed/txHkvyI1n3k"
        frameborder="0"
        allowfullscreen
      >
      </iframe>

    </div>
        <div class="content">
      <img class="card" v-for="(image, index2) in images" :key="`img${index2}`" :src="image" @click="onClick2(index2)">
      <vue-gallery-slideshow
        :images="images"
        :index="index2"
        @close="index2 = null"
      ></vue-gallery-slideshow>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import BannerMicro from "./bannerMicro.vue";
import Breadcrumb from "./breadcrumb.vue";
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  components: { BannerMicro, Breadcrumb, VueGallerySlideshow },
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
  },
  data() {
    return {
      noticias: [],
      imagenBanner: require("../assets/banners/noticias.jpg"),
      loading: true,
      index: null,
      index2: null,
      images: [
        

        require('../assets/kujana/fotos Facebook FabLab Kujana/45536221_702982710079359_327139189260812288_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45546892_702982596746037_8228599912510521344_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45600130_702982610079369_2534344649569468416_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45659953_702982700079360_9066845136322822144_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45693865_702982593412704_4235508451653976064_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45706038_704028039974826_7988901640306425856_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45710555_704092183301745_7004628103955742720_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45732324_704118489965781_6943807699142311936_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45737653_704028209974809_8915703261491625984_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45760239_704118473299116_6629502786989981696_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45762718_704028046641492_599376906793517056_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/45817355_704028056641491_3808431283290243072_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46011127_704092176635079_1485344951045718016_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46463387_710652009312429_5765980770107654144_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46488224_710651939312436_1286787595044388864_o.jpg'),


        require('../assets/kujana/fotos Facebook FabLab Kujana/46488434_710696309307999_919971609572278272_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46491590_710675785976718_8040107275496456192_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46491671_710651962645767_3267184796048031744_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46495098_710675799310050_750936286805622784_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46508987_710696305974666_6935038101773352960_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46512119_710675819310048_2488046925048184832_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46679491_710696315974665_1606168973856997376_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/46969472_715999122111051_4571072236445761536_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47087330_715998968777733_293127124200456192_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47294953_718546301856333_1400434744683921408_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47314937_715999138777716_736826133827289088_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47425097_719778765066420_258827133122510848_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47465030_719778728399757_8410546929171169280_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47472683_718547771856186_9166903984395386880_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47474376_719778791733084_4357780544163938304_o.jpg'),

        require('../assets/kujana/fotos Facebook FabLab Kujana/47572272_718547515189545_7121727806005837824_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47577911_719778751733088_406615278445658112_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47683078_722196171491346_8755887339428904960_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/47686741_723141068063523_4605200720889643008_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48027336_723721911338772_3478325044722008064_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48053117_722196194824677_3166823865745670144_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48078360_723722008005429_5008280824638865408_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48125592_722196138158016_1365944293281234944_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48220026_723141011396862_8659031635016024064_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48247069_723721878005442_8484858702434664448_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48027336_723721911338772_3478325044722008064_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48247069_723721878005442_8484858702434664448_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48350189_723141051396858_1593775716875370496_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48361316_724834484560848_7059112886546726912_n.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48398445_724834437894186_6473724808495366144_o.jpg'),
        require('../assets/kujana/fotos Facebook FabLab Kujana/48429857_724834464560850_3814687938243985408_n.jpg'),


        







        require('../assets/kujana/Antonio-Ricaute/FOTO 5-01 (2).jpg'),
        require('../assets/kujana/Antonio-Ricaute/FOTO 6-01.jpg'),
        require('../assets/kujana/Antonio-Ricaute/Fotos 1-01.jpg'),
        require('../assets/kujana/Antonio-Ricaute/fotos 2-01.jpg'),
        require('../assets/kujana/Antonio-Ricaute/fotos 3-01.jpg'),
        require('../assets/kujana/Antonio-Ricaute/toso 4-01.jpg'),

        require('../assets/kujana/Casd/20171109_093222.jpg'),
        require('../assets/kujana/Casd/20171109_093304.jpg'),
        require('../assets/kujana/Casd/20171109_093400.jpg'),
        require('../assets/kujana/Casd/20171109_093610.jpg'),
        require('../assets/kujana/Casd/20171109_093844.jpg'),
        require('../assets/kujana/Casd/20171109_094501.jpg'),
        require('../assets/kujana/Casd/20171109_094536.jpg'),
        require('../assets/kujana/Casd/20171109_094809.jpg'),
        require('../assets/kujana/Casd/20171109_094833.jpg'),

        require('../assets/kujana/Colciencias/IMG-20171211-WA0018.jpg'),
        require('../assets/kujana/Colciencias/IMG-20171212-WA0016.jpg'),
        require('../assets/kujana/Colciencias/IMG-20171212-WA0018.jpg'),
        require('../assets/kujana/Colciencias/IMG-20171212-WA0023.jpg'),
        require('../assets/kujana/Colciencias/IMG-20171212-WA0025.jpg'),
        require('../assets/kujana/Colciencias/IMG-20171212-WA0030.jpg'),
        require('../assets/kujana/Colciencias/IMG-20171212-WA0032.jpg'),



        require('../assets/kujana/Cormacarena/111.jpg'),
        require('../assets/kujana/Cormacarena/1111.jpg'),
        require('../assets/kujana/Cormacarena/25323732_1308862892551656_1841955108_n.jpg'),
        require('../assets/kujana/Cormacarena/25359696_1308862905884988_1556221953_n.jpg'),
        require('../assets/kujana/Cormacarena/25359899_1308862902551655_1410482_n.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171124-WA0021.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171124-WA0025.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171124-WA0027.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171124-WA0054.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171127-WA0024.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171127-WA0028.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171127-WA0029.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171127-WA0031.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171127-WA0033.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171127-WA0036.jpg'),
        require('../assets/kujana/Cormacarena/IMG-20171127-WA0043.jpg'),
        

        require('../assets/kujana/Factory/rotulofotos2-01.jpg'),
        require('../assets/kujana/Factory/rotulofotos2-02.jpg'),
        require('../assets/kujana/Factory/rotulofotos2-03.jpg'),
        require('../assets/kujana/Factory/rotulofotos2-04.jpg'),
        require('../assets/kujana/Factory/rotulofotos2-05.jpg'),
        require('../assets/kujana/Factory/rotulofotos2-06.jpg'),
        require('../assets/kujana/Factory/rotulofotos2-07.jpg'),
        require('../assets/kujana/Factory/rotulofotos2-08.jpg'),

        require('../assets/kujana/Francisco Arango/20171011_104143.jpg'),
        require('../assets/kujana/Francisco Arango/20171011_104228.jpg'),
        require('../assets/kujana/Francisco Arango/20171011_104942.jpg'),
        require('../assets/kujana/Francisco Arango/20171011_105000.jpg'),
        require('../assets/kujana/Francisco Arango/20171011_105002.jpg'),
        require('../assets/kujana/Francisco Arango/20171011_105519.jpg'),
        require('../assets/kujana/Francisco Arango/20171011_110736.jpg'),



        require('../assets/kujana/Guatiquía/FOTO 1-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 2-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 3-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 4-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 5-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 6-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 7-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 8-01.jpg'),
        require('../assets/kujana/Guatiquía/FOTO 9-01.jpg'),

        require('../assets/kujana/John F Kennedy/20171024_082449.jpg'),
        require('../assets/kujana/John F Kennedy/20171024_082511.jpg'),
        require('../assets/kujana/John F Kennedy/20171024_101307.jpg'),
        require('../assets/kujana/John F Kennedy/20171024_102920.jpg'),
        require('../assets/kujana/John F Kennedy/20171024_103951.jpg'),
        require('../assets/kujana/John F Kennedy/20171024_104004.jpg'),
        require('../assets/kujana/John F Kennedy/20171024_110655.jpg'),
        require('../assets/kujana/John F Kennedy/20171024_112059.jpg'),

        require('../assets/kujana/Juan Pablo II/20171027_092034.jpg'),
        require('../assets/kujana/Juan Pablo II/20171027_092429.jpg'),
        require('../assets/kujana/Juan Pablo II/20171027_092514.jpg'),
        require('../assets/kujana/Juan Pablo II/20171027_092603.jpg'),
        require('../assets/kujana/Juan Pablo II/20171027_092652.jpg'),
        require('../assets/kujana/Juan Pablo II/20171027_094916.jpg'),
        require('../assets/kujana/Juan Pablo II/20171027_095449.jpg'),
        require('../assets/kujana/Juan Pablo II/20171027_095517.jpg'),
        require('../assets/kujana/Juan Pablo II/P_20171027_091913_1_p.jpg'),
        require('../assets/kujana/Juan Pablo II/P_20171027_092207_1_p.jpg'),
        require('../assets/kujana/Juan Pablo II/P_20171027_092822_1_p.jpg'),
        require('../assets/kujana/Juan Pablo II/P_20171027_094830_1_p.jpg'),
        require('../assets/kujana/Juan Pablo II/P_20171027_102713_1_p.jpg'),


        require('../assets/kujana/La Salle/1.jpeg'),
        require('../assets/kujana/La Salle/2.jpeg'),
        require('../assets/kujana/La Salle/3.jpeg'),
        require('../assets/kujana/La Salle/4.jpeg'),
        require('../assets/kujana/La Salle/5.jpeg'),
        require('../assets/kujana/La Salle/6.jpeg'),
        require('../assets/kujana/La Salle/7.jpeg'),
        require('../assets/kujana/La Salle/8.jpeg'),
        require('../assets/kujana/La Salle/9.jpeg'),
        require('../assets/kujana/La Salle/10.jpeg'),
        require('../assets/kujana/La Salle/11.jpeg'),
        require('../assets/kujana/La Salle/12.jpeg'),
        require('../assets/kujana/La Salle/13.jpeg'),
        require('../assets/kujana/La Salle/14.jpeg'),
        require('../assets/kujana/La Salle/15.jpeg'),
        require('../assets/kujana/La Salle/16.jpeg'),
        require('../assets/kujana/La Salle/17.jpeg'),
        require('../assets/kujana/La Salle/18.jpeg'),
        require('../assets/kujana/La Salle/19.jpeg'),

        require('../assets/kujana/Liceo Mayor/20171103_112412.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_112420.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_112429.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_112527.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_112532.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_112542.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_112631.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_132241.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_132416.jpg'),
        require('../assets/kujana/Liceo Mayor/20171103_134736.jpg'),
        require('../assets/kujana/Liceo Mayor/20171107_093639.jpg'),
        require('../assets/kujana/Liceo Mayor/20171108_130208.jpg'),

        
        

        







        

      ]
    };
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
    onClick2(i) {
      this.index2 = i;
    }
  },
  computed: {
    filterData: function() {
      let noticia = this.noticias.map(dato => {
        if (dato.imagenes[0]) {
          let image = dato.imagenes[0].nombre_imagen;
          return `https://panel.fablabkujana.com/imagen_timeline/${image}`;
        }
      });
      return noticia;
    }
  }
};
</script>

<style scoped>
.content {
  margin-top: 30px;
  padding-top: 30px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgb(233, 233, 233);
}
.card {
  width: 210px;
  height: 110px;
  margin: 13px;
  margin-bottom: 15px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.5s ease;
  background-color: aliceblue;
  opacity: 0.9;
}

.card:hover .image {
  background-color: transparent;
  opacity: 0.3;
}
.card:hover .middle {
  opacity: 1;
}
.image {
  width: 100%;
  transition: 0.8s ease;
}
.text {
  background-color: #4a39dd;
  color: white;
  font-size: 20px;
  padding: 16px 32px;
}
.content-videos {
  height: auto;
  width: 100%;
}
.video {
  margin: 12px;
  width: 365px;
  height: 235px;
  margin-top: 40px;
  margin-bottom: 10px;
}

@media screen and (max-width: 500px) {
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
