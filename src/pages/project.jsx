import React from 'react';
import {Typography, Row, Col, Card} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../store/themeReducer";

const {Title, Paragraph} = Typography;

export default function Home() {
  const mode = useSelector(selectTheme);

  return (
    <Row>
      <Col span={12} offset={6}>
        <div className={'content'}>
          <Title className={`gradient ${mode}`}>Projetos</Title>
          <Paragraph className={`${mode}`}>Front-end Developer</Paragraph>

          <Row gutter={[16, 16]}>
            <Col lg={{span: 6}} sm={{span: 12}} >
              <div onClick={() => console.log('teste')} style={{cursor: 'pointer', backgroundColor: 'rgba(52, 52, 52, 0.3)', padding: '20px', borderRadius: '20px'}}>
                <Title level={2}>Teste</Title>
                <Paragraph>Teste do teste que foi construido para o teste</Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}
