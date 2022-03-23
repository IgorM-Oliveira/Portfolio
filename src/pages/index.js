import React from 'react';
import {Typography} from "antd";
import {useSelector} from "react-redux";

const {Title, Paragraph} = Typography;

export default function Home() {
  const mode = useSelector(state => state.theme.mode);
  return (
    <div>
      <div className={'presentation'}>
        <Title className={'gradient'}>Igor Matos Oliveira</Title>
        <Paragraph className={`${mode}`}>Front-end Developer</Paragraph>
        <Paragraph className={`${mode}`}>A developer focused on helping people with their everyday problems.</Paragraph>
      </div>
    </div>
  )
}
