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
import { mapGetters, mapActions } from "vuex";
import router from "../router/index";

export default {
  name: "Login",
  methods: {
    registra(form) {
      this.session(form);
    },
    ...mapActions({
      session: "login/fetchUser"
    })
  },
  computed: {
    ...mapGetters({
      loginStatus: "login/loginStatus"
    })
  },
  watch: {
    loginStatus: value => {
      value
        ? router.replace({ name: "Admin" })
        : router.replace({ name: "Login" });
    }
  },
  components: {
    LoginForm
  }
};
</script>
