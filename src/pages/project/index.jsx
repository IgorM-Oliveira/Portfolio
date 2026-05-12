import React from 'react';
import {Typography, Row, Col} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../../store/themeReducer.js";
import {styled} from "@stitches/react";

const {Title, Paragraph} = Typography;

const ProjectsArray = [
  {
    link: 'https://zappio.app.br/',
    name: 'Zappio',
    text: 'Site institucional moderno com layout responsivo, foco em usabilidade e apresentação de serviços digitais.',
  },
  {
    link: 'https://stocksistema.com.br/',
    name: 'Stock Sistema',
    text: 'Plataforma de controle de estoque com fluxo de cadastro, gestão de produtos e relatórios simples.',
  },
  {
    link: 'https://jordiano-moura-massoterapia.vercel.app/',
    name: 'Jordiano Moura Massoterapia',
    text: 'Website profissional para massoterapeuta com apresentação de tratamentos e contato para agendamentos.',
  },
  {
    link: 'https://ana-carolina-p-rodrigues.vercel.app/',
    name: 'Ana Carolina P. Rodrigues',
    text: 'Site pessoal com portfólio e informações de serviços para divulgação de marca profissional.',
  },
  {
    link: 'https://joaoemariaoculos.com.br/',
    name: 'João e Maria Óculos',
    text: 'Landing page para ótica com comunicação visual atraente e apresentação de coleções de óculos.',
  },
  {
    link: 'https://luciara-marques.vercel.app/',
    name: 'Luciara Marques',
    text: 'Site institucional elegante com foco em identidade visual, responsividade e experiência do usuário.',
  }
]

export default function Home() {
  const mode = useSelector(selectTheme);

  const Card = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
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
    fontSize: '22px',
    lineHeight: 1.2,
    marginBottom: '10px',
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
    marginBottom: 0,
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
    <Col span={12} offset={6}>
      <div className={'content'}>
        <Title className={`gradient ${mode}`}>Projetos</Title>
        <Paragraph className={`paragraph ${mode}`}>
          Essa página lista alguns dos principais projetos que desenvolvi durante a minha jornada como programador.
        </Paragraph>

        <Row gutter={[16, 16]}>
          {ProjectsArray.map((item) => (
            <Col key={item.name} xs={{span: 24}} sm={{span: 12}} lg={{span: 8}}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
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
