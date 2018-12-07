<template>
  <div id="menuTop">
    <div class="logo">
      <router-link to="/">
        <img
          class="logo_meta"
          src="../assets/logo_kujana.png"
        />
      </router-link>
      <!-- <img class="logo_colombia" src="../assets/colombia.png" /> -->
    </div>
    <nav class="go_menu">
      <ul class="go_menu_list">
        <li
          class="go_menu_list_item"
          v-for="(item,index) in menuDefault"
          :key="`item${index}`"
        >
          <router-link :to="item.url">{{ item.titulo }}
            <i
              class="el-icon-caret-bottom"
              v-show="item.haveChildren"
            ></i>
          </router-link>
          <ul
            class="go_menu_sublist"
            v-if="item.haveChildren"
          >
            <li
              class="go_menu_list_item"
              v-for="(subitem,index) in item.children"
              :key="`subitem${index}`"
            >
              <router-link :to="subitem.url">{{ subitem.titulo }}
                <i
                  class="el-icon-caret-right"
                  v-show="subitem.haveChildren"
                ></i>
              </router-link>
              <ul
                class="go_menu_sublist"
                v-if="subitem.haveChildren"
              >
                <li
                  class="go_menu_list_item"
                  v-if="subitem.children"
                  v-for="(subitem2,index) in subitem.children"
                  :key="`subitem2${index}`"
                >
                  <router-link :to="subitem2.url">{{ subitem2.titulo }}</router-link>
                </li>
                <li
                  class="go_menu_list_item"
                  v-if="subitem.childrenDynamic"
                  v-for="(item,index) in filterMenu(subitem.id)"
                  :key="`item2${index}`"
                >
                  <router-link :to="`/micrositio/${item.id}`">{{ item.titulo }}</router-link>
                </li>
              </ul>
            </li>
            <li
              class="go_menu_list_item"
              v-if="item.childrenDynamic"
              v-for="(subitem,index) in filterMenu(item.id)"
              :key="`subitem1${index}`"
            >
              <router-link :to="`/micrositio/${subitem.id}`">{{ subitem.titulo }}</router-link>
            </li>
          </ul>
        </li>
        <li class="go_menu_list_item_link">
          <a
            href="https://www.facebook.com/FabLabKujana/"
            target="_blank"
          ><img
              src="../assets/social/facebook.png"
              width="25px"
            ></a>
        </li>
        <li class="go_menu_list_item_link">
          <a
            href="https://www.instagram.com/fablabkujana/"
            target="_blank"
          ><img
              src="../assets/social/Instagram.png"
              width="25px"
            ></a>
        </li>
        <li class="go_menu_list_item_link">
          <a
            href="https://twitter.com/FablabKujana"
            target="_blank"
          ><img
              src="../assets/social/twitter.png"
              width="25px"
              style="color: blue"
            ></a>
        </li>
        <li class="go_menu_list_item_link">
          <a
            href="https://www.youtube.com/channel/UC2049ju5b7Iy_P2lKLt8Fvg"
            target="_blank"
          ><img
              src="../assets/social/youtube.png"
              width="25px"
            ></a>
        </li>
      </ul>

    </nav>

    <div>

      <transition name="el-zoom-in-top">
        <div
          v-show="transition"
          class="menuresponsive"
        >
          <el-menu
            default-active="2"
            class="el-menu-vertical"
            v-show="transition"
          >
            <template v-for="(item, index) in menuDefault">
              <el-menu-item
                v-if="!item.haveChildren"
                :index="index.toString()"
              >
                <router-link :to="item.url">{{ item.titulo }}</router-link>
              </el-menu-item>
              <el-submenu
                v-else
                :index="index.toString()"
              >
                <span slot="title">
                  </i>{{ item.titulo }}</span>
                <template v-for="(item2, index2) in item.children">
                  <el-menu-item
                    v-if="!item2.haveChildren"
                    :index="`${index}-${index2}`"
                  >
                    <router-link :to="item2.url">{{ item2.titulo }}</router-link>
                  </el-menu-item>
                  <el-submenu
                    v-else
                    :index="`${index}-${index2}`"
                  >
                    <span slot="title">{{ item2.titulo }}</span>
                    <el-menu-item
                      v-for="(item3, index3) in item2.children"
                      :index="`${index}-${index2}-${index3}`"
                    >{{ item3.titulo }}</el-menu-item>
                    <el-menu-item
                      v-if="item2.childrenDynamic"
                      v-for="(item3, index3) in filterMenu(item2.id)"
                      :index="`${index}-${index2}-${index3}`"
                    >
                      <router-link to="/contacto">{{ item3.titulo }}</router-link>
                    </el-menu-item>
                  </el-submenu>
                </template>
                <el-menu-item
                  v-if="item.childrenDynamic"
                  v-for="(item2, index2) in filterMenu(item.id)"
                  :index="`${index}-${index2}`"
                >
                  <router-link :to="item2.url">{{ item2.titulo }}</router-link>
                </el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </div>
      </transition>

    </div>

    <!-- <transition name="el-fade-in-linear">
<div class="fondo_transition" v-show="transition"></div>
</transition> -->

    <transition name="fade">
      <el-button
        class="icon2"
        @click="transition = !transition"
      >&#9776; Menu</el-button>
    </transition>

    <!-- <img class="search_icon" src="../assets/search.png" height="20px"/> -->

  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("https://panel.fablabkujana.com/api/micrositio/listado")
      .then(response => {
        this.menuDynamic = response.data.data;
      });
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      transition: false,
      menuDefault: [
        {
          titulo: "Inicio",
          haveChildren: false,
          childrenDynamic: false,
          url: "/"
        },
        {
          id: "1",
          titulo: "Quiénes somos",
          haveChildren: false,
          childrenDynamic: false,
          url: "/about"
        },
        {
          id: "2",
          titulo: "Experiencia",
          haveChildren: true,
          childrenDynamic: false,
          url: "/",
          children: [
            {
              titulo: "Kujana - Pueblito llanero",
              haveChildren: false,
              childrenDynamic: false,
              url: "/pueblito"
            },
            {
              titulo: "Kujana - Itinerante",
              haveChildren: false,
              childrenDynamic: false,
              url: "/itinerante"
            }
          ]
        },
        {
          id: "3",
          titulo: "Noticias",
          haveChildren: true,
          childrenDynamic: true,
          url: "/prensa",
          children: [
            {
              titulo: "Regístrate a noticias",
              haveChildren: false,
              childrenDynamic: false,
              url: "/formulario"
            }
          ]
        },
        {
          id: "4",
          titulo: "Contáctanos",
          haveChildren: false,
          childrenDynamic: false,
          url: "/contacto"
        }
      ],
      menuDynamic: []
    };
  },
  watch: {
    $route(to, from) {
      this.transition = false;
    }
  },
  methods: {
    filterMenu(parameterMenu) {
      return this.menuDynamic.filter(item => item.menu == parameterMenu);
    }
  }
};
</script>

<style scoped>
#menuTop {
  width: 100%;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 111;
}
.go_menu * {
  list-style: none;
  color: #48576a;
  font-size: 16px;
}
.go_menu {
  margin: 0px 5px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
}
.go_menu_list {
  display: flex;
  align-items: flex-start;
}
.go_menu_list > .go_menu_list_item {
  border-bottom: 5px solid transparent;
}
.go_menu_list > .go_menu_list_item:hover {
  border-bottom: 5px solid #20a0ff;
}
.go_menu_list_item {
  position: relative;
  display: flex;
}
.go_menu_list_item a {
  padding: 20px 18px;
}

.go_menu_list {
  display: flex;
  align-items: center;
}
.go_menu_list > .go_menu_list_item {
  border-bottom: 5px solid transparent;
}
.go_menu_list > .go_menu_list_item:hover {
  border-bottom: 5px solid #20a0ff;
}
.go_menu_list_item {
  display: flex;
}
.go_menu_list_item a {
  padding: 20px 15px;
}
.go_menu_list_item_link {
  display: flex;
  margin-left: 20px;
  margin-top: -5px;
}
.go_menu_list_item_link a {
  padding: 20px 0px;
  padding-left: 5px;
}
.go_menu_list_item i {
  margin-left: 5px;
  font-size: 12px;
  color: #97a8be;
}
.go_menu_list_item:hover {
  background-color: #eef1f6;
}
.go_menu_sublist {
  position: absolute;
  top: calc(100% + 10px);
  left: 0px;
  width: 150%;
  background-color: #fff;
  border: 1px solid #d1dbe5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.go_menu_list_item > .go_menu_sublist {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.go_menu_list_item:hover > .go_menu_sublist {
  visibility: visible;
  opacity: 1;
}
.go_menu_sublist .go_menu_list_item a {
  padding: 15px 20px;
}
.go_menu_sublist .go_menu_list_item .go_menu_sublist {
  top: 0;
  left: calc(100% + 5px);
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.go_menu_sublist .go_menu_list_item:hover .go_menu_sublist {
  display: block;
  visibility: visible;
  opacity: 1;
}
.logo {
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  margin-left: 10px;
}
.logo_meta {
  height: 55px;
}
.logo_colombia {
  height: 64px;
}
.el-menu-demo {
  width: 800px;
  display: flex;
  justify-content: space-around;
}
.el-menu {
  background-color: white;
}
.topnav {
  display: none;
}
.icon {
  display: none;
}
.icon2 {
  display: none;
}
.menuresponsive {
  display: none;
}
@media screen and (max-width: 1000px) {
  .go_menu {
    display: none;
  }
  #menuTop {
    display: flex;
    justify-content: space-between;
  }
  .search_icon {
    display: none;
  }
  .topnav {
    display: flex;
  }
  .icon {
    display: flex;
    margin-right: 10px;
  }
  .icon2 {
    display: flex;
    z-index: 20;
  }
  a.icon {
    float: right;
    display: block;
    font-size: 28px;
    color: #008e3a;
  }
  .menuresponsive {
    z-index: 50;
    display: flex;
    margin-top: 50px;
    width: 100%;
    background-color: #e0e0e0;
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  .el-menu-vertical {
    width: 500px !important;
  }

  .el-menu-demo {
    display: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .logo_meta {
    height: 47px;
    margin-right: 9px;
  }
  .logo_colombia {
    height: 40px;
  }
}
</style>
