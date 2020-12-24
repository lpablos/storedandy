<template>
  <div class="text-center">
    <v-dialog v-model="show" width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Mi pedido
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Mis datos
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Confirmación
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" color="grey lighten-1" height="200px">
              </v-card>
              <v-divider></v-divider>
              <v-btn color="primary" @click="e1 = 2">
                Continuar
              </v-btn>

              <v-btn text class="float-right">
                Cerrar
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" color="grey lighten-1" height="200px">
              </v-card>
              <v-divider></v-divider>
              <v-btn color="primary" @click="e1 = 3">
                Confirmar
              </v-btn>

              <v-btn text class="float-right">
                Cerrar
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1" height="200px">
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
export default {
  name: "DetailCar",
  data() {
    return {
      e1: 1
    }
  },
  props: {
    show: {
      default: true,
      e1: 2
    }
  }
};
</script>
