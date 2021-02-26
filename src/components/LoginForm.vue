<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card-title>
      <span class="title font-weight justify-center">Danndy Store</span>
    </v-card-title>
    <v-card-text class="headline">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="key"
        type="password"
        :counter="10"
        label="Contraseña"
        required
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green" dark depressed>
        Iniciar Sessión
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]
  }),
  props: ["email", "key", "valid"],
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
};
</script>
