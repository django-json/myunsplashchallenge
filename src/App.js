import React, { useState, useEffect } from 'react';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import Gallery from './components/gallery/gallery.component';
import Footer from './components/footer/footer.components';
import Input from './components/input/input.component';

import { validateAddPhotoForm } from './utils/utils';

function App() {
    const [data, setData] = useState([]);
    const [label, setLabel] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [searchValue, setSearchValue] = useState('');
    // const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        label: [],
        photoURL: []
    });

    function closeModal() {
        setModalIsOpen(false);
    }

    // useEffect(() => {
    //     if (errorMessage) {
    //         console.log(errorMessage);
    //     }
    // }, [errorMessage]);

    function addPhoto(label, photoURL) {
        const errors = validateAddPhotoForm(label, photoURL);

        if (!errors) {
            setData([...data, { id: Date.now(), label, photoURL }]);

            clearFormStates();
            // clear existing error before successful submission
            clearErrors();
            closeModal();
        } else {
            setErrorMessage({
                ...errors
            });
        }
    }

    function clearErrors() {
        setErrorMessage({
            label: [],
            photoURL: []
        });
    }

    function clearFormStates() {
        setLabel('');
        setPhotoURL('');
    }

    function deletePhoto(id) {
        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
    }

    function handleChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        switch (inputName) {
            case 'search':
                setSearchValue(inputValue);
                break;
            case 'label':
                setLabel(inputValue);
                break;
            case 'photo-url':
                setPhotoURL(inputValue);
                break;
            // case 'password':
            //     setPassword(inputValue);
            //     break;
            default:
                break;
        }
    }

    function filterData() {
        const filteredData = data.filter((item) =>
            item.label.toLowerCase().includes(searchValue.toLowerCase())
        );

        return filteredData;
    }

    return (
        <div className="App">
            <Navbar
                handleChange={handleChange}
                addPhoto={addPhoto}
                searchValue={searchValue}
                label={label}
                photoURL={photoURL}
                closeModal={closeModal}
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
                errorMessage={errorMessage}
            />
            <Gallery data={filterData()} deletePhoto={deletePhoto} />
            <Footer />
            {/* <Input
                label="label"
                startIcon="search"
                helperText="something..."
                error={false}
            /> */}
        </div>
    );
}

export default App;
