import axios from 'axios';

const api = axios.create({
  baseURL: '/api/todos',
  headers: { 'X-Custom-Header': 'foobar' },
});


export function getTodos() {
  return api.get('');
}

export function addTodo(todo) {
  return api.post('', todo);
}

export function editTodo(id, todo) {
  return api.put(`/${id}`, todo);
}

export function removeTodo(id) {
  return api.delete(`/${id}`);
}
