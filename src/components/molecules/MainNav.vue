<template>
  <ul class="menu">
    <router-link tag="li" v-for="(navItem, index) in navItems" :key="index" :to="navItem.route" activeClass="is-active">
      <a>
        <i v-if="navItem.icon" :class="navItem.icon"></i>
        <span>{{ navItem.text }}</span>
      </a>
    </router-link>

    <!--<router-link v-if="isLoggedIn" :to="{name: 'Dashboard'}">Dashboard</router-link>-->
    <!--<a v-if="isLoggedIn" href="#" @click.prevent="handleLogout">Logout</a>-->

    <!--<a v-if="!isLoggedIn" href="#" @click.prevent="handleLogin">Login</a>-->
  </ul>
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex';

  export default {
    name: 'mainNav',
    props: {
      navItems: {
        type: Array,
        required: true,
      },
    },
    computed: {
      ...mapGetters({
//        isLoggedIn: 'isLogged',
      }),
    },
    methods: {
    },
  };
</script>
