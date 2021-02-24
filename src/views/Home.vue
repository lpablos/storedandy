<template>
  <div>
    <main-menu />
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MainMenu from "@/components/menus/MainMenu.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MainMenu
  }
};
</script>
