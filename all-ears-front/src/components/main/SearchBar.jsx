import React from "react";
import { Input } from "antd";
import { useHistory } from "react-router-dom";

const { Search } = Input;

const SearchBar = () => {
  let history = useHistory();

  const onSearch = (value) => {
    history.push(`/search/${value}`);
  };

  return (
    <div>
      <Search
        placeholder='Search'
        onSearch={onSearch}
        style={{ width: 200, paddingTop: 17, float: "right" }}
      />
    </div>
  );
};

export default SearchBar;
