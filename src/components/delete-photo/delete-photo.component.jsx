import React from 'react';

import './delete-photo.styles.css';

import Button from '../button/button.component';
import Input from '../input/input.component';

function DeletePhoto() {
    return (
        <div className="delete-photo">
            <div className="delete-photo__title">Are you sure?</div>
            <Input type="password" label="Password" />
            <div className="delete-photo__action">
                <Button type="button" variant="text" color="grey">
                    Cancel
                </Button>
                <Button type="button" variant="danger" color="white">
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default DeletePhoto;
