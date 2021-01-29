<template>
  <div class="text-center">
    <v-dialog transition="dialog-bottom-transition" :persistent="true" v-model="dialog" width="500">
      <v-card class="mx-auto" max-width="500" v-if="detail">
        <span v-show="Object.keys(detail.images).length > 0">
          <v-carousel height="300">
            <v-carousel-item
              v-for="(item, i) in detail.images"
              :key="i"
              :src="item.image"
              reverse-transition="fade-transition"
              transition="fade-transition"
              height="300"
            ></v-carousel-item>
          </v-carousel>
        </span>
        <v-card-title>
          {{ detail.name }}
        </v-card-title>
        <v-card-text>
          <div class="my-4 subtitle-1">
            {{ detail.precio }}
          </div>
          <div>
            Modelo {{ detail.name }} marca {{ detail.marca }} color {{ detail.color }}
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
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ asocImages: "products/imagenes" }),
    detail: function() {
      return this.asocImages(this.identy);
    }
  },
  props: {
    dialog: {
      default: false
    },
    identy: null
  },
  methods: {
    closeDialog() {
      this.$emit("dialog-close", false);
    },
    ...mapActions({ moreInf: "products/loadImagesItem" })
  },
  watch: {
    identy: function(identy) {
      this.moreInf(identy);
    }
  }
};
</script>
