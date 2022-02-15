import React from 'react';

import './add-photo.styles.css';

import Button from '../button/button.component';
import Input from '../input/input.component';

function AddPhoto({
    handleCancelClick,
    addPhoto,
    handleChange,
    label,
    photoURL,
    errorMessage
}) {
    return (
        <div className="add-photo">
            <div className="add-photo__title">Add a new photo</div>
            <Input
                type="text"
                name="label"
                value={label}
                label="Label"
                placeholder="Suspendisse elit massa"
                onChange={handleChange}
                error={errorMessage.label.length}
                helperTextsList={errorMessage.label}
            />
            <Input
                type="text"
                name="photo-url"
                value={photoURL}
                label="Photo URL"
                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r"
                onChange={handleChange}
                error={errorMessage.photoURL.length}
                helperTextsList={errorMessage.photoURL}
            />
            <div className="add-photo__action">
                <Button
                    className="add-photo__cancel"
                    type="button"
                    variant="text"
                    color="grey"
                    onClick={handleCancelClick}
                >
                    Cancel
                </Button>
                <Button
                    type="button"
                    name="submit"
                    id="submit"
                    variant="success"
                    color="white"
                    onClick={() => addPhoto(label, photoURL)}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default AddPhoto;
