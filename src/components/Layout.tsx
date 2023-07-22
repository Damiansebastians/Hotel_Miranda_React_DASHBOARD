import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './navBar/NavBar';
import SideBar from './sideBar/SideBar';
import { Container, Content, LeftMenu, RightSection } from "../styles/LayoutStyled";

interface LayoutProps {
  setAuth: (value: boolean) => void;
}

const Layout: React.FC<LayoutProps> = ({ setAuth }) => {
  const [open, setOpen] = useState(true);

  return ( 
    <>
      <Container>
        <LeftMenu open={open}>
          <SideBar />
        </LeftMenu>
        <RightSection open={open}>
          <NavBar setAuth={setAuth} showSideBar={setOpen} open={open} />
          <Content>
            <Outlet />
          </Content>
        </RightSection>
      </Container>
    </>
  )
};

export default Layout;
