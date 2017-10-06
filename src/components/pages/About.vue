<template>
  <div>
    <v-template>
      <div slot="main">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores iusto nesciunt non praesentium quaerat saepe. Commodi distinctio est expedita, ipsum necessitatibus sint. Inventore numquam quas quidem ut vitae! Praesentium?</p>
        <p>Aspernatur at aut blanditiis commodi, cupiditate eligendi, error fuga inventore ipsam iure natus numquam officia quidem ratione rem reprehenderit, similique voluptates. Alias architecto eius minima optio possimus reprehenderit repudiandae tenetur.</p>
        <p>A, accusamus adipisci aliquam assumenda atque consequatur corporis, cum earum impedit inventore ipsam iste itaque laboriosam minus molestiae nobis nostrum odit porro praesentium qui quisquam reiciendis suscipit voluptas? Error, velit?</p>
        <p>Asperiores at, consequatur cum deleniti dolor dolorum eligendi eos eveniet exercitationem facere facilis harum impedit incidunt, ipsa laudantium minima nam, natus provident qui quibusdam quos sit ut veniam vitae voluptatem!</p>
        <p>Alias autem doloremque et recusandae saepe! Adipisci aliquam consequatur doloremque id iusto laboriosam libero molestias perspiciatis quibusdam quod! Eum facere ipsum magnam modi, nulla provident velit veritatis vero. Consectetur, est!</p>
      </div>
    </v-template>
  </div>
</template>

<script type="text/babel">
  import Template from '@/components/templates/SidebarLeft';

  export default {
    name: 'about',
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

<style lang="scss" type="text/scss"></style>
