import React from 'react';
import classNames from 'classnames';

import './input.styles.css';

const defaultProps = {
    type: 'text'
};

function Input({
    id,
    label,
    type,
    name,
    error,
    helperText,
    helperTextsList,
    startIcon,
    placeholder,
    borderColor,
    onChange
}) {
    const classes = classNames('input__input', {
        'input__input--error': error,
        'input__input--left-padding': startIcon,
        [`input__input--border-${borderColor}`]: borderColor
    });

    const startIconTopPositionStyle = label ? '40px' : '15px';

    return (
        <div className="input">
            <div className="input__wrapper">
                <input
                    className={classes}
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                />

                {label && (
                    <label className="input__label" htmlFor="input">
                        {label}
                    </label>
                )}

                {helperText && !helperTextsList && (
                    <p className="input__helper-text">* {helperText}</p>
                )}

                {helperTextsList &&
                    !helperText &&
                    helperTextsList.map((text, i) => (
                        <div key={i} className="input__helper-text">
                            * {text}
                        </div>
                    ))}

                {startIcon && (
                    <i
                        className="input__start-icon material-icons"
                        style={{
                            position: 'absolute',
                            top: `${startIconTopPositionStyle}`
                        }}
                    >
                        {startIcon}
                    </i>
                )}
            </div>
        </div>
    );
}

Input.displayName = 'Input';
Input.defaultProps = defaultProps;

export default Input;
