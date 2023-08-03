import React from "react";

const SearchBar = ({ openSearchHandler, searchBar }) => {
    return (
        <div className="search-bar">
            <input className="title-search-input" type="text" />
            <button onClick={openSearchHandler}>
                <ion-icon name="close-outline"></ion-icon>
            </button>
        </div>
    );
};

export default SearchBar;
