import React from 'react';
import classNames from 'classnames';

import './input.styles.css';

const defaultProps = {
    type: 'text'
};

function Input({ label, type, startIcon, placeholder, borderColor, onChange }) {
    const classes = classNames('input__input', {
        'input__input--left-padding': startIcon,
        [`input__input--border-${borderColor}`]: borderColor
    });

    const startIconTopPositionStyle = label ? '40px' : '15px';

    return (
        <div className="input">
            <div className="input__wrapper">
                {label && (
                    <label className="input__label" htmlFor="input">
                        {label}
                    </label>
                )}
                <input
                    className={classes}
                    type={type}
                    id={label}
                    placeholder={placeholder}
                    onChange={() => {}}
                />
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
