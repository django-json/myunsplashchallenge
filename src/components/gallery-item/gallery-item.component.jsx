import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';

import './gallery-item.styles.css';

import Button from '../button/button.component';
import DeletePhoto from '../delete-photo/delete-photo.component';

Modal.setAppElement('#root');

function GalleryItem({ id, label, photoURL, deletePhoto }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <Fragment>
            <div className="gallery-item">
                <img src={photoURL} alt={label} />
                <div className="overlay">
                    <Button
                        text="delete"
                        type="button"
                        variant="outline-danger"
                        color="red"
                        bgColor="transparent"
                        size="sm"
                        onClick={() => setModalIsOpen(true)}
                    />
                    <div className="gallery__title">{label}</div>
                </div>
            </div>
            <Modal
                className="gallery-item__modal"
                overlayClassName="gallery-item__modal--overlay"
                isOpen={modalIsOpen}
                contentLabel="gallery-item Collapsible Modal"
            >
                <DeletePhoto
                    id={id}
                    handleCancelClick={closeModal}
                    deletePhoto={deletePhoto}
                />
            </Modal>
        </Fragment>
    );
}

export default GalleryItem;
