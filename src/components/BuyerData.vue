<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="15"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="phoneNumber"
            type="number"
            :counter="10"
            :rules="numerRules"
            label="Numero contacto"
            required
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
            label="Referencia del lugar a convenir"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select :items="horaEntrega" label="Horario disponible"></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="tikecVenta"
            :rules="nameRules"
            :counter="15"
            label="Total a pagar"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "BuyerData",
  data: () => ({
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
    horaEntrega: ["17:00 hrs", "18:00 hrs", "19:00 hrs", "20:00 hrs"],
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 15 || "Name must be less than 10 characters"
    ],
    numerRules: {
      required: true,
      digits: 10,
      regex: "^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$"
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>
