import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+91-9660489414'>+91-9660489414</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:sharma.siddharthspacex21@gmail.com'>sharma.siddharthspacex21@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating is the only way ahead</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper >
  );
};

export default Footer;
