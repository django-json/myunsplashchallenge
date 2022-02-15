import React from 'react';
import classNames from 'classnames';

import './button.styles.css';

const defaultProps = {
    type: 'button',
    variant: 'primary'
};

function Button({
    text,
    type,
    name,
    id,
    variant,
    size,
    color,
    bgColor,
    onClick,
    children,
    className
}) {
    const classes = classNames('btn', className, {
        [`btn--${variant}`]: variant,
        [`btn--${color}`]: color,
        [`btn--bg-${bgColor}`]: bgColor,
        [`btn--${size}`]: size
    });

    return (
        <button
            className={classes}
            type={type}
            name={name}
            id={id}
            onClick={onClick}
        >
            {text || children}
        </button>
    );
}

Button.displayName = 'Button';
Button.defaultProps = defaultProps;

export default Button;
