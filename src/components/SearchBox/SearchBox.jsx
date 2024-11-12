import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onChange}
    placeholder="Search contacts"
    className={styles.searchBox}
  />
);

export default SearchBox;
