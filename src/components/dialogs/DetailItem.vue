<template>
  <div class="text-center">
    <v-dialog transition="dialog-bottom-transition" :persistent="true" v-model="dialog" width="500">
      <v-card class="mx-auto" max-width="500">
        <v-carousel height="300">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            height="300"
          ></v-carousel-item>
        </v-carousel>
        <v-card-title>
          Cafe Badilico
        </v-card-title>
        <v-card-text>
          <div class="my-4 subtitle-1">
            $15.00 MXN
          </div>
          <div>
            Small plates salads & sandwiches an intimate setting with seats plus patio seating
          </div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="justify-center">
          <v-btn color="primary" text @click="closeDialog()">
            Agregar
          </v-btn>
          <v-btn color="primary" text @click="closeDialog()">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    }
  },
  props: {
    dialog: {
      default: false
    }
  },
  methods: {
    closeDialog(){
      this.$emit("dialog-close", false);
    }
  }
};
</script>
