import React from 'react';
import {Typography, Row, Col} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../store/themeReducer";

const {Title, Paragraph} = Typography;

export default function Home() {
  const mode = useSelector(selectTheme);

  return (
    <Row>
      <Col span={12} offset={6}>
        <div className={'content'}>
          <Title className={`${mode}`}>Projetos</Title>
          <Paragraph className={`${mode}`}>Front-end Developer</Paragraph>
          <Paragraph className={`${mode}`}>A developer focused on helping people with their everyday problems.</Paragraph>
        </div>
      </Col>
    </Row>
  )
}
