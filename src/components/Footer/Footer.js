import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>⟠ 746200.eth</LinkTitle>
          <LinkItem href="https://debank.com/profile/0xbff3ee7d3648ce6b7de82dea427c3a1629aaf671">⟠ 746200.eth</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@hlabz.cc">
            contact@hlabz.cc
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <h3>₿ DONATE</h3>
          <Slogan>
            <center><h5>♛ BTC: <strong>bc1qp4zxxj0k0whkm483qv5dk2rs6sgh2tt70h44rf</strong></h5></center>
            <center><h5>♛ ETH: <strong>0xbFF3eE7d3648Ce6b7DE82dEa427c3A1629aaf671</strong></h5></center>
            <center><h5>♛ LTC: <strong>ltc1qtyqsh3sgnaa9sdhe89p6qu2s6g75s70yzeqdyu</strong></h5></center>
            <center><h5>♛ SOL: <strong>DJJqiJv54RfJEWYAEmxxbuH4eWQJBQKH2ea3N64byPyr</strong></h5></center>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/HLABZcc">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/HLABZcc">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/hlabzcc/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
