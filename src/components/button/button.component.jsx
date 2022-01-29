import React from 'react';
import classNames from 'classnames';

import './button.styles.css';

const defaultProps = {
    type: 'button',
    variant: 'primary'
};

function Button({ text, type, variant, color, onClick, children }) {
    const classes = classNames('btn', {
        [`btn--${variant}`]: variant,
        [`btn--${color}`]: color
    });

    return (
        <button className={classes} type={type} onClick={() => {}}>
            {text || children}
        </button>
    );
}

Button.displayName = 'Button';
Button.defaultProps = defaultProps;

export default Button;
