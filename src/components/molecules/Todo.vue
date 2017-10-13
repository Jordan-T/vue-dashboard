<template>
  <div class="Todo" :class="{ 'Todo--editing': editing, 'Todo--done': todo.done }">
    <div v-if="!editing" class="Todo-show">
      <p class="Todo-text">{{ todo.text }}</p>
      <button type="button" @click.prevent="onToggle" class="button Todo-toggle">Toggle</button>
      <button type="button" @click.prevent="onEdit" class="button Todo-edit">Edit</button>
      <button type="button" @click.prevent="onDelete" class="button alert Todo-delete">Delete</button>
    </div>
    <form v-else @submit.prevent="onSubmit" class="Todo-form">
      <div class="input-group">
        <input type="text" v-model="newText" class="input-group-field" v-focus="editing">
        <div class="input-group-button">
          <button type="submit" :disabled="newText === ''" class="button primary">Valider</button>
          <button type="button" @click.prevent="onCancel" class="button secondary">Annuler</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script type="text/babel">
  import { mapActions } from 'vuex';

  export default {
    name: 'todo',
    data() {
      return {
        editing: false,
        newText: '',
      };
    },
    props: [
      'todo',
    ],
    computed: {
    },
    methods: {
      ...mapActions({
        toggleTodo: 'toggleTodo',
        editTodo: 'editTodo',
        removeTodo: 'removeTodo',
      }),
      onEdit() {
        this.newText = this.todo.text;

        this.editing = true;
      },
      onCancel() {
        this.editing = false;
      },
      onSubmit() {
        this.editTodo({ todo: this.todo, text: this.newText });

        this.editing = false;
      },
      onToggle() {
        this.toggleTodo({ todo: this.todo });
      },
      onDelete() {
        this.removeTodo({ todo: this.todo });
      },
    },
    directives: {
      focus: {
        // directive definition
        inserted(el) {
          el.focus();
        },
      },
    },
  };
</script>

<style lang="scss" type="text/scss">
  .Todo {

  }

  .Todo-show {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Todo-text {
    flex-grow: 1;
  }
  .Todo-toggle {
    order: -1;
  }



  .Todo--done {
    opacity: .5;

    .Todo-text {
      text-decoration: line-through;
    }
  }
</style>
