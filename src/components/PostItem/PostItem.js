import React from "react";
import { timeAgo } from "../../helpers/TimeAgo";
import "./PostItem.css";

export const PostItem = ({ post }) => {
    // Truncate the alt text if it exceeds 70 characters
    const truncatedAlt = post.selftext.length > 70 
        ? post.selftext.substring(0, 70) + '...' 
        : post.selftext;

    return (
        <div className="post-item-container">
            <h2 className="post-title">{post.title}</h2>
            {post.url ? (
                <img src={post.url} alt={truncatedAlt} />
            ) : (
                post.selftext
            )}
            <hr />
            <div className="post-item-bottom">
                <p className="post-author">Posted by: <a href={`https://www.reddit.com/user/${post.author}/`} target="blank">{post.author}</a></p>
                <p>{timeAgo(post.created)}</p>
                <p>C: {post.num_comments}</p>
            </div>
        </div>
    );
};
