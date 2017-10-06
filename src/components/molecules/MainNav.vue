<template>
  <nav>

    <router-link :to="{name: 'Hello'}">Hello page</router-link>
    <router-link :to="{name: 'About'}">About</router-link>

    <!--<router-link v-if="isLoggedIn" :to="{name: 'Dashboard'}">Dashboard</router-link>-->
    <!--<a v-if="isLoggedIn" href="#" @click.prevent="handleLogout">Logout</a>-->

    <!--<a v-if="!isLoggedIn" href="#" @click.prevent="handleLogin">Login</a>-->
  </nav>
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex';

  export default {
    name: 'mainNav',
    computed: {
      ...mapGetters({
//        isLoggedIn: 'isLogged',
      }),
    },
    methods: {
    },
  };
</script>
