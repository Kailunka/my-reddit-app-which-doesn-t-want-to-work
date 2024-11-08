import React from 'react';
import './Loading.css'; // Import the CSS for styling

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-strip"></div>
                {/* Create placeholders for posts */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="mock-post-item-container">
                        <div className="mock-post-title"></div>
                        <div className="mock-post-image"></div>
                        <div className="mock-post-item-bottom">
                            <div className="mock-post-author"></div>
                            <div className="mock-post-date"></div>
                        </div>
                    </div>
                ))}
            </div>

    );
};

export default Loading;
