<template>
  <div>
    <div>
      <div id="header">
        <slot name="header">
          <main-header></main-header>
        </slot>
      </div>
      <main id="main">
        <slot name="main">
          <h1>Main content</h1>
        </slot>
      </main>
      <aside id="sidebar">
        <slot name="sidebar">
          <h1>Sidebar</h1>
        </slot>
      </aside>
    </div>
  </div>
</template>

<script type="text/babel">
  import Header from '@/components/organisms/Header';

  export default {
    name: 'template-sidebar-left',
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
