export function isValidURL(string) {
    var res = string.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
}

export function validateAddPhotoForm(label, photoURL) {
    const isValid = isValidURL(photoURL);
    let errors = {
        label: [],
        photoURL: []
    };

    const emptyFieldErrorMessage = 'Please do not leave the field empty';
    const invalidURLMessage = 'Please input a valid URL';

    /* URL Validation */

    // valid?
    if (!isValid) {
        errors.photoURL.push(invalidURLMessage);
    }

    // not empty?
    if (!photoURL) {
        errors.photoURL.push(emptyFieldErrorMessage);
    }

    /* Label Validation */

    // not empty?
    if (!label) {
        errors.label.push(emptyFieldErrorMessage);
    }

    if (errors.label.length > 0 || errors.photoURL.length > 0) {
        return errors;
    }

    return;
}

export function isEmpty(obj) {
    return (
        obj && // 👈 null and undefined check
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype
    );
}
