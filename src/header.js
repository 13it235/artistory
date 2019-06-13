import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.css';

const Header = (searchValue) => {
    return (
        <div className="header">
            <input type="search" className="headerSearch" placeholder="&#61442;   Search" 
            onChange={(event) => { searchValue(event) }} />
        </div>
    )
}

Header.propTypes = {
    searchValue: PropTypes.func.isRequired
}

export default Header;