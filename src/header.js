import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.css';

const Header = ({ searchValue }) => {
    return (
        <header className="header">
            <span>
                <i className="fa fa-search"></i>
                <input type="search" className="headerSearch" placeholder="Search"
                    onChange={searchValue} />
            </span>
        </header>
    )
}

Header.propTypes = {
    searchValue: PropTypes.func
}

export default Header;