<template>
  <v-row no-gutters>
    <div v-for="(location, idx) in listado" :key="idx">
      <pre>
        <h1>{{ idx }}</h1>

      </pre>
    </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
            Small plates, salads & sandwiches - an intimate setting with.
            <v-divider class="mx-1"></v-divider>
          </div>
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
import firebase from "../firestoreConfig";
const db = firebase.firestore();

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
    async getAccesiorosAll() {
      let products = [];
      try {
        this.listado = await db.collection("accesorios")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              products.push({
                id: doc.id,
                name: doc.data().nombre || "Sin informacion",
                color: doc.data().color || "Sin informacion",
                marca: doc.data().marca || "Sin informacion",
                precio: doc.data().precio || "Sin informacion",
                status: doc.data().status || "Sin informacion",
                promocion: doc.data().promocion || "Sin informacion"
              });
            });
          });
        // console.log(this.listado);
      } catch (e) {
        console.log("Existio un problema");
      }
      console.log("Estos son todos los objectos que esty trayendo ",products);
    }
  },
  components: {
    DetailItem
  }
};
</script>
