<template>
  <v-btn @click="closeSession()">Cerrar Sessión</v-btn>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "../../router/index";
export default {
  name: "LogOut",
  methods: {
    ...mapActions({
      closeSession: "login/logOut"
    })
  },
  computed: {
    ...mapGetters({
      loginStatus: "login/getUser"
    })
  },
  watch: {
    loginStatus: value => {
      if (!value) {
        router.replace({ name: "Login" });
      }
    }
  }
};
</script>
