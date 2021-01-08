<template>
  <v-row no-gutters>
    <v-col v-for="(product) in productos" :key="product.id">
      <v-card outlined :loading="loading" class="mx-auto my-3" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="9" indeterminate>
          </v-progress-linear>
        </template>
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
        <v-card-title>{{product.name}} - {{ product.precio }}</v-card-title>
        <v-card-text>
          <div>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Propiedad
                    </th>
                    <th class="text-left">
                      Descripción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>{{ product.color }}</td>
                  </tr>
                  <tr>
                    <td>Marca</td>
                    <td>{{ product.marca }}</td>
                  </tr>
                  <tr>
                    <td>Promocion</td>
                    <td>{{ product.promocion }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <v-divider class="mx-2"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn color="deep-purple lighten-2" text @click="showDetialInfo">
              <i class="fas fa-search-plus"></i> Detalle
            </v-btn>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              <i class="fas fa-cart-plus"></i> Agregar
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>

    <detail-item :dialog="showDetial" @dialog-close="dialogClose" />
  </v-row>
</template>
<script>
import DetailItem from "@/components/dialogs/DetailItem.vue";
import { mapState } from "vuex";

export default {
  data: () => ({
    loading: false,
    selection: 1,
    items: 3,
    showDetial: false,
    listado: null
  }),
  created: function() {
    this.getAccesiorosAll();
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    showDetialInfo() {
      this.reserve();
      this.showDetial = true;
    },
    dialogClose(e) {
      this.showDetial = e;
    },
    getAccesiorosAll() {
      try {
        this.$store.dispatch("products/load");
      } catch (e) {
        console.log("Hay un error", e);
      }
    }
  },
  computed: {
    ...mapState({
      productos: (state) => state.products.productos
    }),
    totalProductos() {
      return this.productos.lenght || "0";
    }
  },
  components: {
    DetailItem
  }
};
</script>
