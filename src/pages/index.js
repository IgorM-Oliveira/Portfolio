import Head from 'next/head'
import React, { useState } from 'react';
import Favicon from 'react-favicon'
import { Layout, Menu, List, Button, Typography } from 'antd';

import {
  BsFillSunFill,
  BsFillMoonFill,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsCodeSlash
} from 'react-icons/bs';

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

import { PieChartOutlined, AppstoreOutlined, DesktopOutlined } from '@ant-design/icons';

export default function Home() {
  const [current, setCurrent] = useState('sub1')
  const [mode, setMode] = useState('dark')

  const changeTheme = (value) => {
    console.log(value.mode);
    setMode(value.mode === 'dark' ? 'light' : 'dark');
  };

  const handleClick = e => {
    setCurrent(e.key);
  };

  const data = [
    {name : 'instagram', logo: <BsInstagram/>, href: 'https://www.instagram.com/igorm_oli/', color: '#e73170'},
    {name : 'github', logo: <BsGithub/>, href: 'https://github.com/igorm-oliveira', color: '#868488'},
    {name : 'linkedin', logo: <BsLinkedin/>, href: 'https://www.linkedin.com/in/igorm-oliveira/', color: '#0474b6'},
    {name : 'source', logo: <BsCodeSlash/>, href: 'https://github.com/IgorM-Oliveira/Portfolio', color: '#b4b2b2'},
  ];

  return (
    <div>
      <Favicon url='../public/favicon.ico' />
      <Head>
        <title>Igor M Oliveira</title>
      </Head>

      <Layout style={{ minHeight: '100vh' }}>
        <Header className={`navbar ${mode}`}>
          <span className={'name'}>
            Ig
          </span>
          <Menu
            className={'menu'}
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            theme={mode}
          >
            <Menu.Item key="mail" icon={<PieChartOutlined />}>
              <a href="/">
                Sobre
              </a>
            </Menu.Item>
            <Menu.Item key="about" icon={<AppstoreOutlined />}>
              Projetos
            </Menu.Item>
            <Menu.Item key="project" icon={<DesktopOutlined />}>
              Experiência
            </Menu.Item>
          </Menu>

          <span id={'mode'}>
            <Button onClick={() => changeTheme({mode})} shape="circle" icon={mode === 'dark' ? <BsFillMoonFill/> : <BsFillSunFill/>} />
          </span>
        </Header>

        <Content className={`container site-layout ${mode}`} style={{ padding: '0 50px', minHeight: '100%' }}>
          <div className={'content'}>
            <Title style={{color: mode === 'dark' ? '#f7f7f7' : '#505050'}}>Igor Matos Oliveira</Title>
            <Paragraph style={{color: mode === 'dark' ? '#f7f7f7' : '#505050'}}>Front-end Developer</Paragraph>
            <Paragraph style={{color: mode === 'dark' ? '#f7f7f7' : '#505050'}}>A developer focused on helping people with their everyday problems.</Paragraph>
          </div>
        </Content>

        <Footer className={mode} style={{ textAlign: 'center', bottom: 0}}>
          {/*
          <List
            grid={{ column: 4 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <a
                  style={{ alignItems: 'end', color: `${item.color}`, fontWeight: 'bold'}}
                  href={item.href}
                >
                  {item.name} {item.logo}
                </a>
              </List.Item>
            )}
          />
          */}
          <ul style={{display: 'flex', justifyContent: 'space-evenly', listStyle: 'none'}}>
            <li>
              <a className={`insta ${mode}`} href={'https://www.instagram.com/igorm_oli/'}>Instagram <BsInstagram/></a>
            </li>
            <li>
              <a className={`git ${mode}`} href={'https://github.com/igorm-oliveira'}>GitHub <BsGithub/></a>
            </li>
            <li>
              <a className={`linke ${mode}`} href={'https://www.linkedin.com/in/igorm-oliveira/'}>Linkedin <BsLinkedin/></a>
            </li>
            <li>
              <a className={`source ${mode}`} href={'https://github.com/IgorM-Oliveira/Portfolio'}>Source <BsCodeSlash/></a>
            </li>
          </ul>
        </Footer>
      </Layout>
    </div>
  )
}
