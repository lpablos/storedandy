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
          <v-select
            v-model="form.citio"
            :items="citios"
            item-text="citio"
            item-value="id"
            label="Citio de entreha"
            persistent-hint
            return-object
            single-line
          ></v-select>
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
          <v-select
            v-model="form.horario"
            :items="horarios"
            item-text="horario"
            item-value="id"
            label="Horario de entrega"
            persistent-hint
            return-object
            single-line
          ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.date"
                label="Fecha de entrega"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancelar
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                Selecionar
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "BuyerData",
  data() {
    return {
      valid: false,
      form: {
        name: "Luis Jorge",
        phoneNumber: "2281060593",
        email: "lpablo@hotmail.com",
        referencia: "La Dauzon",
        horario: null,
        citio: null,
        date: new Date().toISOString().substr(0, 10)
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
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    };
  },
  props: ["expedicion"],
  watch: {
    expedicion() {
      this.addOrder();
    }
  },
  created: function(){
    this.getSchedules();
    this.getDeliveryPoints();
  },
  methods: {
    ...mapActions({
      addItemsOrder: "pedidos/addOrder",
      getSchedules: "pedidos/getSchedules",
      getDeliveryPoints: "pedidos/getDeliveryPoints"
    }),
    addOrder() {
      this.addItemsOrder({
        activo: true,
        status: "Para entrega",
        contacto: this.form,
        pedido: this.pedido,
        total: this.totalItems
      });
    }
  },
  computed: {
    ...mapState({
      pedido: state => state.cart.cart,
      horarios: state => state.pedidos.horarios,
      citios: state => state.pedidos.citios
    }),
    ...mapGetters({ totalItems: "cart/getTotalCart" })
  }
};
</script>
