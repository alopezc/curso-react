import React from 'react';
import VideoItem from './VideoItem';

const VideoDetail = ({ videos, onVideoSelect }) => {
    const videosItems = videos.map(video => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return (
        <div className="video-list ui relaxed divided list">{videosItems}</div>
    );
};

export default VideoDetail;
