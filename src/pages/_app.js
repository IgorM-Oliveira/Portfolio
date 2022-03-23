import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import React, { useState } from 'react';

import Link from 'next/link'
import Head from 'next/head'
import Favicon from 'react-favicon'

import { Layout, Menu, Button } from 'antd';
import {AppstoreOutlined, DesktopOutlined, PieChartOutlined} from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

import {
  BsFillSunFill,
  BsFillMoonFill,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsCodeSlash
} from 'react-icons/bs';

export default function Portfolio({ Component, pageProps }) {
  const [current, setCurrent] = useState()
  const [mode, setMode] = useState('dark')

  const changeTheme = (value) => {
    console.log(value.mode);
    setMode(value.mode === 'dark' ? 'light' : 'dark');
  };

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Favicon url='../public/favicon.ico'/>
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
            <Menu.Item key="mail" icon={<PieChartOutlined/>}>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<AppstoreOutlined/>}>
              <Link href="/project">
                <a>Projetos</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="project" icon={<DesktopOutlined/>}>
              <Link href="/experience">
                <a>Experiência</a>
              </Link>
            </Menu.Item>
          </Menu>

          <span id={'mode'}>
            <Button onClick={() => changeTheme({mode})} shape="circle" icon={mode === 'dark' ? <BsFillMoonFill/> : <BsFillSunFill/>} />
          </span>
        </Header>

        <Content className={`container site-layout ${mode}`} style={{ padding: '0 50px', minHeight: '100%' }}>
          <Component {...pageProps} />
        </Content>

        <Footer
          className={`footer ${mode}`}
        >
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