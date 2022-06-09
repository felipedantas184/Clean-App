import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, ExtLink } from './FooterStyles'
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Página Inicial</FooterLinkTitle>
                <LinkS to="teachers"
        					smooth={true} duration={500} spy={true} exact='true' offset={-20}>
									<FooterLink>Professores</FooterLink>
								</LinkS>
	              <LinkS to="highlights"
        					smooth={true} duration={500} spy={true} exact='true' offset={-60}>
									<FooterLink>Motivos</FooterLink>
								</LinkS>
	              <LinkS to="perks"
        					smooth={true} duration={500} spy={true} exact='true' offset={-20}>
									<FooterLink>Vantagens</FooterLink>
								</LinkS>
	              <LinkS to="start"
        					smooth={true} duration={500} spy={true} exact='true' offset={-20}>
									<FooterLink>Enem</FooterLink>
								</LinkS>
	          </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Junte-se</FooterLinkTitle>
                <Link href="/cursos" passHref>
									<FooterLink>Cursos Enem</FooterLink>
								</Link>
								<Link href="/cursos" passHref>
									<FooterLink>Mentoria Enem</FooterLink>
								</Link>
	              <ExtLink href="mailto:meuprof.contato@gmail.com" target='_blank' rel="noreferrer" aria-label='Email'>
									<FooterLink>E-mail MeuProf</FooterLink>
								</ExtLink>
	              <Link href="/" passHref>
									<FooterLink>Apoie-nos</FooterLink>
								</Link>
	          </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                <Link href="/como-funciona" passHref >
									<FooterLink>Como Funciona</FooterLink>
								</Link>
	              <ExtLink href="https://www.instagram.com/meu.prof/" target='_blank' rel="noreferrer" >
									<FooterLink>Quem somos</FooterLink>
								</ExtLink>
								<Link href="/#teachers" passHref >
									<FooterLink>Professores</FooterLink>
								</Link>
								<Link href="/#start" passHref >
									<FooterLink>Projetos</FooterLink>
								</Link>
	          </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <ExtLink href="https://www.instagram.com/meu.prof/" target='_blank' rel="noreferrer" aria-label='Instagram'>
									<FooterLink>Instagram</FooterLink>
								</ExtLink>
	              <ExtLink href="https://www.facebook.com/MeuProf.THE/" target='_blank' rel="noreferrer" aria-label='Facebook'>
									<FooterLink>Facebook</FooterLink>
								</ExtLink>
	              <ExtLink href="mailto:meuprof.contato@gmail.com" target='_blank' rel="noreferrer" aria-label='Email'>
									<FooterLink>Email</FooterLink>
								</ExtLink>
	              <ExtLink href="https://www.linkedin.com/company/meu-prof/" target='_blank' rel="noreferrer" aria-label='LinkedIn'>
									<FooterLink>LinkedIn</FooterLink>
								</ExtLink>
	          </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <Link href='/' passHref onClick={toggleHome}>
							<SocialLogo>
								MeuProf
							</SocialLogo>
            </Link>
            <WebsiteRights>MeuProf © {new Date().getFullYear()} Criado por Felipe Dantas.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink rel="noreferrer" href='https://www.instagram.com/meu.prof/' target='_blank' aria-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://www.facebook.com/MeuProf.THE/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href="mailto:meuprof.contato@gmail.com" target='_blank' aria-label='Email'>
                <FaEnvelope />
              </SocialIconLink>
              <SocialIconLink rel="noreferrer" href='https://www.linkedin.com/company/meu-prof/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
