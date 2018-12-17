import Vue from "vue";
import Router from "vue-router";
import Inicio from "@/components/_inicio";
import Meta from "@/components/_meta";
import Galeria from "@/components/_galeria";
import Prensa from "@/components/_prensa";
import Transparencia from "@/components/_transparencia";
import Soporte from "@/components/_soporte";
import Ayuda from "@/components/_ayuda";
import Sitemap from "@/components/_sitemap";
import Privacidad from "@/components/_privacidad";
import Condiciones from "@/components/_condiciones";
import Contacto from "@/components/_contacto";
import About from "@/components/_about";
import Pueblito from "@/components/_pueblito";
import Itinerante from "@/components/_itinerante";
import Micrositio from "@/components/_micrositio";
import Documentacion from "@/components/_centroDocumentacion";
import Redirect from "@/components/_redirect";
import NoticiaDetalle from "@/components/_noticiaDetalle";
import Buscador from "@/components/_buscador";
import Formulario from "@/components/_formulario";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio
    },
    {
      path: "/transparencia",
      name: "transparencia",
      component: Transparencia
    },
    {
      path: "/meta",
      name: "meta",
      component: Meta
    },

    {
      path: "/galeria",
      name: "galeria",
      component: Galeria
    },
    {
      path: "/prensa",
      name: "prensa",
      component: Prensa
    },
    {
      path: "/buscador",
      name: "buscador",
      component: Buscador
    },
    {
      path: "/noticia/:id",
      name: "noticia",
      component: NoticiaDetalle
    },
    {
      path: "/privacidad",
      name: "privacidad",
      component: Privacidad
    },
    {
      path: "/condiciones",
      name: "condiciones",
      component: Condiciones
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto
    },
    {
      path: "/ayuda",
      name: "ayuda",
      component: Ayuda
    },
    {
      path: "/soporte",
      name: "soporte",
      component: Soporte
    },
    {
      path: "/sitemap",
      name: "sitemap",
      component: Sitemap
    },
    {
      path: "/documentacion",
      name: "documentacion",
      component: Documentacion
    },
    {
      path: "/formulario",
      name: "formulario",
      component: Formulario
    },
    {
      path: "/itinerante",
      name: "itinerante",
      component: Itinerante
    },
    {
      path: "/pueblito",
      name: "pueblito",
      component: Pueblito
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/micrositio/:id",
      name: "micrositio",
      component: Micrositio
    },
    {
      path: "/redirect",
      name: "redirect",
      component: Redirect
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
