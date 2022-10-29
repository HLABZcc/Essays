import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCreativecommons } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>

    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCreativecommons size="3rem" /> <span>HLABZ.cc®</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>📓 Essays</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>⭐️ About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>🏆 Achievements</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/HLABZcc">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/HLABZcc">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/hlabzcc/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
