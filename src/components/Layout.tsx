import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './navBar/NavBar';
import SideBar from './sideBar/SideBar';
import { Container, Content, LeftMenu, RightSection } from "../styles/LayoutStyled";

interface LayoutProps {
  setAuth: (value: boolean) => void;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const [open, setOpen] = useState(true);

  return ( 
    <>
      <Container>
        <LeftMenu open={open}>
          <SideBar />
        </LeftMenu>
        <RightSection open={open}>
          <NavBar setAuth={props.setAuth} showSideBar={setOpen} open={open} />
          <Content>
            <Outlet />
          </Content>
        </RightSection>
      </Container>
    </>
  )
};