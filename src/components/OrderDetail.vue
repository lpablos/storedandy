<template>
  <v-btn class="mx-2" fab dark small color="pink" v-on:click="dialog = true">
    <i class="fas fa-shopping-cart"></i>
    <detail-car :show="dialog" />
  </v-btn>
</template>
<script>
import DetailCar from "./dialogs/DetailCar.vue";
export default {
  name: "OrderDetail",
  data() {
    return {
      dialog: false
    }
  },
  components: {
    DetailCar
  }
};
</script>
