import React, { Fragment } from 'react';
import Modal from 'react-modal';

import './navbar.styles.css';

import { ReactComponent as Logo } from '../../assets/images/my_unsplash_logo.svg';
import Input from '../input/input.component';
import Button from '../button/button.component';
import AddPhoto from '../add-photo/add-photo.component';

Modal.setAppElement('#root');

function Navbar({
    handleChange,
    addPhoto,
    searchValue,
    closeModal,
    setModalIsOpen,
    modalIsOpen,
    ...props
}) {
    return (
        <Fragment>
            <div className="navbar">
                <div className="navbar__col">
                    <Logo />
                    <Input
                        type="text"
                        name="search"
                        id="search"
                        value={searchValue}
                        placeholder="Search by name"
                        startIcon="search"
                        borderColor="grey"
                        onChange={handleChange}
                    />
                </div>
                <Button
                    text="Add a photo"
                    variant="success"
                    color="white"
                    onClick={() => setModalIsOpen(true)}
                />
            </div>
            <Modal
                className="navbar__modal"
                overlayClassName="navbar__modal--overlay"
                isOpen={modalIsOpen}
                contentLabel="navbar Collapsible Modal"
            >
                <AddPhoto
                    handleCancelClick={closeModal}
                    handleChange={handleChange}
                    addPhoto={addPhoto}
                    {...props}
                />
            </Modal>
        </Fragment>
    );
}

export default Navbar;
