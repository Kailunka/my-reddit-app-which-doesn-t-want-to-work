import { createSlice } from "@reduxjs/toolkit"

const searchBarSlice = createSlice({
    name: "searchBar",
    initialState: {
        query: "",
    },
    reducers: {
        updateQuery: (state, action) => {
            state.query = action.payload
        },
    },
})
export default searchBarSlice.reducer
export const { updateQuery } = searchBarSlice.actions;
