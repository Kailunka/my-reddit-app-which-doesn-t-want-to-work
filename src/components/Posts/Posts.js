import React from 'react';
import { useSelector } from 'react-redux';
import { PostItem } from '../PostItem/PostItem';
import { selectFilteredPosts } from '../../helpers/postSelector';
import Loading from '../Loading/Loading';

export const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const filteredPosts = useSelector(selectFilteredPosts); // Use the memoized selector

    return (
        <div className='posts-wrapper'>
            {posts.status === 'loading' && <Loading />} {/* Show loading screen */}
            {posts.status === 'failed' && <div>{posts.error}</div>}
            {posts.status === 'succeeded' && filteredPosts.length > 0 ? (
                filteredPosts.map((post) => <PostItem key={post.id} post={post} />)
            ) : (
                <div>No posts available.</div>
            )}
        </div>
    );
};
