<template>
  <div class="text-center">
    <v-dialog :persistent="true" v-model="dialog" width="500">
      <v-card  elevation="24" max-width="500" class="mx-auto">
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-card-text>
            <div class="my-4 subtitle-1">
              $ 15.00 MXN
            </div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with.
              <v-divider class="mx-1"></v-divider>
            </div>
            <v-card-actions class="justify-center">
              <v-btn color="primary" text @click="closeDialog()">
                Agregar
              </v-btn>
              <v-btn color="primary" text @click="closeDialog()">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1'
      ],
      cycle: false,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ],
    }
  },
  props: {
    dialog: {
      default: false
    }
  },
  methods: {
    closeDialog(){
      this.$emit("dialog-close", false);
    }
  }
}
</script>
