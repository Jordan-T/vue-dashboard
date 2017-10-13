import * as todosApi from '@/api/todos';
import * as types from '../mutation-types';

// @TODO: set multiple lists of todos

// initial state
const todosState = {
  todos: [],
  todosLoading: false,
  todosStatus: 'NO_DATA',
};

// getters
const getters = {
  allTodos: state => state.todos,
  allTodosCount: state => getters.allTodos(state).length,
  remainingTodos: state => getters.allTodos(state).filter(todo => todo.done === false),
  remainingTodosCount: state => getters.remainingTodos(state).length,
  doneTodos: state => getters.allTodos(state).filter(todo => todo.done === true),
  doneTodosCount: state => getters.doneTodos(state).length,
  todosLoading: state => state.todosLoading,
  todosStatus: state => state.todosStatus,
};

// actions
const actions = {
  loadTodos({ commit, state }) {
    if (getters.todosStatus(state) === 'NO_DATA') {
      commit(types.SET_TODOS_LOADING, { loading: true });
      commit(types.SET_TODOS_STATUS, { status: '' });
      todosApi.getTodos().then((response) => {
        commit(types.SET_TODOS, { todos: response.data });
        commit(types.SET_TODOS_LOADING, { loading: false });
      });
    }
  },
  addTodo({ commit }, { text }) {
    const newTodo = {
      text,
      done: false,
    };

    commit(types.SET_TODOS_LOADING, { loading: true });
    todosApi.addTodo(newTodo).then((response) => {
      commit(types.ADD_TODO, { todo: response.data });
      commit(types.SET_TODOS_LOADING, { loading: false });
    });
  },
  removeTodo({ commit }, { todo }) {
    commit(types.SET_TODOS_LOADING, { loading: true });
    todosApi.removeTodo(todo.id).then(() => {
      commit(types.REMOVE_TODO, { todo });
      commit(types.SET_TODOS_LOADING, { loading: false });
    });
  },
  toggleTodo({ commit }, { todo }) {
    const done = !todo.done;
    commit(types.SET_TODOS_LOADING, { loading: true });
    todosApi.editTodo(todo.id, {
      done,
    }).then(() => {
      commit(types.TOGGLE_TODO, { todo, done });
      commit(types.SET_TODOS_LOADING, { loading: false });
    });
  },
  editTodo({ commit }, { todo, text }) {
    commit(types.SET_TODOS_LOADING, { loading: true });
    todosApi.editTodo(todo.id, {
      text,
    }).then(() => {
      commit(types.EDIT_TODO, { todo, text });
      commit(types.SET_TODOS_LOADING, { loading: false });
    });
  },
  toggleAllTodos({ dispatch, state }, { done }) {
    const todos = getters[(done === true) ? 'remainingTodos' : 'doneTodos'](state);

    todos.forEach((todo) => {
      dispatch('toggleTodo', { todo });
    });
  },
  clearDoneTodos({ dispatch, state }) {
    getters.doneTodos(state).forEach((todo) => {
      dispatch('removeTodo', { todo });
    });
  },
};

// mutations
const mutations = {
  [types.SET_TODOS](state, { todos }) {
    state.todos = todos;
  },
  [types.SET_TODOS_LOADING](state, { loading }) {
    state.todosLoading = loading;
  },
  [types.SET_TODOS_STATUS](state, { status }) {
    state.todosStatus = status;
  },
  [types.ADD_TODO](state, { todo }) {
    state.todos.push(todo);
  },
  [types.REMOVE_TODO](state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  [types.TOGGLE_TODO](state, { todo, done }) {
    // eslint-disable-next-line no-param-reassign
    todo.done = done;
  },
  [types.EDIT_TODO](state, { todo, text }) {
    // eslint-disable-next-line no-param-reassign
    todo.text = text;
  },
};

export default {
  state: todosState,
  getters,
  actions,
  mutations,
};
