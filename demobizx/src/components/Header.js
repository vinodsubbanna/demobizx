import React from 'react';
import Navigation from './Navigation';

const Header = (props) => {
    return (
        <header className="d-flex justify-content-between p-2 border-bottom">
            <h4 className="m-0">{props.title}</h4>
                <img src="https://via.placeholder.com/120x30" className = "logo" alt="Company logo" />
            <Navigation />
        </header>
    )
}

export default Header;

