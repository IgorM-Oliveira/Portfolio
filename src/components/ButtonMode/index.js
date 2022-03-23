import React from "react";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import {Button} from "antd";

import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../store/themeReducer";

const ModeComponent = () => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.theme.mode);

  const changeMode = (value) => {
    dispatch(changeTheme(value.mode))
  };

  return (
    <Button
      onClick={() => changeMode({mode})}
      shape="circle"
      icon={mode === 'dark' ? <BsFillMoonFill/> : <BsFillSunFill/>}
    />
  )
}

export default ModeComponent;