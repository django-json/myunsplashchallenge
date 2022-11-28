import React, { useState, useEffect } from 'react';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import Gallery from './components/gallery/gallery.component';
import Footer from './components/footer/footer.components';

import { fetchWithRetry, validateAddPhotoForm } from './utils/utils';

function App() {
    const [data, setData] = useState([]);
    const [label, setLabel] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        label: [],
        photoURL: []
    });

    useEffect(() => {
        getPhotos();
    }, []);

    function closeModal() {
        setModalIsOpen(false);
        clearErrors();
    }

    function addPhoto(label, photoURL) {
        const errors = validateAddPhotoForm(label, photoURL);

        if (!errors) {
            fetch('https://myunsplashchallenge-api.onrender.com/photo/add', {
                method: 'POST',
                body: JSON.stringify({
                    label,
                    photoURL
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        getPhotos();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

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

    function deletePhoto(id) {
        fetch(`https://myunsplashchallenge-api.onrender.com/photo/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then(async (data) => {
                if (data.acknowledged) {
                    const updatedData = await filterData(id);
                    setData(updatedData);
                }
            })
            .catch((error) => {
                console.log(error);
            });

        closeModal();
    }

    // Filter the original data
    function filterData(id) {
        const filteredData = data.filter((item) => item._id !== id);
        return filteredData;
    }

    // Search filter data but preserve the original copy of the data
    function searchFilterData() {
        const filteredData = data.filter((item) =>
            item.label.toLowerCase().includes(searchValue.toLowerCase())
        );

        return filteredData;
    }

    function getPhotos() {
        fetchWithRetry(
            'https://myunsplashchallenge-api.onrender.com/photos',
            {
                method: 'GET'
            },
            3
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
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
            default:
                break;
        }
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
            <Gallery data={searchFilterData()} deletePhoto={deletePhoto} />
            <Footer />
        </div>
    );
}

export default App;
