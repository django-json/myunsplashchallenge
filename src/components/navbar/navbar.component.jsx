import React from 'react';

import './navbar.styles.css';

import { ReactComponent as Logo } from '../../assets/images/my_unsplash_logo.svg';
import Input from '../input/input.component';
import Button from '../button/button.component';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__col">
                <Logo />
                <Input
                    type="text"
                    placeholder="Search by name"
                    startIcon="search"
                    borderColor="grey"
                />
            </div>
            <Button text="Add a photo" variant="success" color="white" />
        </div>
    );
}

export default Navbar;
