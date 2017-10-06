<template>
  <div id="login">
    <div id="firebaseui-auth-container"></div>
    <form action="" @submit.prevent="handleLogin">
      <input type="text" v-model="email">
      <input type="password" v-model="password">
      <button type="submit" :disabled="formDisabled">Connection</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: {
      formDisabled() {
        return this.email === '' || this.password === '';
      },
    },
    methods: {
      ...mapActions({
        login: 'login',
      }),
      handleLogin() {
        if (this.formDisabled === false) {
          this.login({
            email: this.email,
            password: this.password,
          });
        }
      },
    },
  };
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
