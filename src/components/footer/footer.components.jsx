import React from 'react';

import './footer.styles.css';

const Footer = () => (
    <footer className="footer">
        <p>
            <span>created by </span>
            <a
                className="footer__creator"
                href="https://github.com/django-json"
                target="_blank"
                rel="noreferrer"
            >
                django-json
            </a>{' '}
            -{' '}
            <a href="https://devchallenges.io" target="_blank" rel="noreferrer">
                devChallenges.io
            </a>
        </p>
    </footer>
);

export default Footer;
