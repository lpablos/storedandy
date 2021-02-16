<template>
  <v-btn class="mx-2" fab dark small color="pink" v-on:click="dialog = true">
    <i class="fas fa-shopping-cart"></i> {{ bagItems }}
    <detail-car :show="dialog" @closeDetailCart="closeDetailCartModal" />
  </v-btn>
</template>
<script>
import DetailCar from "./dialogs/DetailCar.vue";
import { mapGetters } from "vuex";
export default {
  name: "OrderDetail",
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters({ bagItems: "cart/getItemsCart" })
  },
  methods: {
    closeDetailCartModal(valor) {
      this.dialog = valor;
    }
  },
  components: {
    DetailCar
  }
};
</script>
