<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="2" sm="4">
        <v-card class="pa-2 " outlined tile elevation="10">
          <login-form :email="form.email" :key="form.key" :valid="form.valid" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "lpablo@hotmail.com",
        key: "",
        valid: true
      }
    };
  },
  components: {
    LoginForm
  }
};
</script>
