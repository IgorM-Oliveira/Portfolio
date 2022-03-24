import React from 'react';
import {Typography, Row, Col} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../store/themeReducer";

import { styled } from '@stitches/react';

const {Title, Paragraph} = Typography;

export default function Home() {
  const date1 = new Date('7/13/2010');
  const date2 = new Date('12/15/2010');

  const mode = useSelector(selectTheme);

  const Timeline = styled('p', {
    fontSize: '1em',
    lineHeight: '1.75em',
    borderTop: '3px solid',
    borderImage: 'linear-gradient(to right, #02b3f5 0%, #05a639 100%)',
    borderImageSlice: 1,
    borderWidth: '3px',
    margin: 0,
    padding: '40px',
    counterIncrement: 'section',
    position: 'relative',

    '&:before': {
      position: 'absolute',
      borderRadius: '50%',
      padding: '10px',
      height: '1.25em',
      width: '1.25em',
      textAlign: 'center',
      lineHeight: '1.25em',
      fontSize: '1em',
    },
    '&:nth-child(odd)': {
      borderRight: '3px solid',
      paddingLeft: 0,
      '&:before': {
        left: '100%',
        marginLeft: '-20px',
      }
    },
    '&:nth-child(even)': {
      borderLeft: '3px solid',
      paddingRight: 0,
      '&:before': {
        right: '100%',
        marginRight: '-20px',
      }
    }
  })

  return (
    <Row>
      <Col span={12} offset={6}>
        <div className={'content'}>
          <Title className={`gradient ${mode}`}>Sobre mim</Title>
          <div className={'description'}>
            <img className={'img'} src="https://avatars.githubusercontent.com/u/41808818?v=4" alt="Perfil" width="350"/>
            <div>
              <Title level={3} className={`${mode}`}>Front-end Developer</Title>
              <Paragraph className={`paragraph ${mode}`}>
                Me chamo Igor, tenho 21 anos, sou alguém mais estrovertivo e descontraido.
              </Paragraph>
              <Paragraph className={`paragraph ${mode}`}>
                Sou desenvolvedor front-end, apaixonado por tecnologia. Atualmente trabalho na
                <a className={`line ${mode}`} href={'https://www.genesis.tec.br/'}> Gênesis </a>
                e tenho e tenho 1 ano de experiência profissional, e atuo com as tecnologias:
                HTML, CSS, JavaScript, ReactJS, VueJS e NodeJS.
              </Paragraph>
            </div>
          </div>

          <div className={'bio'}>
            <div style={{width: '5px', height: '25px', background: '#03AEB4', marginRight: '20px'}}/>
            <Title level={3} className={`${mode}`}>Bio</Title>
          </div>
          <Paragraph className={`paragraph ${mode}`}>
            Sou alguém que gosta de se divertir codando algo novo, aprender cada dia mais,
            sempre ser melhor que o meu eu do passado, essa é minha meta
          </Paragraph>

          <div className={'bio'}>
            <div style={{width: '5px', height: '25px', background: '#03AEB4', marginRight: '20px'}}/>
            <Title level={3} className={`${mode}`}>Experiência</Title>
          </div>
          <div>
            <Timeline>
              <Title level={4} className={`${mode}`}>Developer Front-end</Title>
              <Paragraph className={`paragraph ${mode}`}>
                <a href={'https://www.genesis.tec.br/'} className={`line ${mode}`}>
                  Génesis
                </a> - Mato Grosso do Sul, MS
              </Paragraph>
              <Paragraph className={`paragraph ${mode}`}>Fev 2021 - Momento atual • 1 anos 1 meses</Paragraph>
            </Timeline>

            <Timeline>
              <Title level={4} className={`${mode}`}>Curso Técnico em Informática para Internet</Title>
              <Paragraph className={`paragraph ${mode}`}>
                <a href={'https://www.ifms.edu.br/'} className={`line ${mode}`}>
                  Instituto Federal do Mato Grosso do Sul
                </a> - Mato Grosso do Sul, MS
              </Paragraph>
              <Paragraph className={`paragraph ${mode}`}>Fev 2016 - Set 2019 • 3 anos</Paragraph>
            </Timeline>
          </div>
        </div>
      </Col>
    </Row>
  )
}
