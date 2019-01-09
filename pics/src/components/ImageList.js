import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    let images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });

    return (
        <div>
            <div className="image-list">{images}</div>
            <hr />
            {props.images.length} imagenes encontradas.
        </div>
    );
};

export default ImageList;
