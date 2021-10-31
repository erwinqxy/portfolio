import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style = {{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}> 
          <DiCssdeck size="3rem" /> <Span>Erwin Quek</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects"> 
          <NavLink>My Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech"> 
          <NavLink>My Experiences</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about"> 
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href= "https://github.com/erwinqxy">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href= "https://www.linkedin.com/in/erwin-quek-3ab0831a8/">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
