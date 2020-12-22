<template>
  <div>
    <slider-banner />
    <v-container>
      <v-row><p>Hola</p></v-row>
    </v-container>
  </div>
</template>

<script>
import SliderBanner from "@/components/SliderBanner"

export default {
  name: "HelloWorld",
  components: {
    SliderBanner
  }
};
</script>
