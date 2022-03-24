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
          <Title className={`gradient ${mode}`}>Sobre mim</Title>

          <div className={'description'}>
            <img className={'img'} src="https://avatars.githubusercontent.com/u/41808818?v=4" alt="Perfil" width="350"/>
            <div>
              <Paragraph className={`paragraph ${mode}`}>Front-end Developer</Paragraph>
              <Paragraph className={`paragraph ${mode}`}>Me chamo Igor, tenho 21 anos, sou alguém mais estrovertivo e descontraido.</Paragraph>
              <Paragraph className={`paragraph ${mode}`}>Sou desenvolvedor front-end, apaixonado por tecnologia. Atualmente trabalho na <a href={'https://www.genesis.tec.br/'}>Génesis</a> e tenho e tenho 1 anos de experiência com as principais tecnologias: HTML, CSS, JavaScript, ReactJS, Vue e NodeJS.</Paragraph>
            </div>
          </div>

          <Title level={3} className={`${mode}`}>Bio</Title>

          <div className={'bio'}>
            <div style={{width: '5px', height: '25px', background: '#03AEB4', marginRight: '20px'}}/>
            <Paragraph className={`paragraph ${mode}`}>Sou alguém que gosta de se divertir codando algo novo, aprender cada dia mais, sempre ser melhor que o meu eu do passado, essa é minha meta</Paragraph>
          </div>
        </div>
      </Col>
    </Row>
  )
}
