"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import styles from "./search.module.css";
import SearchResults from "./search-results/SearchResults";

const Search = () => {
  const [ showSearchResults, setShowSearchResults ] = useState(false);
  const [ searchInput, setSearchInput ] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const onSearchResults = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSearchResults(true);
  };

  return (
    <>
      <form onSubmit={onSearchResults}>
        <div className={styles.searchContainer}>
          <div className={styles.iconContainer}>
            <SearchIcon className={styles.icon} size={24} />
          </div>
          <input
            name="search"
            type="text"
            className={styles.input}
            placeholder="Search Github Username"
            value={searchInput}
            onChange={onInputChange}
          />
          <button
            type="submit"
            className={styles.button}
          >Search</button>
        </div>
      </form>

      { showSearchResults && <SearchResults name={searchInput} /> }
    </>
  );
};

export default Search;
