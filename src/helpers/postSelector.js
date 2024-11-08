import { createSelector } from 'reselect';

const selectPosts = (state) => state.posts.data;
const selectAuthors = (state) => state.filterBar.selectedAuthors;
const selectQuery = (state) => state.searchBar.query;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectAuthors, selectQuery],
    (posts, authors, query) => {
        if (!posts) return [];
        return posts.filter(post => 
            (authors.length === 0 || authors.includes(post.author)) &&
            (query.length === 0 || post.title.toLowerCase().includes(query.toLowerCase()))
        );
    }
);
