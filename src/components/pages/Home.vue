<template>
  <div class="home">
    <v-template>
      <div slot="main">
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus dolore enim id in iusto laborum, nisi pariatur, perspiciatis quis reprehenderit saepe sint. Aspernatur culpa distinctio dolorem eius pariatur, voluptatibus?</p>
        <p>Adipisci aspernatur blanditiis culpa deleniti dolorum eius eum expedita explicabo facilis, in ipsum labore, modi molestiae nobis nulla officiis quia quidem quos rem repellat repudiandae sunt tempore totam ut voluptas.</p>
        <p>Consequatur hic quos rem? Accusamus aperiam corporis cumque dignissimos dolor doloremque eaque explicabo nam necessitatibus neque nobis nulla omnis placeat porro quae quam quisquam quod sequi similique temporibus unde, voluptatibus.</p>
        <p>Aliquam dolorem nobis repudiandae. Aut cum cumque cupiditate debitis, dolorem, doloribus excepturi exercitationem impedit, incidunt ipsa itaque iusto magni mollitia non praesentium provident quidem quod recusandae reprehenderit sequi sint voluptates.</p>
        <p>A adipisci aut, consequuntur debitis dignissimos qui quia recusandae tempore. Architecto aspernatur beatae cupiditate debitis doloribus eum excepturi magni minus, mollitia nam odit officiis omnis possimus quis ratione suscipit veniam?</p>
      </div>
    </v-template>
  </div>
</template>

<script type="text/babel">
  import Template from '@/components/templates/Fullpage';

  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      'v-template': Template,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
