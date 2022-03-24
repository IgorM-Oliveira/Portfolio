import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

import {Provider} from "react-redux";
import store from '../store/storeConfig'
import LayoutComponent from "../components/Layout";

export default function Portfolio({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  )
}