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
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
            <v-divider class="mx-1"></v-divider>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Ver detalles
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined :loading="loading" class="mx-auto my-3" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate>
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
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
            <v-divider class="mx-1"></v-divider>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Ver detalles
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined :loading="loading" class="mx-auto my-3" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate>
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
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
            <v-divider class="mx-1"></v-divider>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Ver detalles
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined :loading="loading" class="mx-auto my-3" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate>
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
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
            <v-divider class="mx-1"></v-divider>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Ver detalles
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined :loading="loading" class="mx-auto my-3" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate>
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
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
            <v-divider class="mx-1"></v-divider>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Ver detalles
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined :loading="loading" class="mx-auto my-3" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate>
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
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
            <v-divider class="mx-1"></v-divider>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Ver detalles
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    items: 3
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
