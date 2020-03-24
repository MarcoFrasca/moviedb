import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBar = ({ handleInput, search }) => {
  return (
    <section className="searchbox-wrap">
      <Search
        placeholder="Search for a movie..."
        size="large"
        onChange={handleInput}
        onSearch={search}
      />
    </section>
  );
};

export default SearchBar;
