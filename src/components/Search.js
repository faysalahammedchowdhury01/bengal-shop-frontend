import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import classes from '../styles/Search.module.css';

const Search = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className={classes.searchBox}>
            <form className={classes.searchForm}>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    name="search"
                    className={classes.searchInput}
                    type="text"
                    placeholder="Search for products (e.g. eggs, milk, potato)"
                    value={searchText}
                />
                <button type="button" className={classes.searchBtn}>
                    <AiOutlineSearch fontSize="22px" />
                </button>
            </form>
        </div>
    );
};

export default Search;
