<template>
  <div>
    <slider-banner />
    <v-container>
      <v-row>
        <product-small />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SliderBanner from "@/components/SliderBanner.vue";
import ProductSmall from "@/components/ProductSmall.vue";

export default {
  name: "HelloWorld",
  components: {
    SliderBanner,
    ProductSmall
  }
};
</script>
