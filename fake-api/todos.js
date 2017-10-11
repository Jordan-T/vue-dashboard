module.exports = (number) => {
  const todos = [];
  const n = number || 20;

  // Create n users
  for (let i = 0; i < n; i += 1) {
    todos.push({
      id: i,
      text: `My task ${i}`,
      done: i > 10,
    });
  }
  return todos;
};
