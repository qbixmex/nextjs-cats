"use client";

import { type ChangeEvent, FC, FormEvent, useState } from "react";
import { SearchIcon } from "lucide-react";
import SearchResults from "../search-results/SearchResults";
import styles from "./form-search.module.css";

const FormSearch: FC = () => {
  const [ showSearchResults, setShowSearchResults ] = useState(false);
  const [ searchInput, setSearchInput ] = useState("");
  const onSearchResults = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSearchResults(true);
  };
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
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

export default FormSearch;