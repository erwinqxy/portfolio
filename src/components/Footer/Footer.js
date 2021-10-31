import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:erwin.quek.xian.yi@gmail.com">erwin.quek.xian.yi@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
      <SocialIcons href= "https://github.com/erwinqxy">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href= "https://www.linkedin.com/in/erwin-quek-3ab0831a8/">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  )
};

export default Footer;
