<template>
  <v-card class="mb-12" height="200px">
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Producto</th>
            <th class="text-left">Cantidad</th>
            <th class="text-left">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itemsCart" :key="item.id">
            <td>{{ item.product }}</td>
            <td>{{ item.cantidad }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>$ {{ totalItems }} MXN</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ItemsCart",
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapState({ itemsCart: state => state.cart.cart }),
    ...mapGetters({ totalItems: "cart/getTotalCart" })
  }
};
</script>