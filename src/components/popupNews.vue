<template>

  <transition name="fade">
    <div
      class="pop-up"
      v-show="imagen"
    >
      <div class="
      pop-up-image">
        <img src="https://assets.materialup.com/uploads/66ad59af-c67d-4e74-9d03-d37d0bf49ede/attachment.png">
      </div>

      <br>
      <el-button v-on:click="visiblePopUp">Continuar</el-button>
    </div>
  </transition>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imagen: true
    };
  },
  methods: {
    visiblePopUp() {
      this.imagen = false;
    }
  }
};
</script>

<style lang="css" scoped>
.pop-up {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 47, 61, 0.9);
  position: fixed;
  z-index: 9999;
  padding: 20px;
  margin: auto;
}

.pop-up-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pop-up-image img {
  max-height: 80vh;
  max-width: 60%;
}

.pop-up-video iframe {
  height: 500px;
  width: 750px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 750px) {
  .pop-up img {
    width: 100%;
    height: auto;
    padding: 5px;
  }
  .pop-up-video iframe {
    height: 260px;
    width: 380px;
  }
}
</style>