<template>
  <div class="Todos" :class="{ 'Todos--loading': todosLoading }">
    <h1>{{ title }}</h1>
    <div class="Todos-main">
      <div v-if="Todos-loading">
        LOADING !!!!
      </div>
      <form @submit.prevent="onSubmit" class="Todo-form">
        <div class="input-group">
          <input type="text" v-model="newTodoText" class="input-group-field">
          <div class="input-group-button">
            <button type="submit" :disabled="newTodoText === ''" class="button">Ajouter</button>
          </div>
        </div>
      </form>
      <div class="Todos-list">
        <v-todo :todo="todo" v-for="todo in todos" :key="todo.id"></v-todo>
      </div>
      <p>remaining: {{ remainingTodosCount }}</p>
      <button type="button" v-if="allTodosCount !== 0 && remainingTodosCount === 0" @click.prevent="onToggleAll" class="button secondary">Undone All</button>
      <button type="button" v-else-if="allTodosCount !== 0" @click.prevent="onToggleAll" class="button secondary">Toggle All</button>
      <button type="button" v-if="doneTodosCount !== 0" @click.prevent="onClearCompleted" class="button alert">Clear completed</button>

      <ul class="menu">
        <li :class="{ 'is-active': category === 'all' }"><a href="#" @click.prevent="onSetCategory('all')">All</a></li>
        <li :class="{ 'is-active': category === 'remaining' }"><a href="#" @click.prevent="onSetCategory('remaining')">remaining</a></li>
        <li :class="{ 'is-active': category === 'done' }"><a href="#" @click.prevent="onSetCategory('done')">Done</a></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  import { mapGetters, mapActions } from 'vuex';
  import todo from '@/components/molecules/Todo';

  export default {
    name: 'todos',
    data() {
      return {
        title: 'Todos title',
        category: 'all',
        newTodoText: '',
      };
    },
    watch: {
      category() {
        this.updateTodosList();
      },
    },
    computed: {
      ...mapGetters({
        allTodos: 'allTodos',
        allTodosCount: 'allTodosCount',
        remainingTodos: 'remainingTodos',
        remainingTodosCount: 'remainingTodosCount',
        doneTodos: 'doneTodos',
        doneTodosCount: 'doneTodosCount',
        todosLoading: 'todosLoading',
      }),
      todos() {
        let todos;

        switch (this.category) {
          case 'remaining':
            todos = this.remainingTodos;
            break;
          case 'done':
            todos = this.doneTodos;
            break;
          default:
            todos = this.allTodos;
            break;
        }

        return todos;
      },
    },
    methods: {
      ...mapActions({
        addTodo: 'addTodo',
        clearDoneTodos: 'clearDoneTodos',
        toggleAllTodos: 'toggleAllTodos',
        loadTodos: 'loadTodos',
      }),
      updateTodosList() {
        switch (this.category) {
          case 'remaining':
            this.todos = this.remainingTodos;
            break;
          case 'done':
            this.todos = this.doneTodos;
            break;
          default:
            this.todos = this.allTodos;
            break;
        }
      },
      onSubmit() {
        this.addTodo({ text: this.newTodoText });

        this.newTodoText = '';
      },
      onClearCompleted() {
        this.clearDoneTodos();
      },
      onToggleAll() {
        this.toggleAllTodos({
          done: this.remainingTodosCount !== 0,
        });
      },
      onSetCategory(category) {
        this.category = category;
      },
    },
    components: {
      'v-todo': todo,
    },
    mounted() {
      this.loadTodos();
    },
  };
</script>

<style lang="scss" type="text/scss">
  .Todos {
    max-width: 500px;
    margin: 0 auto;
  }

  .Todo-main {
    position: relative;
  }

  .Todos-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    cursor: not-allowed;
  }

  .Todos--loading {
    opacity: .5;
    cursor: not-allowed;
  }
</style>
