import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Posts/PostsSlice";
import { Selector } from "../Selector/Selector";
import { updateAuthors, updateSubreddits } from "./FilterBarSlice";
import "./FilterBar.css";

export const FiltersBar = ({ subreddits }) => {

    useEffect(() => {
        const handleScroll = () => {
            const filterBarContainer = document.querySelector('.filter-bar-container');

            // Check if the screen width is less than 460px
            if (window.innerWidth < 460) {
                if (window.scrollY > 50) { // Adjust the scroll position as needed
                    filterBarContainer.classList.add('sticky');
                } else {
                    filterBarContainer.classList.remove('sticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.data);
    const selectedAuthors = useSelector((state) => state.filterBar.selectedAuthors); // Get selected authors from Redux state

    const formattedSubreddits = subreddits
        ? subreddits.map((subreddit) => ({ value: subreddit, label: subreddit }))
        : [];

    let authors = [];
    if (posts) {
        authors = [...new Set(posts.map((post) => ({ value: post.author, label: post.author })))];
    }

    const handleAuthorChange = (selectedOptions) => {
        const selectedAuthors = selectedOptions ? selectedOptions.map((option) => option.value) : [];
        dispatch(updateAuthors(selectedAuthors));
    };

    const handleSubredditChange = (selectedOptions) => {
        const selectedSubreddit = Array.isArray(selectedOptions) ? selectedOptions.value : selectedOptions;

        // Clear authors when subreddit changes
        dispatch(updateAuthors([])); // Set authors to an empty array
        dispatch(updateSubreddits(selectedOptions));
        dispatch(fetchPosts(selectedSubreddit.value)); // Fetch posts for the selected subreddit
    };

    return (
        <div className="filter-bar-container">
            <Selector
                className="filter-select"
                data={authors}
                handleChange={handleAuthorChange}
                value={selectedAuthors.map(author => ({ value: author, label: author }))}
                isMulti={true} 
            />
            <Selector
                id="subreddits-select"
                data={formattedSubreddits}
                handleChange={handleSubredditChange}
                isMulti={false} 
            />
        </div>
    );
};
