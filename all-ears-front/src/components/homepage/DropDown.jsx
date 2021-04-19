import React from "react";
import { Select } from "antd";

const { Option } = Select;

const DropDown = (props) => {
  return (
    <>
      <Select
        defaultValue='Select a genre'
        style={{ width: 170, marginRight: 20, bottom: 8 }}
        onChange={props.onChange}>
        {props.genres &&
          props.genres.slice(6, 12).map((genre, index) => {
            console.log("genre", genre);
            return (
              <Option value={genre.name} id={genre.id}>
                {genre.name}
              </Option>
            );
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
