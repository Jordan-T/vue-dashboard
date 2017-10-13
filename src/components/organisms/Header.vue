<template>
  <header  class="top-bar">
    <div class="top-bar-left">
      <ul class="menu" data-dropdown-menu>
        <router-link tag="li" class="" :to="{name: 'Home'}" activeClass="is-active" exact>
          <a>
            <img src="//placehold.it/50x30" alt=""> <span>Home page</span>
          </a>
        </router-link>
      </ul>
    </div>
    <div class="top-bar-right">
      <main-nav :navItems="navItems"></main-nav>
    </div>
  </header>
</template>

<script type="text/babel">
  import MainNav from '@/components/molecules/MainNav';

  export default {
    name: 'header',
    data() {
      return {
        navItems: [
          {
            text: 'Hello page',
            icon: false,
            route: {
              name: 'Hello',
            },
          },
          {
            text: 'About',
            icon: false,
            route: {
              name: 'About',
            },
          },
          {
            text: 'Todos',
            icon: 'fi-list-bullet',
            route: {
              name: 'Todos',
            },
          },
        ],
      };
    },
    components: {
      'main-nav': MainNav,
    },
  };
</script>
