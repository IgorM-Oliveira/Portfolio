import React from 'react';
import {Typography} from "antd";

const {Title, Paragraph} = Typography;

export default function Home() {
  return (
    <div>
      <div className={'about'}>
        <Title style={{color: '#f7f7f7'}}>Carreira</Title>
        <Paragraph style={{color: '#f7f7f7'}}>Front-end Developer</Paragraph>
        <Paragraph style={{color: '#f7f7f7'}}>A developer focused on helping people with their everyday problems.</Paragraph>
      </div>
    </div>
  )
}