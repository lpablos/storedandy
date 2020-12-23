<template>
  <v-app>
    <main-menu />
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from "./components/menus/MainMenu.vue";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
    MainMenu
  },

  data: () => ({
    //
  })
};
</script>
