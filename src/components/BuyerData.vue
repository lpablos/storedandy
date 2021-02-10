<template>
  <v-form v-model="valid" ref="form" @submit="submited">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="15"
            label="Nombre"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="phoneNumber"
            type="number"
            :counter="10"
            label="Numero contacto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo electronico"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select :items="puntosEntrega" label="Punto de entrega"></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="referencia"
            :rules="nameRules"
            label="Referencia breve"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select :items="horaEntrega" label="Horario entregas"></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BuyerData",
  data() {
    return {
      valid: false,
      name: "",
      phoneNumber: "",
      email: "",
      referencia: "",
      tikecVenta: "$130",
      puntosEntrega: [
        "Plaza Americas",
        "Plaza Animas",
        "Plaza Museo",
        "Plaza Cristal"
      ],
      isDisabled: true,
      horaEntrega: ["17:00 hrs", "18:00 hrs", "19:00 hrs", "20:00 hrs"],
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 15 || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  props: ["expedicion"],
  watch: {
    expedicion() {
      this.addOrder();
    }
  },
  methods: {
    addOrder() {
      alert("Llamadas al fomulario para enviarlo");
      this.$refs.form.$el.submit();
    },
    submited(event) {
      event.preventDefault();
      alert("Intento de envio de formulario");
    }
  },
  computed: {
    ...mapGetters({ venta: "cart/getTotalCart" })
  }
};
</script>
