<template>
  <el-carousel
    :interval="9000"
    arrow="always"
    indicator-position="outside"
  >
    <el-carousel-item>
      <a
        class="container"
        href="/formulario"
      >
        <img
          src="../assets/banner-tablet.jpg"
          class="image"
        />
        <div class="middle">
          <div class="text">Regístrate gratis !</div>
        </div>
      </a>
    </el-carousel-item>
    <!-- <el-carousel-item>
      <a class="banner-url">
        <img src="../assets/banners/b1.png" />
      </a>
    </el-carousel-item>
    <el-carousel-item>
      <a class="banner-url">
        <img src="../assets/banners/b2.png" />
      </a>
    </el-carousel-item> -->

    <!-- <el-carousel-item v-for="item in items">
      <a :href="item.url" class="banner-url">
        <img :src="`https://intranet.meta.gov.co/imagen_banners/${item.imagen}`">
      </a>
    </el-carousel-item> -->

  </el-carousel>
</template>

<script>
import axios from "axios";
export default {
  name: "bannerTop",
  data() {
    return {
      items: [],
      errors: []
    };
  }
};
</script>

<style >
.el-carousel__item img {
  width: 100%;
  background-color: white;
}
.el-carousel__item {
  background-color: white;
}
.el-carousel__container {
  height: 550px !important;
  background-color: white;
}
.banner-url img {
  transition: all 500ms ease-in-out;
}
.banner-url img:hover {
  filter: saturate(1.5);
  transform: scale(1.05);
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.container {
  cursor: pointer;
}
.container:hover .image {
  background-color: aliceblue;
  opacity: 0.6;
}
.container:hover .middle {
  opacity: 1;
}
.text {
  background-color: #4a39dd;
  color: white;
  font-size: 20px;
  padding: 16px 32px;
}
@media screen and (max-width: 1100px) {
  .el-carousel__container {
    height: 300px !important;
  }
}
@media screen and (max-width: 500px) {
  .el-carousel__container {
    height: 125px !important;
    margin-bottom: 0px;
  }
}
</style>
