<template>
  <div class="home">
    <v-template>
      <div slot="main">
        <h1>Todos page</h1>
        <v-todos></v-todos>
        <v-todos></v-todos>
        <v-todos></v-todos>
      </div>
    </v-template>
  </div>
</template>

<script type="text/babel">
  import Template from '@/components/templates/Fullpage';
  import Todos from '@/components/organisms/Todos';

  export default {
    name: 'todos-page',
    data() {
      return {
      };
    },
    components: {
      'v-template': Template,
      'v-todos': Todos,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
