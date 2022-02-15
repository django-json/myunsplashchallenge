import React from 'react';
import Masonry from 'react-masonry-css';

import './gallery.styles.css';

import GalleryItem from '../gallery-item/gallery-item.component';

const breakpointColumnsObject = {
    default: 3,
    992: 2,
    576: 1
};

function Gallery({ data, deletePhoto }) {
    return (
        <div className="gallery">
            {!data.length && (
                <div className="gallery__not-available">
                    Photos not available. Please add photos to show...
                </div>
            )}
            <Masonry
                breakpointCols={breakpointColumnsObject}
                className="gallery__masonry-grid"
                columnClassName="gallery__masonry-grid-column"
            >
                {data.map((item) => {
                    return (
                        <GalleryItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            photoURL={item.photoURL}
                            deletePhoto={deletePhoto}
                        />
                    );
                })}
            </Masonry>
        </div>
    );
}

export default Gallery;
