<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.name"
            :rules="nameRules"
            :counter="15"
            label="Nombre"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.phoneNumber"
            type="number"
            :counter="10"
            label="Numero contacto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.email"
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
            v-model="form.referencia"
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BuyerData",
  data() {
    return {
      valid: false,
      form: {
        name: "Luis Jorge",
        phoneNumber: "2281060593",
        email: "lpablo@hotmail.com",
        referencia: "La Dauzon"
      },
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
    ...mapActions({ addItemsOrder: "pedidos/addOrder"}),
    addOrder() {
      alert("Llamadas al fomulario para enviarlo");
      this.addItemsOrder();
    }
  },
  computed: {
    ...mapGetters({ venta: "cart/getTotalCart" })
  }
};
</script>
