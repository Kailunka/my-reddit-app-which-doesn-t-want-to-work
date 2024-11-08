import { createSlice } from "@reduxjs/toolkit";

const filterBarSlice = createSlice({
    name: 'filterBar',
    initialState: {
        selectedAuthors: [],
        selectedSubreddits: []
    },
    reducers: {
        updateAuthors: (state, action) => {
            state.selectedAuthors = action.payload
        },
        updateSubreddits: (state, action) => {
            state.selectedSubreddits = action.payload
        }
    }
})

export const { updateAuthors, updateSubreddits } = filterBarSlice.actions;
export default filterBarSlice.reducer;