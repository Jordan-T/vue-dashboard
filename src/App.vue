<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/organisms/Header';

  export default {
    name: 'app',
    components: {
      'main-header': Header,
    },
  };
</script>

<style src="semantic-ui-css/semantic.css"></style>
