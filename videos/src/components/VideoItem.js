import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    const {
        snippet: { title, thumbnails }
    } = video;

    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" alt={title} src={thumbnails.medium.url} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
