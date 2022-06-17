import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, ExtLink, LogoWrapper, SidebarExternalLink } from './SidebarStyles'
import Image from 'next/image';
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <LogoWrapper>
        <Image src="/LogoCarcara.png" alt='Logo Carcará' width={70} height={70} />
      </LogoWrapper>
      <SidebarWrapper>
        <SidebarMenu>
          <div></div>
          <li>
            <Link href='/loja' passHref>
              <SidebarLink onClick={toggle}>Produtos</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/carteira-digital' passHref>
              <SidebarLink onClick={toggle}>Carteirinha</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/vantagens' passHref>
              <SidebarLink onClick={toggle}>Vantagens</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/treinos' passHref>
              <SidebarLink onClick={toggle}>Treinos</SidebarLink>
            </Link>
          </li>
        </SidebarMenu>
        <SideBtnWrap>
          <ExtLink href="https://docs.google.com/forms/d/e/1FAIpQLSfMe8neKR43T-vYyPEYdByruInaEHywdsTKDO9qiXA91dMwjQ/viewform" target="blank" passHref >
            <SidebarRoute>Seja Sócio</SidebarRoute>
          </ExtLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
