import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled, { css } from "styled-components";
import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/SideBar";

export const Layout = (props) => {
  const Container = styled.div`
    min-height: 100vh;
    display: flex;
    margin: 0;
    max-width: 100vw;
  `;

  const LeftMenu = styled.div`
    display: inline-block;
    width: 300px;
    background-color: #ffffff;
    ${(props) =>
      !props.open &&
      css`
        display: none;
      `}
  `;

  const RightSection = styled.section`
    display: inline-block;
    width: ${(props) => (props.open ? "calc(100% - 300px)" : "100%")};
  `;

  const Content = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #00000005;
    padding: 3% 5%;
    height: calc(100% - 100px);
    position: relative;
  `;

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