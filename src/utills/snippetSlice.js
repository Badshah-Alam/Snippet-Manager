
import { createSlice } from "@reduxjs/toolkit";

const snippetSlice = createSlice({
  name: "snippets",
  initialState: {
    snippets: [],
  },
  reducers: {
    addSnippet: (state, action) => {
      state.snippets.push(action.payload);
    },
    deleteSnippet: (state, action) => {
      state.snippets = state.snippets.filter(snippet => snippet.id !== action.payload);
    },
    editSnippet: (state, action) => {
      const { id, updatedSnippet } = action.payload;
      const index = state.snippets.findIndex(snippet => snippet.id === id);
      if (index !== -1) {
        state.snippets[index] = { ...state.snippets[index], ...updatedSnippet };
      }
    },
  },
});

export const { addSnippet, deleteSnippet, editSnippet } = snippetSlice.actions;
export default snippetSlice.reducer;

