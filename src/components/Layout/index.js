import React from "react";
import Link from "next/link";

import { Layout } from 'antd';
import { AppstoreOutlined, DesktopOutlined, UserOutlined } from "@ant-design/icons";

import {useDispatch, useSelector} from "react-redux";

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
      icon: <UserOutlined />
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
    <Layout className={'layout'}>
      <Header className={`navbar ${mode}`}>
        <span className={'gradient name'} style={{paddingRight: '25px'}}>
          <Link href="/">
            <a onClick={() => dispatch(changeCurrent(null))}>Ig</a>
          </Link>
        </span>
        <ManuComponent data={dataManu}/>
        <ModeComponent />
      </Header>

      <Content className={`container site-layout ${mode}`}>
        {props.children}
      </Content>

      <Footer className={`footerLayout ${mode}`}>
        <FooterComponent />
      </Footer>
    </Layout>
  )
}

export default LayoutComponent;