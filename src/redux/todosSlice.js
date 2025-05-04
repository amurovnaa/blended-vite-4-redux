import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilter } from './filterSlice';

const slice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find(item => item.id === id);
      if (todo) {
        todo.text = text;
      }
      state.currentTodo = null;
    },
  },
});
export const { addTodo, deleteTodo, setCurrentTodo, updateTodo } =
  slice.actions;
export const todosReducer = slice.reducer;

export const selectTodos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
