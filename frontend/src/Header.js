import React from 'react';


const Header = ({ title = "Be the hero" }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
};

export default Header;