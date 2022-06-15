import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, ExtLink, SidebarHeading } from './SidebarStyles'
import Link from 'next/link'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarHeading>CARCARÁ</SidebarHeading>
        <SidebarMenu>
          <div></div>
          <li>
            <Link href='/#teachers' passHref>
              <SidebarLink onClick={toggle}>Aulas Particulares</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <SidebarLink onClick={toggle}>Cursos</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/mentoria' passHref>
              <SidebarLink onClick={toggle}>Mentoria</SidebarLink>
            </Link>
          </li>
          <li>
            <Link href='/como-funciona' passHref>
              <SidebarLink onClick={toggle}>Como Funciona</SidebarLink>
            </Link>
          </li>
        </SidebarMenu>
        <SideBtnWrap>
          <ExtLink href="https://api.whatsapp.com/send?phone=5586995185757&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20o%20MeuProf.%0APode%20me%20ajudar%3F" target="blank" passHref >
            <SidebarRoute>Contato</SidebarRoute>
          </ExtLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
