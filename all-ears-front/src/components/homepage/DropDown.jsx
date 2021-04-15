import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function DropDown(props) {
  const menu = (
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

  return (
    <Dropdown overlay={menu}>
      <a
        href
        id='dropdown-select'
        className='ant-dropdown-link'
        onClick={(e) => e.preventDefault()}>
        {props.text} <DownOutlined />
      </a>
    </Dropdown>
  );
}
