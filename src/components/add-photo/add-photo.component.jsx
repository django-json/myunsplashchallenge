import React from 'react';

import './add-photo.styles.css';

import Button from '../button/button.component';
import Input from '../input/input.component';

function AddPhoto() {
    return (
        <div className="add-photo">
            <div className="add-photo__title">Add a new photo</div>
            <Input
                type="text"
                label="Label"
                placeholder="Suspendisse elit massa"
            />
            <Input
                type="text"
                label="Photo URL"
                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            />
            <div className="add-photo__action">
                <Button type="button" variant="text" color="grey">
                    Cancel
                </Button>
                <Button type="button" variant="success" color="white">
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default AddPhoto;
