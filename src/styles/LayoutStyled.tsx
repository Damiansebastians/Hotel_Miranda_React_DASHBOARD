import styled, { css } from "styled-components";

export interface RightSectionProps {
  open: boolean;
  width: string;
}

  const Container = styled.div`
    min-height: 100vh;
    display: flex;
    margin: 0;
    max-width: 100vw;
  `;

  const LeftMenu = styled.div<RightSectionProps>`
    display: inline-block;
    width: 300px;
    background-color: #ffffff;
    ${(props) =>
      !props.open &&
      css`
        display: none;
      `}
  `;

  const RightSection = styled.section<RightSectionProps>`
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

  export {
    Container,
    LeftMenu,
    RightSection,
    Content,
  }