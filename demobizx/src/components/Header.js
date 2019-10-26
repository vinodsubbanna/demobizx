import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="d-flex justify-content-between px-2 border-bottom">
            <h4 className="m-0">{props.title}</h4>
                <img src="" alt="Company logo" />
            <h2>Home</h2>
        </header>
    )
}

export default Header;

