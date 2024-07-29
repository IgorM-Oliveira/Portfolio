import React from 'react';
import {Typography, Row, Col} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../../store/themeReducer.js";
import {styled} from "@stitches/react";

const {Title, Paragraph} = Typography;

export default function Home() {
  const mode = useSelector(selectTheme);

  const Card = styled('div', {
    padding: '20px',
    borderRadius: '10px',
    variants: {
      theme: {
        dark: {
          '&:hover, &:active': {
            backgroundColor: 'rgba(255,255,255,0.1)'
          }
        },
        light: {
          '&:hover, &:active': {
            backgroundColor: 'rgba(52, 52, 52, 0.3)'
          }
        }
      }
    }
  })

  const TitleStyled = styled('h1', {
    size: '50px',
    variants: {
      theme: {
        dark: {
          color: 'rgb(255,255,255)'
        },
        light: {
          color: 'rgb(33,33,33)'
        }
      }
    }
  })

  const ParagraphStyled = styled('p', {
    variants: {
      theme: {
        dark: {
          color: 'rgb(255,255,255,0.5)'
        },
        light: {
          color: 'rgb(52,52,52,0.8)'
        }
      }
    }
  })

  const ProjectsArray = [
    {
      link: 'https://github.com/IgorM-Oliveira/ChallengerVueJs',
      name: 'Encurdador de URL Front-end',
      text: 'Um desafio de construir um encurtador de url com sistema de login, autenticação de request e modo anônimo',
    },
    {
      link: 'https://github.com/IgorM-Oliveira/ChallengerNodeJs',
      name: 'Encurdador de URL Back-end',
      text: 'Esté é o back-end do sistema de encurtamente de url ao lado feito em NodeJS, MongoDB e JWT',
    },
    {
      link: 'https://github.com/IgorM-Oliveira/TECHORT',
      name: 'TECHORT',
      text: 'O sistema estático é um projeto que realizei para meu TCC que consiste em HTML, CSS, JS e NodeJS praticamente puro a única adesão é bootstrap',
    }
  ]

  return (
    <Col span={12} offset={6}>
      <div className={'content'}>
        <Title className={`gradient ${mode}`}>Projetos</Title>
        <Paragraph className={`paragraph ${mode}`}>
          Essa página lista os principais projeto(s) que desenvolvi durante a minha jornada como programador.
        </Paragraph>

        <Row gutter={[16, 16]}>
          {ProjectsArray.map((item) => (
            <Col lg={{span: 6}} sm={{span: 12}}>
              <a href={item.link}>
                <Card theme={mode}>
                  <TitleStyled theme={mode}>{item.name}</TitleStyled>
                  <ParagraphStyled theme={mode}>
                    {item.text}
                  </ParagraphStyled>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  )
}
