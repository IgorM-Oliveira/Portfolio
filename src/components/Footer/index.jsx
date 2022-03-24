import React from "react";
import {BsCodeSlash, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

import {useSelector} from "react-redux";
import {selectTheme} from "../../store/themeReducer";

const FooterComponent = () => {
  const mode = useSelector(selectTheme);

  return (
    <ul className={'footer'}>
      <li>
        <a className={`insta ${mode}`} href={'https://www.instagram.com/igorm_oli/'}><BsInstagram/></a>
      </li>
      <li>
        <a className={`git ${mode}`} href={'https://github.com/igorm-oliveira'}><BsGithub/></a>
      </li>
      <li>
        <a className={`linke ${mode}`} href={'https://www.linkedin.com/in/igorm-oliveira/'}><BsLinkedin/></a>
      </li>
      <li>
        <a className={`source ${mode}`} href={'https://github.com/IgorM-Oliveira/Portfolio'}><BsCodeSlash/></a>
      </li>
    </ul>
  )
}

export default FooterComponent;