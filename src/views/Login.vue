<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="2" sm="4">
        <v-card class="pa-2 " outlined tile>
          <login-form />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>
