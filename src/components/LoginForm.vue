<template>
  <v-form
    ref="form"
    @submit.prevent="loginInfo"
    v-model="form.valid"
    lazy-validation
  >
    <v-card-title>
      <span class="title font-weight justify-center">Danndy Store</span>
    </v-card-title>
    <v-card-text class="headline">
      <v-text-field
        v-model="form.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.key"
        type="password"
        :counter="10"
        label="Contraseña"
        required
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green" dark depressed type="submit">
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
    ],
    form: {
      email: "",
      key: "",
      valid: true
    }
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    loginInfo() {
      this.$emit("infoLogin", this.form);
    }
  }
};
</script>
