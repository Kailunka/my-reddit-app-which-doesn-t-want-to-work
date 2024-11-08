import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/Posts/PostsSlice';
import filterBarReducer from '../components/FiltersBar/FilterBarSlice'; 
import searchBarReducer from '../components/SearchBar/SearchBarSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        filterBar: filterBarReducer,
        searchBar: searchBarReducer
    }
})

export default store

