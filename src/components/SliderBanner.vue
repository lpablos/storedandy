<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in banners"
      :key="i"
      :src="item.image"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SliderBanner",
  created: function() {
    this.getBannersAll();
  },
  computed: {
    ...mapState({
      banners: (state) => state.banners.banners
    })
  },
  methods: {
    getBannersAll() {
      try {
        this.$store.dispatch("banners/load");
      } catch {
        console.log("Algo aqui");
      }
    }
  }
}
</script>
