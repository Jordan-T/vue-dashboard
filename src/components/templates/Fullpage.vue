<template>
  <div>
    <header id="header">
      <slot name="header">
        <main-header></main-header>
      </slot>
    </header>
    <main id="main">
      <slot name="main">
        <h1>Main content</h1>
      </slot>
    </main>
  </div>
</template>

<script type="text/babel">
  import Header from '@/components/organisms/Header';

  export default {
    name: 'template-fullpage',
    data() {
      return {
      };
    },
    components: {
      'main-header': Header,
    },
  };
</script>

<style lang="scss" type="text/scss"></style>
