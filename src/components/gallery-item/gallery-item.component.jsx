import React from 'react';

import './gallery-item.styles.css';

import Button from '../button/button.component';

function GalleryItem() {
    return (
        <div className="gallery__item">
            <img
                src="https://res.cloudinary.com/jhanrisner/image/upload/v1643103262/m3uporhffbhklzzkmba6.png"
                alt=""
            />
            <div className="overlay">
                <Button
                    text="delete"
                    type="button"
                    variant="outline-danger"
                    color="red"
                    bgColor="transparent"
                    size="sm"
                />
                <div className="gallery__title">
                    Morbi consequat lectus non orci maximus
                </div>
            </div>
        </div>
    );
}

export default GalleryItem;
