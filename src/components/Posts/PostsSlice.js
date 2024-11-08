import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/.json`, { method: 'GET' });
    const data = await response.json();
    return data.data.children.map((post) => post.data);
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        filteredPosts: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setFilteredPosts: (state, action) => {
            state.filteredPosts = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default postsSlice.reducer;
