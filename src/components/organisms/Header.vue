<template>
  <header class="ui borderless main menu">
    <div class="ui text container">
      <router-link :to="{name: 'Home'}" class="header item">
        <img src="//placehold.it/50x50" alt=""> Go to home
      </router-link>

      <main-nav></main-nav>
    </div>
  </header>
</template>

<script>
  import MainNav from '@/components/molecules/MainNav';

  export default {
    name: 'header',
    components: {
      'main-nav': MainNav,
    },
  };
</script>
