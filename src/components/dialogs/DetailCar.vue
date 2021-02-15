<template>
  <div class="text-center">
    <v-dialog v-model="show" width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Carrito de pedido
        </v-card-title>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Mi pedido
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Contacto y entrega
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Confirmación
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" height="300px">
                <items-cart />
              </v-card>
              <!-- <v-divider></v-divider> -->
              <v-row align="center" justify="space-around">
                <v-btn text color="primary" @click="e1 = 2">
                  Continuar
                </v-btn>

                <v-btn text class="float-right">
                  Cerrar
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" height="300px">
                <buyer-data :expedicion="encargo" />
              </v-card>
              <!-- <v-divider></v-divider> -->
              <v-row align="center" justify="space-around">
                <v-btn text color="primary" @click="actionSend">
                  Continuar
                </v-btn>
                <v-btn text color="primary" @click="e1 = 1">
                  volver
                </v-btn>
                <v-btn text class="float-right">
                  Cerrar
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1" height="300px">
                <pay-order />
              </v-card>
              <v-divider></v-divider>
              <v-btn color="primary" @click="e1 = 1">
                Finalizar
              </v-btn>

              <v-btn text class="float-right">
                Cerrar
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import ItemsCart from "../ItemsCart.vue";
import BuyerData from "../BuyerData.vue";
import PayOrder from "../PayOrder.vue";
export default {
  name: "DetailCar",
  data() {
    return {
      e1: 1,
      encargo: false
    };
  },
  props: {
    show: {
      default: true,
      e1: 2
    }
  },
  methods: {
    actionSend() {
      this.e1 = 3;
      this.encargo = true;
    }
  },
  components: {
    ItemsCart,
    BuyerData,
    PayOrder
  }
};
</script>
