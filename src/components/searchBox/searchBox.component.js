import React from 'react';
import './searchBox.styles.css';

const SearchBox = ({placeHolder, onChange, value}) => {
    return (
        <input className="search" type='search' placeholder={placeHolder} onChange={onChange} value={value} />
    );
}

export default SearchBox;