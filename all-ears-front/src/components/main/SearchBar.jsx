import React from "react";
import { Input } from "antd";
import "../../css/main-style/SearchBar.css";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchBar = () => {
  return (
    <div>
      <Search
        placeholder='input search text'
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default SearchBar;
