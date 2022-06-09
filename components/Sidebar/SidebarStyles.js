import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #411551;
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 100%);
  background-size: 120%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.7s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')};

  font-family: "Josefin Sans";
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
`
export const SidebarHeading = styled.h1`
  font-size: 48px;
  font-family: 'Josefin Sans';
  text-align: center;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media  screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`
export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  user-select: none;

  &:hover {
    color: #A334CB;
    transition: 0.2s ease-in-out;
  }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled.p`
  border-radius: 10px;
  background: #000;
  white-space: nowrap;
  padding: 14px 64px;
  color: #F6F6F6;
  font-size: 24px;
  outline:  none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  font-family: 'Anton';
  text-transform: uppercase;

  &:hover {
    background: #fff;
    color: #010606;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
  }
`
export const ExtLink = styled.a`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
    margin-right: 0px;
  }
  }
`