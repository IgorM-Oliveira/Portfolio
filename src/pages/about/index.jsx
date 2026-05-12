import React from 'react';
import {Typography, Col} from "antd";
import {useSelector} from "react-redux";
import {selectTheme} from "../../store/themeReducer.js";

import {styled} from '@stitches/react';

const {Title, Paragraph} = Typography;

export default function Home() {
  const mode = useSelector(selectTheme);

  const Timeline = styled('div', {
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

  const EducationArray = [
    {
      function: 'Bacharelado em Engenharia de Software',
      link: 'https://www.unigran.br/dourados',
      company: 'Unigran',
      address: 'Dourados, MS',
      dateInitial: '2024',
      duration: 'Concluído'
    },
    {
      function: 'Técnico em Informática para Internet',
      link: 'https://www.ifms.edu.br/',
      company: 'IFMS - Instituto Federal de Mato Grosso do Sul',
      address: 'Mato Grosso do Sul, MS',
      dateInitial: '2020',
      duration: 'Concluído'
    },
  ]

  const ExperienceArray = [
    {
      function: 'Desenvolvedor Fullstack',
      link: 'https://www.leardi.com.br/',
      company: 'Paulo Roberto Leardi',
      address: 'Brasil',
      dateInitial: 'Maio 2025',
      dateEnd: 'Abril 2026',
      duration: '1 ano',
      text: 'Desenvolvimento de novas funcionalidades, automações, integrações de pagamento e melhorias de performance em aplicações com Laravel, React.js, TypeScript, Docker e MySQL.'
    },
    {
      function: 'Desenvolvedor Fullstack',
      link: 'https://www.genesis.tec.br/',
      company: 'Gênesis Tecnologia e Inovação',
      address: 'Dourados, MS',
      dateInitial: 'Jan 2023',
      dateEnd: 'Mar 2025',
      duration: '2 anos 3 meses',
      text: 'Implementação de funcionalidades em sistemas de automação e gestão de pessoas, manutenção de sistemas críticos, liderança técnica e adoção de React.js, Next.js, APIs REST e Docker.'
    },
    {
      function: 'Desenvolvedor Front-end',
      link: 'https://www.genesis.tec.br/',
      company: 'Gênesis Tecnologia e Inovação',
      address: 'Dourados, MS',
      dateInitial: 'Fev 2021',
      dateEnd: 'Jan 2023',
      duration: '2 anos',
      text: 'Automação de sistemas com Node.js e PostgreSQL, desenvolvimento com Next.js, React.js, Vue.js, Laravel e configuração de soluções para escolas, prefeituras e empresas.'
    },
    {
      function: 'Desenvolvedor Front-end',
      link: 'https://www.ifms.edu.br/',
      company: 'IFMS - Instituto Federal de Mato Grosso do Sul',
      address: 'Mato Grosso do Sul, MS',
      dateInitial: 'Jan 2019',
      dateEnd: 'Dez 2020',
      duration: '2 anos',
      text: 'Participação no desenvolvimento de protótipo de controle de estoque com emissão de NFe, atuando no frontend e backend com React, Node.js, Laravel e PostgreSQL.'
    },
  ]

  return (
    <Col span={12} offset={6}>
      <div className={'content'}>
        <Title className={`gradient ${mode}`}>Sobre mim</Title>
        <div className={'description'}>
          <img className={'img'} src="https://avatars.githubusercontent.com/u/41808818?v=4" alt="Perfil"/>
          <div>
            <Title level={3} className={`${mode}`}>Engenheiro de Software | Laravel e React</Title>
            <Paragraph className={`paragraph ${mode}`}>
              Sou desenvolvedor full-stack em Dourados, Mato Grosso do Sul, com foco em React.js no frontend e Laravel no backend.
            </Paragraph>
            <Paragraph className={`paragraph ${mode}`}>
              Atuo na criação de soluções escaláveis, refatoração de sistemas legados, manutenção de sistemas críticos e desenvolvimento de software robusto com Node.js, Next.js, TypeScript, PostgreSQL, APIs REST e Docker.
            </Paragraph>
            <Paragraph className={`paragraph ${mode}`}>
              <a className={`line ${mode}`} href={'mailto:igor.matos.oliveira.xyz@gmail.com'}>igor.matos.oliveira.xyz@gmail.com</a> · +55 (67) 99222-2332
            </Paragraph>
          </div>
        </div>

        <div className={'bio'}>
          <div style={{width: '5px', height: '25px', background: '#03AEB4', marginRight: '20px'}}/>
          <Title level={3} className={`${mode}`}>Bio</Title>
        </div>
        <Paragraph className={`paragraph ${mode}`}>
          Tenho experiência sólida com metodologias ágeis, colaboração com equipes multidisciplinares e entrega de valor para o negócio. Já trabalhei em integrações entre sistemas de RH, sistemas de ponto eletrônico para gestão pública e plataformas educacionais para escolas, professores e alunos.
        </Paragraph>
        <Paragraph className={`paragraph ${mode}`}>
          Busco resolver problemas com excelência técnica, clareza no desenvolvimento e aprendizado contínuo.
        </Paragraph>

        <div className={'bio'}>
          <div style={{width: '5px', height: '25px', background: '#03AEB4', marginRight: '20px'}}/>
          <Title level={3} className={`${mode}`}>Escolaridade</Title>
        </div>

        <div>
          {EducationArray.map((item => (
            <Timeline key={item.function}>
              <Title level={4} className={`${mode}`}>{item.function}</Title>
              <Paragraph className={`paragraph ${mode}`}>
                <a href={item.link} className={`line ${mode}`}>
                  {item.company}
                </a> - {item.address}
              </Paragraph>
              <Paragraph
                className={`paragraph ${mode}`}>{item.dateEnd ? `${item.dateInitial} - ${item.dateEnd}` : item.dateInitial} • {item.duration}</Paragraph>
            </Timeline>
          )))}
        </div>

        <br/>

        <div className={'bio'}>
          <div style={{width: '5px', height: '25px', background: '#03AEB4', marginRight: '20px'}}/>
          <Title level={3} className={`${mode}`}>Experiência</Title>
        </div>

        <div>
          {ExperienceArray.map((item => (
            <Timeline key={`${item.company}-${item.dateInitial}`}>
              <Title level={4} className={`${mode}`}>{item.function}</Title>
              <Paragraph className={`paragraph ${mode}`}>
                <a href={item.link} className={`line ${mode}`}>
                  {item.company}
                </a> - {item.address}
              </Paragraph>
              <Paragraph
                className={`paragraph ${mode}`}>{item.dateEnd ? `${item.dateInitial} - ${item.dateEnd}` : item.dateInitial} • {item.duration}</Paragraph>
              <Paragraph className={`paragraph ${mode}`}>{item.text}</Paragraph>
            </Timeline>
          )))}
        </div>
      </div>
    </Col>
  )
}
