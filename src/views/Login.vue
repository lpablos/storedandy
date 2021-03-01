<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="2" sm="4">
        <v-card class="pa-2 " outlined tile elevation="10">
          <login-form @infoLogin="registra" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";
import { mapActions } from "vuex";
export default {
  name: "Login",
  // data() {
  //   return {
  //     form: {
  //       email: "lpablo@hotmail.com",
  //       key: "",
  //       valid: true
  //     }
  //   };
  // },
  methods: {
    registra(form) {
      this.logeame(form);
    },
    ...mapActions({
      logeame: "login/logeo"
    })
  },
  components: {
    LoginForm
  }
};
</script>
