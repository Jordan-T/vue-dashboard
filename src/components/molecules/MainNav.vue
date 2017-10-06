<template>
  <nav class="right floated">

    <router-link :to="{name: 'Hello'}" class="item">Hello page</router-link>

    <router-link v-if="isLoggedIn" :to="{name: 'Dashboard'}" class="item">Dashboard</router-link>
    <a v-if="isLoggedIn" class="item" href="#" @click.prevent="handleLogout">Logout</a>

    <a v-if="!isLoggedIn" href="#" class="item" @click.prevent="handleLogin">Login</a>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { gotoLogin, logout } from '@/utils/auth';

  export default {
    name: 'mainNav',
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLogged',
      }),
    },
    methods: {
      handleLogin() {
        gotoLogin();
      },
      handleLogout() {
        logout();
      },
    },
  };
</script>
