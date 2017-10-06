<template>
  <header>
    <div>
      <router-link :to="{name: 'Home'}">
        <img src="//placehold.it/50x50" alt=""> Go to home
      </router-link>

      <main-nav></main-nav>
    </div>
  </header>
</template>

<script type="text/babel">
  import MainNav from '@/components/molecules/MainNav';

  export default {
    name: 'header',
    components: {
      'main-nav': MainNav,
    },
  };
</script>
