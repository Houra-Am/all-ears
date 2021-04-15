import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const DropDown = (props) => {
  return (
    <>
      <Select
        defaultValue={props.value}
        style={{ width: 170 }}
        onChange={handleChange}>
        {props.genres &&
          props.genres.slice(6, 12).map((genre, index) => {
            return <Option value={genre.name}>{genre.name}</Option>;
          })}
      </Select>
    </>
  );
};

export default DropDown;

/*     

  /*   const menu = (
    <Menu>
      <Menu.Item>
        <Link to='/podcasts/genre/125'>{props.category.optionOne}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/podcasts/genre/168'>{props.category.optionTwo}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/podcasts/genre/135'>{props.category.optionThree}</Link>
      </Menu.Item>
    </Menu>
  ); 

<Dropdown overlay={menu}>
      <a
        href
        id='dropdown-select'
        className='ant-dropdown-link'
        onClick={(e) => e.preventDefault()}>
        {props.text} <DownOutlined />
      </a>
    </Dropdown> */
