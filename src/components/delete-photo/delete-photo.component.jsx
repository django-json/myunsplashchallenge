import React from 'react';

import './delete-photo.styles.css';

import Button from '../button/button.component';
// import Input from '../input/input.component';

function DeletePhoto({ id, handleCancelClick, deletePhoto }) {
    return (
        <div className="delete-photo">
            <div className="delete-photo__title">Are you sure?</div>
            {/* <Input type="password" label="Password" /> */}
            <div className="delete-photo__action">
                <Button
                    className="delete-photo__cancel"
                    type="button"
                    variant="text"
                    color="grey"
                    onClick={handleCancelClick}
                >
                    Cancel
                </Button>
                <Button
                    type="button"
                    variant="danger"
                    color="white"
                    onClick={() => deletePhoto(id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default DeletePhoto;
