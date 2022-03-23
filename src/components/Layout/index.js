import React from "react";
import Link from "next/link";

import { Layout } from 'antd';
import { AppstoreOutlined, DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

import {useDispatch, useSelector} from "react-redux";

import Head from 'next/head'
import Favicon from 'react-favicon'
import {changeCurrent} from "../../store/currentReducer";
import ManuComponent from "../Manu";
import ModeComponent from "../ButtonMode";
import FooterComponent from "../Footer";
import {selectTheme} from "../../store/themeReducer";

const { Header, Footer, Content } = Layout;

const LayoutComponent = (props) => {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);

  const dataManu = [
    {
      name: 'Sobre',
      key: 'about',
      router: '/about',
      icon: <PieChartOutlined/>
    },
    {
      name: 'Projetos',
      key: 'project',
      router: '/project',
      icon: <AppstoreOutlined/>
    },
    {
      name: 'Experiência',
      key: 'experience',
      router: '/experience',
      icon: <DesktopOutlined/>
    }
  ]

  return (
    <div>
      <Favicon url='../../../public/favicon.ico'/>
      <Head>
        <title>Igor M Oliveira</title>
      </Head>

      <Layout className={'layout'}>
        <Header className={`navbar ${mode}`}>
          <span className={'gradient name'}>
            <Link href="/">
              <a onClick={() => dispatch(changeCurrent(null))}>Ig</a>
            </Link>
          </span>

          <ManuComponent data={dataManu}/>

          <span>
            <ModeComponent />
          </span>
        </Header>

        <Content className={`container site-layout ${mode}`}>
          {props.children}
        </Content>

        <Footer className={`footerLayout ${mode}`}>
          <FooterComponent />
        </Footer>
      </Layout>
    </div>
  )
}

export default LayoutComponent;