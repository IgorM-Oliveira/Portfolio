import React from 'react';
import {Typography} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../store/themeReducer";

const {Title, Paragraph} = Typography;

export default function Home() {
  const mode = useSelector(selectTheme);
  return (
    <div className={'card'}>
      <div className={'presentation'}>
        <Title className={'gradient title'}>Igor Matos Oliveira</Title>
        <Paragraph className={`paragraph ${mode}`}>
          Full-Stack Engineer
        </Paragraph>
        <Paragraph className={`paragraph ${mode}`}>
          A developer focused on helping people with their everyday problems.
        </Paragraph>
      </div>
    </div>
  )
}
