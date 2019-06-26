import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.css';

const Header = ({searchValue}) => {
    return (
        <div className="header">
            <i className="fa fa-search"></i>
            <input type="search" className="headerSearch" placeholder="Search" 
            onChange={searchValue}/>
        </div>
    )
}

Header.propTypes = {
    searchValue: PropTypes.func.isRequired
}

export default Header;