import React from "react";
import {Menu} from "antd";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrent, selectCurrent} from "../../store/currentReducer";
import {selectTheme} from "../../store/themeReducer";

const ManuComponent = (data) => {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);
  const current = useSelector(selectCurrent);

  const handleClick = e => {
    dispatch(changeCurrent(e.key))
  };

  return (
    <Menu
      className={'menu'}
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      theme={mode}
    >
      <Menu.Item key={`${data.data[0].key}`} icon={data.data[0].icon}>
        <Link href={`${data.data[0].router}`}>
          <a>{`${data.data[0].name}`}</a>
        </Link>
      </Menu.Item>
      <Menu.Item key={`${data.data[1].key}`} icon={data.data[1].icon}>
        <Link href={`${data.data[1].router}`}>
          <a>{`${data.data[1].name}`}</a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default ManuComponent;