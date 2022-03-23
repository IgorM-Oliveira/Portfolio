import React from "react";
import {BsCodeSlash, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

import {useSelector} from "react-redux";

const FooterComponent = () => {
  const mode = useSelector(state => state.theme.mode);

  return (
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
  )
}

export default FooterComponent;