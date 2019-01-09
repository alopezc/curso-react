import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    render() {
        return (
            <div className="video-list">
                <VideoItem />
            </div>
        );
    }
}

export default VideoList;
