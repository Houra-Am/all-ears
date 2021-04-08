import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function DropDown(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'>
          {props.category.optionOne}
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'>
          {props.category.optionTwo}
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'>
          {props.category.optionThree}
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a
        id='dropdown-select'
        className='ant-dropdown-link'
        onClick={(e) => e.preventDefault()}>
        select <DownOutlined />
      </a>
    </Dropdown>
  );
}
