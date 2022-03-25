import React from 'react';
import {Typography, Row, Col} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../store/themeReducer";
import {styled} from "@stitches/react";

const {Title, Paragraph} = Typography;

export default function Home() {
  const mode = useSelector(selectTheme);

  const CardStyled = styled('div', {
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

  return (
    <Row>
      <Col span={12} offset={6}>
        <div className={'content'}>
          <Title className={`gradient ${mode}`}>Projetos</Title>
          <Paragraph className={`paragraph ${mode}`}>
            Essa página lista os principais projeto(s) que desenvolvi durante a minha jornada como programador.
          </Paragraph>

          <Row gutter={[16, 16]}>
            <Col lg={{span: 6}} sm={{span: 12}}>
              <a href={'https://github.com/IgorM-Oliveira/ChallengerVueJs'}>
                <CardStyled theme={mode}>
                  <TitleStyled theme={mode}>Encurdador de URL</TitleStyled>
                  <ParagraphStyled theme={mode}>
                    Um desafio de construir um encurtador de url
                    com sistema de login, autenticação de request e modo anônimo
                  </ParagraphStyled>
                </CardStyled>
              </a>
            </Col>
            <Col lg={{span: 6}} sm={{span: 12}}>
              <a href={'https://github.com/IgorM-Oliveira/TECHORT'}>
                <CardStyled theme={mode}>
                  <TitleStyled theme={mode}>TECHORT</TitleStyled>
                  <ParagraphStyled theme={mode}>
                    O sistema estático é um projeto que realizei para meu TCC que consiste
                    em HTML, CSS, JS e NodeJS praticamente puro a única adesão é bootstrap
                  </ParagraphStyled>
                </CardStyled>
              </a>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}
