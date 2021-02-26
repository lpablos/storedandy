<template>
  <v-app id="inspire">
    <main-menu-admin />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <vertical-menu-admin />
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <h4>Todo contenido aqui</h4>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainMenuAdmin from "@/components/menus/MainMenuAdmin.vue";
import VerticalMenuAdmin from "@/components/menus/VerticalMenuAdmin.vue";
export default {
  name: "Admin",
  components: {
    MainMenuAdmin,
    VerticalMenuAdmin
  }
};
</script>
