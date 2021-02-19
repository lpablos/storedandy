<template>
  <v-btn class="mx-2" fab dark small color="pink" v-on:click="dialog = true">
    <i class="fas fa-shopping-cart"></i> {{ bagItems }}
    <detail-car :show="dialog" @closeDetailCart="closeDetailCart()" />
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
  components: {
    DetailCar
  },
  methods: {
    closeDetailCart(){
      this.dialog = false;
    }
  }
};
</script>
