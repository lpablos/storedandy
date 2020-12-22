<template>
  <v-row no-gutters>
    <v-col>
      <v-card outlined :loading="loading" class="mx-auto my-3" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="9" indeterminate>
          </v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Cafe Badilico</v-card-title>
        <v-card-text>
          <div class="my-4 subtitle-1">
            $ 15.00 MXN
          </div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
          <v-card-actions class="justify-center">
            <v-btn color="deep-purple lighten-2" text @click="showDetialInfo">
              <span class="settings_overscan">Detalle</span>
            </v-btn>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              <span class="add_shopping_cart">Agregar</span>
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
    <detail-item :dialog="showDetial" />
  </v-row>
</template>
<script>
import DetailItem from "@/components/dialogs/DetailItem.vue";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    items: 3,
    showDetial: false
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    showDetialInfo(){
      this.showDetial = true;
    }
  },
  components: {
    DetailItem
  }
};
</script>
