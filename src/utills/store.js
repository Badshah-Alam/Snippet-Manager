import { configureStore } from '@reduxjs/toolkit';
import snippetReducer from './snippetSlice';

const store = configureStore({
  reducer: {
    snippets: snippetReducer,
  },
});

export default store;
