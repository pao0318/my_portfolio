import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '14px', }}>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#acomplishments">
          <NavLink>Acomplishments</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/pao0318'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/siddharth-sharma-a618a2199/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://instagram.com/_pao_0318'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/Siddhar50384612'>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
